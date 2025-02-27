const express = require("express");

// Import all route modules
const authRoutes = require("./authRoutes/authRoutes");
const blogRoutes = require("./websiteRoutes/blogRoutes");
const portfolioRoutes = require("./websiteRoutes/portfolioRoutes");


// Create a function to set up all routes
const setupRoutes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/website/blog", blogRoutes);
  app.use("/api/website/portfolio", portfolioRoutes);

  // Default route
  app.get("/", (req, res) => {
    res.json({ message: "API is running!" });
  });
};

module.exports = setupRoutes;
