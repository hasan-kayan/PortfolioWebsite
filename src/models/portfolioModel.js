const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  pdf: {
    data: Buffer,
    contentType: String,
  },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema, "Portfolio"); // Collection name is "Portfolio"
