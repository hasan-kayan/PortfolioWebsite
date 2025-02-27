// Import all controllers
const authController = require("./authControllers/authController");
const blogController = require("./websiteControllers/blogController");
const portfolioController = require("./websiteControllers/portfolioControllers");

// Export all controllers as an object
module.exports = {
  authController,
  blogController,
  portfolioController,
};
