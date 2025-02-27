const mongoose = require("mongoose");

/**
 * @typedef {Object} Project
 * @property {string} id - The unique identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string[]} technologies - An array of technologies used in the project.
 * @property {string} [githubLink] - The GitHub link for the project's repository.
 * @property {string} [demoLink] - The link to the live demo of the project.
 * @property {string[]} images - An array of image URLs related to the project.
 * @property {Date} createdAt - The date when the project was created.
 */
const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String }],
  githubLink: { type: String },
  demoLink: { type: String },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", ProjectSchema, "Projects"); // Collection name is "Projects"
