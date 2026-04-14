import { Router } from 'express';
import { getPosts, getPostBySlug, getPostById, createPost, updatePost, deletePost } from '../controllers/blog.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();
router.get('/', getPosts);
router.get('/id/:id', authMiddleware, getPostById);
router.get('/:slug', getPostBySlug);
router.post('/', authMiddleware, createPost);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);
export default router;
