const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  images: [{ type: String }],
  tags: [{ type: String }],
  url: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", BlogSchema, "Blogs"); // Ensure collection name is "Blogs"
