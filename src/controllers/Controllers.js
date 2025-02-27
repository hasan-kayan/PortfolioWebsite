// Import all controllers
const authController = require("./authControllers/authController");
const blogController = require("./websiteControllers/blogController");
const portfolioController = require("./websiteControllers/portfolioControllers");
const projectController = require("./websiteControllers/projectControllers")
// Export all controllers as an object
module.exports = {
  authController,
  blogController,
  portfolioController,
  projectController,
};
