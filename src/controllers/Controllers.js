/**
 * Controllers module.
 * @module controllers
 */

/**
 * Authentication controller.
 * @type {Object}
 */
const authController = require("./authControllers/authController");

/**
 * Blog controller.
 * @type {Object}
 */
const blogController = require("./websiteControllers/blogController");

/**
 * Portfolio controller.
 * @type {Object}
 */
const portfolioController = require("./websiteControllers/portfolioControllers");

/**
 * Project controller.
 * @type {Object}
 */
const projectController = require("./websiteControllers/projectControllers");

/**
 * Export all controllers as an object.
 * @type {Object}
 * @property {Object} authController - Authentication controller.
 * @property {Object} blogController - Blog controller.
 * @property {Object} portfolioController - Portfolio controller.
 * @property {Object} projectController - Project controller.
 */
module.exports = {
  authController,
  blogController,
  portfolioController,
  projectController,
};
