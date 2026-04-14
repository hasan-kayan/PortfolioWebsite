import { Router } from 'express';
import { getContact, updateContact, sendContactMessage } from '../controllers/contact.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();
router.get('/', getContact);
router.put('/', authMiddleware, updateContact);
router.post('/send', sendContactMessage);
export default router;
