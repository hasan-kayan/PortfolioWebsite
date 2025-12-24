// Firebase Functions entry point
// This wraps the Express app for Firebase Functions

const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin (automatic in Functions)
if (!admin.apps.length) {
  admin.initializeApp();
}

// Import the built server code
// We'll use the server's dist folder
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

// CORS Configuration for Firebase Hosting
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://hasankayan-d818c.web.app',
      'https://hasankayan-d818c.firebaseapp.com',
      'https://www.hasankayan.com',
      'https://hasankayan.com',
    ];
    
    if (origin.includes('hasankayan-d818c') || 
        origin.includes('hasankayan.com') || 
        origin.includes('localhost')) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Length', 'Content-Type'],
  maxAge: 86400,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Import routes from server dist
// Note: We need to convert ES modules to CommonJS or use dynamic import
// For now, let's create a simple API structure

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running on Firebase Functions' });
});

// Temporary: Import routes dynamically
// We'll need to convert server routes to CommonJS or use a different approach
// For now, let's set up basic structure

// Export as Firebase Function
exports.api = functions.https.onRequest(app);
