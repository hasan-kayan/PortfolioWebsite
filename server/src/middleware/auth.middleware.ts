import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface AuthRequest extends Request {
  userId?: string;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  console.log('🔐 [BACKEND] authenticateToken middleware called');
  console.log('🔐 [BACKEND] Request path:', req.path);
  console.log('🔐 [BACKEND] Request method:', req.method);
  
  const authHeader = req.headers['authorization'];
  console.log('🔐 [BACKEND] Authorization header:', authHeader ? `${authHeader.substring(0, 20)}...` : 'NOT FOUND');
  
  const token = authHeader && authHeader.split(' ')[1];
  console.log('🔐 [BACKEND] Extracted token:', token ? `${token.substring(0, 20)}...` : 'NOT FOUND');

  if (!token) {
    console.error('❌ [BACKEND] No token provided');
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    console.log('🔐 [BACKEND] Verifying token with JWT_SECRET:', JWT_SECRET ? 'SET' : 'NOT SET');
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    console.log('✅ [BACKEND] Token verified successfully');
    console.log('✅ [BACKEND] Decoded token:', { userId: decoded.userId, username: decoded.username });
    req.userId = decoded.userId;
    next();
  } catch (err: any) {
    console.error('❌ [BACKEND] Token verification error:', err.name);
    console.error('❌ [BACKEND] Error message:', err.message);
    console.error('❌ [BACKEND] Full error:', err);
    
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired. Please login again.' });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token. Please login again.' });
    }
    return res.status(401).json({ message: 'Bad credentials' });
  }
};



