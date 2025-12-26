import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeFirebase } from './config/firebase.config.js';
import { initializeGCS } from './config/gcs.config.js';

dotenv.config();

const app = express();
// Cloud Run sets PORT automatically, fallback to 5001 for local development
const PORT = process.env.PORT || 5001;

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

// Initialize Firebase and Google Cloud Storage first, then load routes
async function startServer() {
  try {
    // Initialize Firebase (for Firestore)
    await initializeFirebase();
    console.log('✅ Firebase initialized successfully');
    
    // Initialize Google Cloud Storage (for file storage)
    await initializeGCS();
    console.log('✅ Google Cloud Storage initialized successfully');
    
    // Import routes after Firebase is initialized
    const { default: authRoutes } = await import('./routes/auth.routes.js');
    const { default: projectRoutes } = await import('./routes/project.routes.js');
    const { default: blogRoutes } = await import('./routes/blog.routes.js');
    const { default: portfolioRoutes } = await import('./routes/portfolio.routes.js');
    
    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/projects', projectRoutes);
    app.use('/api/blogs', blogRoutes);
    app.use('/api/portfolio', portfolioRoutes);
    
    // Health check
    app.get('/health', (req, res) => {
      res.json({ status: 'ok', message: 'Server is running' });
    });
    
    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
      console.log(`💚 Health check: http://localhost:${PORT}/health`);
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
  } catch (error: any) {
    console.error('❌ Firebase initialization error:', error);
    console.error('💡 Make sure FIREBASE_SERVICE_ACCOUNT_KEY or FIREBASE_SERVICE_ACCOUNT_PATH is set in .env');
    console.error('💡 Make sure serviceAccountKey.json file exists in server/ directory');
    process.exit(1);
  }
}

startServer();


