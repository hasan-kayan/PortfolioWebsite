import express from 'express';
import { FirestoreService } from '../services/firestore.service.js';
import { StorageService } from '../services/storage.service.js';
import { authenticateToken, AuthRequest } from '../middleware/auth.middleware.js';
import { Project } from '../models/Project.model.js';
import multer from 'multer';

const router = express.Router();
const projectService = new FirestoreService<Project>('projects');
const storageService = new StorageService();

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp|mp4|mov|avi|webm/;
    const mimetype = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(file.originalname.split('.').pop()?.toLowerCase() || '');
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed'));
    }
  },
});

// Optional multer middleware - only process if content-type is multipart/form-data
const optionalUpload = (req: any, res: any, next: any) => {
  const contentType = req.headers['content-type'] || '';
  if (contentType.includes('multipart/form-data')) {
    console.log('📎 [BACKEND] Multipart request detected, using multer');
    upload.array('files', 10)(req, res, (err: any) => {
      if (err) {
        console.error('❌ [BACKEND] Multer error:', err);
        return res.status(400).json({ message: err.message || 'File upload error' });
      }
      next();
    });
  } else {
    console.log('📄 [BACKEND] JSON request detected, skipping multer');
    next();
  }
};

// Get all projects (public)
router.get('/get-all-projects', async (req, res) => {
  try {
    const projects = await projectService.getAll();
    res.json(projects);
  } catch (error: any) {
    console.error('Error fetching projects:', error);
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      status: error.status
    });
    
    // Check if it's a Firestore permission error
    if (error.code === 7 || error.code === 'PERMISSION_DENIED' || error.message?.includes('403')) {
      return res.status(403).json({ 
        message: 'Firestore permission denied. Check service account permissions and Firestore security rules.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
    
    res.status(500).json({ 
      message: 'Error fetching projects',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Create project (protected)
router.post('/create-project', authenticateToken, optionalUpload, async (req: AuthRequest, res) => {
  console.log('📥 [BACKEND] POST /create-project received');
  console.log('📥 [BACKEND] Content-Type:', req.headers['content-type']);
  console.log('📥 [BACKEND] Request body:', req.body);
  console.log('📥 [BACKEND] Request body type:', typeof req.body);
  console.log('📥 [BACKEND] Request files:', req.files);
  console.log('📥 [BACKEND] User ID:', req.userId);
  
  try {
    // Body is already parsed by express.json() if it's JSON, or by multer if it's form-data
    const { id, title, description, technologies, githubLink, demoLink } = req.body;
    console.log('📋 [BACKEND] Parsed data:', { id, title, description, technologies, githubLink, demoLink });

    if (!id || !title || !description) {
      console.error('❌ [BACKEND] Missing required fields:', { id: !!id, title: !!title, description: !!description });
      return res.status(400).json({ message: 'ID, title, and description are required' });
    }

    // Check if project with same id exists
    console.log('🔍 [BACKEND] Checking if project exists with id:', id);
    const existingProject = await projectService.getByField('id', id);
    if (existingProject) {
      console.error('❌ [BACKEND] Project with this ID already exists:', id);
      return res.status(400).json({ message: 'Project with this ID already exists' });
    }
    console.log('✅ [BACKEND] Project ID is available');

    // Upload files to Google Cloud Storage
    const images: string[] = [];
    const videos: string[] = [];
    
    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        const fileExt = file.originalname.split('.').pop()?.toLowerCase() || '';
        const isVideo = ['mp4', 'mov', 'avi', 'webm'].includes(fileExt);
        const folder = isVideo ? 'videos' : 'images';
        const destinationPath = `portfolio/projects/${id}/${folder}/${Date.now()}_${file.originalname}`;
        
        try {
          const url = await storageService.uploadMulterFile(file, destinationPath);
          if (isVideo) {
            videos.push(url);
          } else {
            images.push(url);
          }
        } catch (uploadError) {
          console.error('Error uploading file:', uploadError);
          // Continue with other files
        }
      }
    }

    // If images/videos provided in body (from GitHub upload), use those
    const bodyImages = req.body.images ? (Array.isArray(req.body.images) ? req.body.images : [req.body.images]) : [];
    const bodyVideos = req.body.videos ? (Array.isArray(req.body.videos) ? req.body.videos : [req.body.videos]) : [];

    const projectData = {
      title,
      description,
      technologies: technologies ? (typeof technologies === 'string' ? technologies.split(',').map(t => t.trim()) : technologies) : [],
      githubLink: githubLink || '',
      demoLink: demoLink || '',
      images: [...images, ...bodyImages],
      videos: [...videos, ...bodyVideos],
    } as Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;
    
    console.log('💾 [BACKEND] Creating project with data:', projectData);
    
    const project = await projectService.createWithId(id, projectData);
    
    console.log('✅ [BACKEND] Project created successfully:', project);
    res.status(201).json(project);
  } catch (error: any) {
    console.error('❌ [BACKEND] Error creating project:', error);
    console.error('❌ [BACKEND] Error name:', error.name);
    console.error('❌ [BACKEND] Error message:', error.message);
    console.error('❌ [BACKEND] Error stack:', error.stack);
    
    if (error.message?.includes('already exists')) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ 
      message: 'Error creating project',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Update project by ID (protected)
router.put('/update-projectby/:id', authenticateToken, optionalUpload, async (req: AuthRequest, res) => {
  console.log('📥 [BACKEND] PUT /update-projectby/:id received');
  console.log('📥 [BACKEND] Content-Type:', req.headers['content-type']);
  console.log('📥 [BACKEND] Request params:', req.params);
  console.log('📥 [BACKEND] Request body:', req.body);
  console.log('📥 [BACKEND] Request body type:', typeof req.body);
  console.log('📥 [BACKEND] Request files:', req.files);
  console.log('📥 [BACKEND] User ID:', req.userId);
  
  try {
    const { id } = req.params;
    // Body is already parsed by express.json() if it's JSON, or by multer if it's form-data
    const { title, description, technologies, githubLink, demoLink, images, videos } = req.body;
    console.log('📋 [BACKEND] Parsed update data:', { id, title, description, technologies, githubLink, demoLink, images, videos });

    // Try to find by document id or custom id field
    let project = await projectService.getById(id);
    if (!project) {
      project = await projectService.getByField('id', id);
    }
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Upload new files if any
    const newImages: string[] = [];
    const newVideos: string[] = [];
    
    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        const fileExt = file.originalname.split('.').pop()?.toLowerCase() || '';
        const isVideo = ['mp4', 'mov', 'avi', 'webm'].includes(fileExt);
        const folder = isVideo ? 'videos' : 'images';
        const destinationPath = `portfolio/projects/${project.id}/${folder}/${Date.now()}_${file.originalname}`;
        
        try {
          const url = await storageService.uploadMulterFile(file, destinationPath);
          if (isVideo) {
            newVideos.push(url);
          } else {
            newImages.push(url);
          }
        } catch (uploadError) {
          console.error('Error uploading file:', uploadError);
        }
      }
    }

    const updateData: any = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (technologies) updateData.technologies = typeof technologies === 'string' ? technologies.split(',').map(t => t.trim()) : technologies;
    if (githubLink !== undefined) updateData.githubLink = githubLink;
    if (demoLink !== undefined) updateData.demoLink = demoLink;
    if (images !== undefined) {
      const existingImages = project.images || [];
      updateData.images = [...existingImages, ...newImages, ...(Array.isArray(images) ? images : [images])];
    } else if (newImages.length > 0) {
      updateData.images = [...(project.images || []), ...newImages];
    }
    if (videos !== undefined) {
      const existingVideos = project.videos || [];
      updateData.videos = [...existingVideos, ...newVideos, ...(Array.isArray(videos) ? videos : [videos])];
    } else if (newVideos.length > 0) {
      updateData.videos = [...(project.videos || []), ...newVideos];
    }

    console.log('💾 [BACKEND] Updating project with data:', updateData);
    const updated = await projectService.update(project.id, updateData);
    console.log('✅ [BACKEND] Project updated successfully:', updated);
    res.json(updated);
  } catch (error: any) {
    console.error('❌ [BACKEND] Error updating project:', error);
    console.error('❌ [BACKEND] Error name:', error.name);
    console.error('❌ [BACKEND] Error message:', error.message);
    console.error('❌ [BACKEND] Error stack:', error.stack);
    res.status(500).json({ 
      message: 'Error updating project',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Delete project by ID (protected)
router.delete('/delete-projectby/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    
    // Try to find by document id or custom id field
    let project = await projectService.getById(id);
    if (!project) {
      project = await projectService.getByField('id', id);
    }
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Delete associated files from storage
    if (project.images) {
      for (const imageUrl of project.images) {
        try {
          await storageService.deleteFileByURL(imageUrl);
        } catch (error) {
          console.error('Error deleting image:', error);
        }
      }
    }
    if (project.videos) {
      for (const videoUrl of project.videos) {
        try {
          await storageService.deleteFileByURL(videoUrl);
        } catch (error) {
          console.error('Error deleting video:', error);
        }
      }
    }

    await projectService.delete(project.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Error deleting project' });
  }
});

export default router;
