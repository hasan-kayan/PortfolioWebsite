const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  pdf: {
    data: Buffer, // Stores the PDF file as binary data
    contentType: String, // Stores the MIME type (e.g., application/pdf)
  },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
