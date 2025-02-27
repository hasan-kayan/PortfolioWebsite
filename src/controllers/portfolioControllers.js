/**
 * @file portfolioController.js
 * @description Controller functions for handling portfolio PDF upload, retrieval, and deletion.
 */

const Portfolio = require("../models/portfolioModel");

/**
 * @desc    Retrieve the stored PDF (Public access)
 * @route   GET /api/portfolio/download
 */
const downloadPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio || !portfolio.pdf) {
      return res.status(404).json({ message: "No PDF found" });
    }

    res.set("Content-Type", portfolio.pdf.contentType);
    res.send(portfolio.pdf.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Upload or update the PDF file (Protected: Requires authentication)
 * @route   POST /api/portfolio/upload
 */
const uploadPortfolio = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Update or create the portfolio entry
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      { pdf: { data: req.file.buffer, contentType: req.file.mimetype } },
      { new: true, upsert: true }
    );

    res.json({ message: "PDF uploaded successfully", portfolio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc    Delete the stored PDF (Protected: Requires authentication)
 * @route   DELETE /api/portfolio/delete
 */
const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      return res.status(404).json({ message: "No PDF found to delete" });
    }

    // Remove the PDF from the database
    await Portfolio.findOneAndUpdate({}, { $unset: { pdf: 1 } });

    res.json({ message: "PDF deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  downloadPortfolio,
  uploadPortfolio,
  deletePortfolio,
};
