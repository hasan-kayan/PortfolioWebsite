const mongoose = require("mongoose");

/**
 * BlogSchema defines the structure of blog documents in the MongoDB database.
 * 
 * @property {String} id - The unique identifier for the blog post. This field is required and must be unique.
 * @property {String} title - The title of the blog post. This field is required.
 * @property {String} content - The content of the blog post. This field is required.
 * @property {String[]} images - An array of image URLs associated with the blog post.
 * @property {String[]} tags - An array of tags associated with the blog post.
 * @property {String} url - The unique URL for the blog post. This field must be unique.
 * @property {Date} createdAt - The date and time when the blog post was created. Defaults to the current date and time.
 * @property {Date} updatedAt - The date and time when the blog post was last updated. Defaults to the current date and time.
 */
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
