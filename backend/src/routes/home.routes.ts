import { Router } from 'express';
import { getHome, updateHome } from '../controllers/home.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();
router.get('/', getHome);
router.put('/', authMiddleware, updateHome);
export default router;
