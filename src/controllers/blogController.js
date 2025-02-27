/**
 * @file blogController.js
 * @description Controller functions for handling blog CRUD operations.
 */

const Blog = require("../models/blogModel");

/**
 * @desc    Create a new blog post
 * @route   POST /api/blogs
 */
const createBlog = async (req, res) => {
  try {
    const { id, title, content, images, tags, url } = req.body;

    if (!id || !title || !content || !url) {
      return res.status(400).json({ error: "ID, Title, Content, and URL are required" });
    }

    const existingBlog = await Blog.findOne({ id });
    if (existingBlog) {
      return res.status(400).json({ error: "Blog ID already exists" });
    }

    const newBlog = new Blog({ id, title, content, images, tags, url });
    await newBlog.save();

    res.status(201).json({ message: "✅ Blog created successfully", blog: newBlog });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Get all blog posts
 * @route   GET /api/blogs
 */
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Get a single blog post by ID
 * @route   GET /api/blogs/:id
 */
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({ id: req.params.id });
    if (!blog) {
      return res.status(404).json({ message: "❌ Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Update a blog post
 * @route   PUT /api/blogs/:id
 */
const updateBlog = async (req, res) => {
  try {
    const { title, content, images, tags, url } = req.body;

    const updatedBlog = await Blog.findOneAndUpdate(
      { id: req.params.id },
      { title, content, images, tags, url, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "❌ Blog not found" });
    }

    res.json({ message: "✅ Blog updated successfully", blog: updatedBlog });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Delete a blog post
 * @route   DELETE /api/blogs/:id
 */
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findOneAndDelete({ id: req.params.id });
    if (!deletedBlog) {
      return res.status(404).json({ message: "❌ Blog not found" });
    }

    res.json({ message: "✅ Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
