/**
 * @file projectRoutes.js
 * @description Routes for handling project CRUD operations.
 */

const express = require("express");
const {authMiddleware} = require("../../middleware/Middlewares");
const {projectController} = require("../../controllers/Controllers");

const router = express.Router();

/**
 * @route   POST /api/projects
 * @desc    Create a new project
 * @access  Private (Requires authentication)
 */
router.post("/create-project", authMiddleware.authenticateToken, projectController.createProject);

/**
 * @route   GET /api/projects
 * @desc    Get all projects
 * @access  Public
 */
router.get("/get-all-projects", projectController.getAllProjects);

/**
 * @route   GET /api/projects/:id
 * @desc    Get a single project by ID
 * @access  Public
 */
router.get("/get-projectby/:id", projectController.getProjectById);

/**
 * @route   PUT /api/projects/:id
 * @desc    Update a project
 * @access  Private (Requires authentication)
 */
router.put("/update-projectby/:id", authMiddleware.authenticateToken, projectController.updateProject);

/**
 * @route   DELETE /api/projects/:id
 * @desc    Delete a project
 * @access  Private (Requires authentication)
 */
router.delete("/delete-projectby/:id", authMiddleware.authenticateToken, projectController.deleteProject);

module.exports = router;
