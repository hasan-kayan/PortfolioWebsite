/**
 * @file blogRoutes.js
 * @description Routes for handling blog CRUD operations.
 */

const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

/**
 * @route   POST /api/blogs
 * @desc    Create a new blog post
 * @access  Private (Requires authentication)
 */
router.post("/create-blog", authenticateToken, createBlog);

/**
 * @route   GET /api/blogs
 * @desc    Get all blogs
 * @access  Public
 */
router.get("/gett-all-blogs", getAllBlogs);

/**
 * @route   GET /api/blogs/:id
 * @desc    Get a single blog post by ID
 * @access  Public
 */
router.get("/get-blogby:id", getBlogById);

/**
 * @route   PUT /api/blogs/:id
 * @desc    Update a blog post
 * @access  Private (Requires authentication)
 */
router.put("/update-blogby:id", authenticateToken, updateBlog);

/**
 * @route   DELETE /api/blogs/:id
 * @desc    Delete a blog post
 * @access  Private (Requires authentication)
 */
router.delete("/delete-blogby:id", authenticateToken, deleteBlog);

module.exports = router;
