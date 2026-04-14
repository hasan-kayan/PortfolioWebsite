import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import CV from '../models/CV.model';

export async function getCV(req: Request, res: Response): Promise<void> {
  try {
    const cv = await CV.findOne().sort({ uploadedAt: -1 });
    if (!cv) { res.status(404).json({ error: 'No CV uploaded yet' }); return; }
    res.json({ filename: cv.originalName, uploadedAt: cv.uploadedAt, downloadCount: cv.downloadCount });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function uploadCV(req: Request, res: Response): Promise<void> {
  try {
    if (!req.file) { res.status(400).json({ error: 'No file provided' }); return; }
    // Delete old CV files
    const oldCVs = await CV.find();
    for (const old of oldCVs) {
      const oldPath = path.join(__dirname, '../../uploads', old.filename);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      await CV.findByIdAndDelete(old._id);
    }
    const cv = await CV.create({ filename: req.file.filename, originalName: req.file.originalname });
    res.json({ filename: cv.originalName, uploadedAt: cv.uploadedAt });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function streamCV(req: Request, res: Response): Promise<void> {
  try {
    const cv = await CV.findOne().sort({ uploadedAt: -1 });
    if (!cv) { res.status(404).json({ error: 'No CV uploaded' }); return; }
    const filePath = path.join(__dirname, '../../uploads', cv.filename);
    if (!fs.existsSync(filePath)) { res.status(404).json({ error: 'File not found' }); return; }
    const { download } = req.query;
    if (download === 'true') {
      await CV.findByIdAndUpdate(cv._id, { $inc: { downloadCount: 1 } });
      res.setHeader('Content-Disposition', `attachment; filename="${cv.originalName}"`);
    } else {
      res.setHeader('Content-Disposition', `inline; filename="${cv.originalName}"`);
    }
    res.setHeader('Content-Type', 'application/pdf');
    fs.createReadStream(filePath).pipe(res);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}
