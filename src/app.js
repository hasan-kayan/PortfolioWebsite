
/**
 * @fileoverview Main application file for the Authentication Service.
 * Initializes the Express application, sets up middleware, and defines routes.
 * 
 * @requires express
 * @requires cors
 * @requires ./routes/authRoutes
 * @requires ./config/envConfig
 * 
 * @module app
 */
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/envConfig');

const app = express(); // Application init Express

// Middleware
app.use(express.json());  // Parse JSON request bodies
app.use(cors());          // Enable CORS for cross-origin requests

// Routes
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
    res.json({ message: "Authentication microservice is running!" });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
