/**
 * @file blogRoutes.js
 * @description Routes for handling blog CRUD operations.
 */

const express = require("express");
const {authMiddleware} = require("../../middleware/Middlewares");
const {blogController} = require("../../controllers/Controllers");

const router = express.Router();

/**
 * @route   POST /api/blogs
 * @desc    Create a new blog post
 * @access  Private (Requires authentication)
 */
router.post("/create-blog", authMiddleware.authenticateToken, blogController.createBlog);

/**
 * @route   GET /api/blogs
 * @desc    Get all blogs
 * @access  Public
 */
router.get("/gett-all-blogs", blogController.getAllBlogs);

/**
 * @route   GET /api/blogs/:id
 * @desc    Get a single blog post by ID
 * @access  Public
 */
router.get("/get-blogby:id", blogController.getBlogById);

/**
 * @route   PUT /api/blogs/:id
 * @desc    Update a blog post
 * @access  Private (Requires authentication)
 */
router.put("/update-blogby:id", authMiddleware.authenticateToken, blogController.updateBlog);

/**
 * @route   DELETE /api/blogs/:id
 * @desc    Delete a blog post
 * @access  Private (Requires authentication)
 */
router.delete("/delete-blogby:id", authMiddleware.authenticateToken, blogController.deleteBlog);

module.exports = router;
