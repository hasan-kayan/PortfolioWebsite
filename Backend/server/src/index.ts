import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeFirebase } from './config/firebase.config.js';
import { initializeGCS } from './config/gcs.config.js';

dotenv.config();

const app = express();
// Cloud Run sets PORT automatically, fallback to 5001 for local development
const PORT = parseInt(process.env.PORT || '5001', 10);

// CORS Configuration
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:5001',
      'https://hasankayan-d818c.web.app',
      'https://www.hasankayan.com',
      'https://hasankayan.com',
    ];
    
    // Add Cloud Run URL if provided
    if (process.env.CLOUD_RUN_URL) {
      allowedOrigins.push(process.env.CLOUD_RUN_URL);
    }
    
    // Add frontend URL from environment if provided
    if (process.env.FRONTEND_URL) {
      allowedOrigins.push(process.env.FRONTEND_URL);
    }
    
    // In production, allow all origins for now (can be restricted later)
    // In development, check against allowed list
    if (process.env.NODE_ENV === 'production' || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.warn(`⚠️  CORS: Blocked origin: ${origin}`);
      callback(null, true); // Still allow for debugging, but log it
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Length', 'Content-Type'],
  maxAge: 86400, // 24 hours
};

// Middleware - CORS must be before other middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint (must be available immediately for Cloud Run)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Initialize Firebase and Google Cloud Storage, then load routes
let isInitialized = false;

async function initializeServices() {
  if (isInitialized) return;
  
  try {
    console.log('🔄 Initializing Firebase...');
    await initializeFirebase();
    console.log('✅ Firebase initialized successfully');
    
    // Initialize GCS first (routes need it)
    console.log('🔄 Initializing Google Cloud Storage...');
    try {
      await initializeGCS();
      console.log('✅ Google Cloud Storage initialized successfully');
    } catch (gcsError: any) {
      console.warn('⚠️ GCS initialization failed:', gcsError.message);
      console.warn('⚠️ Some features (file uploads) may not work');
      // Continue anyway - auth routes don't need GCS
    }
    
    // Load routes after Firebase and GCS are initialized
    console.log('🔄 Loading routes...');
    const { default: authRoutes } = await import('./routes/auth.routes.js');
    const { default: projectRoutes } = await import('./routes/project.routes.js');
    const { default: blogRoutes } = await import('./routes/blog.routes.js');
    const { default: portfolioRoutes } = await import('./routes/portfolio.routes.js');
    
    // Register routes
    app.use('/api/auth', authRoutes);
    app.use('/api/projects', projectRoutes);
    app.use('/api/blogs', blogRoutes);
    app.use('/api/portfolio', portfolioRoutes);
    
    console.log('✅ All routes loaded successfully');
    isInitialized = true;
  } catch (error: any) {
    console.error('❌ Service initialization error:', error);
    console.error('💡 Error details:', {
      message: error.message,
      stack: error.stack
    });
    // Don't exit - let server run so health check works
  }
}

// Start server immediately (Cloud Run requirement)
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API endpoints available at http://0.0.0.0:${PORT}/api`);
  console.log(`💚 Health check: http://0.0.0.0:${PORT}/health`);
  
  // Initialize services in background (non-blocking)
  initializeServices().catch((error) => {
    console.error('❌ Background initialization failed:', error);
  });
}).on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
    console.error(`💡 Try: lsof -ti:${PORT} | xargs kill -9`);
    console.error(`💡 Or change PORT in .env file`);
  } else {
    console.error('❌ Server error:', err);
  }
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});


