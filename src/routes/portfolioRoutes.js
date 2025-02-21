/**
 * @file portfolioRoutes.js
 * @description Routes for handling portfolio PDF upload, retrieval, and deletion with authentication.
 * @module routes/portfolioRoutes
 */

const express = require("express");
const multer = require("multer");
const Portfolio = require("../models/portfolioModel");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

// Multer storage for handling file uploads (in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * @route   GET /api/portfolio/download
 * @desc    Retrieve the stored PDF (Public access)
 */
router.get("/download", async (req, res) => {
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
});

/**
 * @route   POST /api/portfolio/upload
 * @desc    Upload or update the PDF file (Protected: Requires authentication)
 * @access  Private
 */
router.post("/upload", authenticateToken, upload.single("pdf"), async (req, res) => {
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
});

/**
 * @route   DELETE /api/portfolio/delete
 * @desc    Delete the stored PDF (Protected: Requires authentication)
 * @access  Private
 */
router.delete("/delete", authenticateToken, async (req, res) => {
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
});

module.exports = router;
