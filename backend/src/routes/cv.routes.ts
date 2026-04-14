import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { getCV, uploadCV, streamCV } from '../controllers/cv.controller';
import { authMiddleware } from '../middleware/auth';

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../uploads'),
  filename: (req, file, cb) => cb(null, `cv-${Date.now()}.pdf`),
});
const upload = multer({ storage, fileFilter: (req, file, cb) => {
  if (file.mimetype === 'application/pdf') cb(null, true);
  else cb(new Error('Only PDF files allowed'));
}});

const router = Router();
router.get('/', getCV);
router.get('/file', streamCV);
router.post('/upload', authMiddleware, upload.single('cv'), uploadCV);
export default router;
