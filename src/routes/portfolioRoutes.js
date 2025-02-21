const express = require("express");
const multer = require("multer");
const getPortfolioModel = require("../models/portfolioModel");
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
    const Portfolio = getPortfolioModel();
    const portfolio = await Portfolio.findOne();
    if (!portfolio || !portfolio.pdf || !portfolio.pdf.data) {
      return res.status(404).json({ message: "No PDF found" });
    }

    res.set({
      "Content-Type": portfolio.pdf.contentType,
      "Content-Disposition": 'attachment; filename="portfolio.pdf"',
    });
    res.send(portfolio.pdf.data);
  } catch (err) {
    console.error("Error retrieving PDF:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @route   POST /api/portfolio/upload
 * @desc    Upload or update the PDF file (Protected: Requires authentication)
 */
router.post("/upload", authenticateToken, upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const Portfolio = getPortfolioModel();

    // Ensure only one PDF entry exists (overwrite existing)
    await Portfolio.deleteMany({});

    const newPortfolio = new Portfolio({
      pdf: { data: req.file.buffer, contentType: req.file.mimetype },
    });

    await newPortfolio.save();

    res.status(201).json({ message: "PDF uploaded successfully" });
  } catch (err) {
    console.error("Error uploading PDF:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @route   DELETE /api/portfolio/delete
 * @desc    Delete the stored PDF (Protected: Requires authentication)
 */
router.delete("/delete", authenticateToken, async (req, res) => {
  try {
    const Portfolio = getPortfolioModel();
    const deletedPortfolio = await Portfolio.findOneAndDelete({});

    if (!deletedPortfolio) {
      return res.status(404).json({ message: "No PDF found to delete" });
    }

    res.json({ message: "PDF deleted successfully" });
  } catch (err) {
    console.error("Error deleting PDF:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
