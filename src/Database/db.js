const mongoose = require("mongoose");
require("dotenv").config();

const databases = {};

const connectDB = async () => {
  try {
    if (databases.portfolioDB) return databases; // Return existing connections

    const mongoURI = process.env.MONGO_CONNECT_STRING;
    if (!mongoURI) {
      throw new Error("MongoDB connection string is missing in environment variables.");
    }

    // Connect to MongoDB once
    const connection = await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB successfully!");

    // Store databases in a global object
    databases.portfolioDB = connection.connection.useDb("my-portfolio");
    databases.projectsDB = connection.connection.useDb("my-projects");
    databases.blogsDB = connection.connection.useDb("my-blogs");

    return databases;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Export the connection function and databases object
module.exports = { connectDB, databases };
