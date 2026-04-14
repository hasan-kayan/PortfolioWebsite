import { Router } from 'express';
import { getProjects, getProject, createProject, updateProject, deleteProject } from '../controllers/project.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();
router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', authMiddleware, createProject);
router.put('/:id', authMiddleware, updateProject);
router.delete('/:id', authMiddleware, deleteProject);
export default router;
