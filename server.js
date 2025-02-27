/**
 * @file server.js
 * @description Entry point for the Authentication Service. This file sets up and starts the server.
 */

/**
 * @requires ./src/app - The main application module.
 * @requires ./src/config/envConfig - The configuration module for environment variables.
 * @requires ./src/Database/db - MongoDB connection module.
 */

const app = require("./src/app");
const config = require("./src/config/envConfig");
const connectDB = require("./src/Database/db"); // Import DB connection

const PORT = config.port; // Get configured port
const HOST = config.host; // Get configured host

/**
 * Starts the server after ensuring MongoDB is connected.
 */
const startServer = async () => {
  try {
    await connectDB(); // Ensure MongoDB is connected before starting the server
    app.listen(PORT, HOST, () => {
      console.log(`✅ Authentication microservice is running on http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error.message);
    process.exit(1);
  }
};

// Run the server
startServer();
