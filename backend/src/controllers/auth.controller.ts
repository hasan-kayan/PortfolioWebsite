import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.model';

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) { res.status(401).json({ error: 'Invalid credentials' }); return; }
    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) { res.status(401).json({ error: 'Invalid credentials' }); return; }
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET as string, { expiresIn: '7d' });
    res.json({ token, email: admin.email });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function verifyToken(req: Request, res: Response): Promise<void> {
  res.json({ valid: true });
}
