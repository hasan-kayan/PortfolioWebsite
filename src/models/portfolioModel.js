const mongoose = require("mongoose");

/**
 * Schema representing a portfolio document.
 * 
 * @typedef {Object} PortfolioSchema
 * @property {Object} pdf - The PDF file associated with the portfolio.
 * @property {Buffer} pdf.data - The binary data of the PDF file.
 * @property {String} pdf.contentType - The MIME type of the PDF file.
 * @property {Date} uploadedAt - The date when the portfolio was uploaded. Defaults to the current date and time.
 */
const PortfolioSchema = new mongoose.Schema({
  pdf: {
    data: Buffer,
    contentType: String,
  },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema, "Portfolio"); // Collection name is "Portfolio"
