const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Connect to Portfolio Database
    const portfolioConnection = mongoose.createConnection(
      `${process.env.MONGO_CONNECT_STRING}my-portfolio`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    // Connect to Projects Database
    const projectsConnection = mongoose.createConnection(
      `${process.env.MONGO_CONNECT_STRING}my-projects`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    // Connect to Blogs Database
    const blogsConnection = mongoose.createConnection(
      `${process.env.MONGO_CONNECT_STRING}my-blogs`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("Connected to Portfolio, Projects, and Blogs databases");

    return { portfolioConnection, projectsConnection, blogsConnection };
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
