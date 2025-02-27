/**
 * @file projectController.js
 * @description Controller functions for handling project CRUD operations.
 */

const Project = require("../../models/projectModel");

/**
 * @desc    Create a new project
 * @route   POST /api/projects
 */
const createProject = async (req, res) => {
  try {
    const { id, title, description, technologies, githubLink, demoLink, images } = req.body;

    if (!id || !title || !description) {
      return res.status(400).json({ error: "ID, Title, and Description are required" });
    }

    const existingProject = await Project.findOne({ id });
    if (existingProject) {
      return res.status(400).json({ error: "Project ID already exists" });
    }

    const newProject = new Project({ id, title, description, technologies, githubLink, demoLink, images });
    await newProject.save();

    res.status(201).json({ message: "✅ Project created successfully", project: newProject });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 */
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Get a single project by ID
 * @route   GET /api/projects/:id
 */
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({ id: req.params.id });
    if (!project) {
      return res.status(404).json({ message: "❌ Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Update a project
 * @route   PUT /api/projects/:id
 */
const updateProject = async (req, res) => {
  try {
    const { title, description, technologies, githubLink, demoLink, images } = req.body;

    const updatedProject = await Project.findOneAndUpdate(
      { id: req.params.id },
      { title, description, technologies, githubLink, demoLink, images, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "❌ Project not found" });
    }

    res.json({ message: "✅ Project updated successfully", project: updatedProject });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Delete a project
 * @route   DELETE /api/projects/:id
 */
const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findOneAndDelete({ id: req.params.id });
    if (!deletedProject) {
      return res.status(404).json({ message: "❌ Project not found" });
    }

    res.json({ message: "✅ Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
