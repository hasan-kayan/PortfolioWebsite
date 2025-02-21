const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String }], // List of technologies used e.g., ["React", "Node.js"]
  githubLink: { type: String }, // Optional GitHub repository link
  liveDemo: { type: String }, // Optional live demo link
  image: { type: String }, // URL for project image
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", ProjectSchema);
