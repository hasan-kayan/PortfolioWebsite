/**
 * @file portfolioRoutes.js
 * @description Routes for handling portfolio PDF upload, retrieval, and deletion with authentication.
 * @module routes/portfolioRoutes
 */

const express = require("express");
const multer = require("multer");
const {authMiddleware} = require("../../middleware/Middlewares");
const {portfolioController} = require("../../controllers/Controllers");

const router = express.Router();

// Multer storage for handling file uploads (in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * @route   GET /api/portfolio/download
 * @desc    Retrieve the stored PDF (Public access)
 */
router.get("/download", portfolioController.downloadPortfolio);

/**
 * @route   POST /api/portfolio/upload
 * @desc    Upload or update the PDF file (Protected: Requires authentication)
 * @access  Private
 */
router.post("/upload", authMiddleware.authenticateToken, upload.single("pdf"), portfolioController.uploadPortfolio);

/**
 * @route   DELETE /api/portfolio/delete
 * @desc    Delete the stored PDF (Protected: Requires authentication)
 * @access  Private
 */
router.delete("/delete", authMiddleware.authenticateToken, portfolioController.deletePortfolio);

module.exports = router;
