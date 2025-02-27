const express = require("express");
const cors = require("cors");
const setupRoutes = require("./routes/Routes"); // ✅ Import centralized routes
const config = require("./config/envConfig");

const app = express(); // Initialize Express

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for cross-origin requests

// Setup all routes
setupRoutes(app); // ✅ Use centralized route function

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
