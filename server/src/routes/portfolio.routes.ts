import express from 'express';
import multer from 'multer';
import { FirestoreService } from '../services/firestore.service.js';
import { StorageService } from '../services/storage.service.js';
import { Portfolio } from '../models/Portfolio.model.js';
import { authenticateToken, AuthRequest } from '../middleware/auth.middleware.js';

const router = express.Router();
const portfolioService = new FirestoreService<Portfolio>('portfolio');
const storageService = new StorageService();

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  },
});

// Download portfolio (public)
router.get('/download', async (req, res) => {
  try {
    const portfolios = await portfolioService.getAll();
    const portfolio = portfolios[0]; // Get the most recent one
    
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    // Extract file path from URL
    // URL format: https://storage.googleapis.com/bucket-name/path/to/file
    const urlParts = portfolio.url.split('/');
    const bucketIndex = urlParts.findIndex((part: string) => part.includes('googleapis.com'));
    if (bucketIndex === -1) {
      return res.status(500).json({ message: 'Invalid portfolio URL format' });
    }
    // Skip googleapis.com and bucket name, get only the file path
    // urlParts structure: ['https:', '', 'storage.googleapis.com', 'bucket-name', 'path', 'to', 'file']
    const filePath = urlParts.slice(bucketIndex + 2).join('/'); // +2 to skip googleapis.com and bucket name

    // Get file from Google Cloud Storage and stream it
    try {
      const bucket = storageService.getBucket();
      const file = bucket.file(filePath);
      
      // Check if file exists
      const [exists] = await file.exists();
      if (!exists) {
        return res.status(404).json({ message: 'Portfolio file not found in storage' });
      }

      // Stream the file
      const stream = file.createReadStream();
      res.setHeader('Content-Type', portfolio.mimetype || 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${portfolio.filename || 'portfolio.pdf'}"`);
      res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
      
      stream.on('error', (error) => {
        console.error('Error streaming portfolio:', error);
        if (!res.headersSent) {
          res.status(500).json({ message: 'Error streaming portfolio file' });
        }
      });

      stream.pipe(res);
    } catch (storageError: any) {
      console.error('Error accessing portfolio from storage:', storageError);
      // Fallback: return the URL for frontend to handle directly
      res.json({ url: portfolio.url });
    }
  } catch (error: any) {
    console.error('Error downloading portfolio:', error);
    res.status(500).json({ 
      message: 'Error downloading portfolio',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Upload portfolio (protected)
router.post('/upload', authenticateToken, upload.single('pdf'), async (req: AuthRequest, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Delete old portfolio if exists
    const oldPortfolios = await portfolioService.getAll();
    if (oldPortfolios.length > 0) {
      for (const oldPortfolio of oldPortfolios) {
        try {
          await storageService.deleteFileByURL(oldPortfolio.url);
          await portfolioService.delete(oldPortfolio.id);
        } catch (error) {
          console.error('Error deleting old portfolio:', error);
        }
      }
    }

    // Upload to Google Cloud Storage
    const destinationPath = `portfolio/cv/portfolio_${Date.now()}.pdf`;
    const url = await storageService.uploadMulterFile(req.file, destinationPath);

    // Save portfolio info to Firestore
    const portfolio = await portfolioService.create({
      filename: req.file.originalname,
      url,
      size: req.file.size,
      mimetype: req.file.mimetype,
    } as Omit<Portfolio, 'id' | 'createdAt' | 'updatedAt'>);

    res.json({ message: 'Portfolio uploaded successfully', portfolio });
  } catch (error: any) {
    console.error('Error uploading portfolio:', error);
    const errorMessage = error.message || 'Error uploading portfolio';
    res.status(500).json({ 
      message: errorMessage,
      ...(process.env.NODE_ENV === 'development' && { 
        details: error.stack,
        bucket: process.env.GCS_BUCKET_NAME || process.env.FIREBASE_STORAGE_BUCKET 
      })
    });
  }
});

// Delete portfolio (protected)
router.delete('/delete', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const portfolios = await portfolioService.getAll();
    
    if (portfolios.length === 0) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    // Delete all portfolios
    for (const portfolio of portfolios) {
      try {
        await storageService.deleteFileByURL(portfolio.url);
        await portfolioService.delete(portfolio.id);
      } catch (error) {
        console.error('Error deleting portfolio:', error);
      }
    }
    
    res.json({ message: 'Portfolio deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting portfolio:', error);
    res.status(500).json({ message: 'Error deleting portfolio' });
  }
});

export default router;
