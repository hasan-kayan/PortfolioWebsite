import express from 'express';
import { FirestoreService } from '../services/firestore.service.js';
import { StorageService } from '../services/storage.service.js';
import { authenticateToken, AuthRequest } from '../middleware/auth.middleware.js';
import { Blog } from '../models/Blog.model.js';
import multer from 'multer';

const router = express.Router();
const blogService = new FirestoreService<Blog>('blogs');
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

// Get all blogs (public)
router.get('/get-all-blogs', async (req, res) => {
  try {
    const blogs = await blogService.getAll();
    res.json(blogs);
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
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
      message: 'Error fetching blogs',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Create blog (protected)
router.post('/create-blog', authenticateToken, upload.array('files', 10), async (req: AuthRequest, res) => {
  try {
    const { id, title, content, tags, url } = req.body;

    if (!id || !title || !content) {
      return res.status(400).json({ message: 'ID, title, and content are required' });
    }

    // Check if blog with same id exists
    const existingBlog = await blogService.getByField('id', id);
    if (existingBlog) {
      return res.status(400).json({ message: 'Blog with this ID already exists' });
    }

    // Upload files to Firebase Storage
    const images: string[] = [];
    const videos: string[] = [];
    
    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        const fileExt = file.originalname.split('.').pop()?.toLowerCase() || '';
        const isVideo = ['mp4', 'mov', 'avi', 'webm'].includes(fileExt);
        const folder = isVideo ? 'videos' : 'images';
        const destinationPath = `portfolio/blogs/${id}/${folder}/${Date.now()}_${file.originalname}`;
        
        try {
          const url = await storageService.uploadMulterFile(file, destinationPath);
          if (isVideo) {
            videos.push(url);
          } else {
            images.push(url);
          }
        } catch (uploadError) {
          console.error('Error uploading file:', uploadError);
        }
      }
    }

    // If images/videos provided in body (from GitHub upload), use those
    const bodyImages = req.body.images ? (Array.isArray(req.body.images) ? req.body.images : [req.body.images]) : [];
    const bodyVideos = req.body.videos ? (Array.isArray(req.body.videos) ? req.body.videos : [req.body.videos]) : [];

    const blog = await blogService.createWithId(id, {
      title,
      content,
      tags: tags ? (typeof tags === 'string' ? tags.split(',').map(t => t.trim()) : tags) : [],
      url: url || '',
      images: [...images, ...bodyImages],
      videos: [...videos, ...bodyVideos],
    } as Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>);

    res.status(201).json(blog);
  } catch (error: any) {
    console.error('Error creating blog:', error);
    if (error.message?.includes('already exists')) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error creating blog' });
  }
});

// Update blog by ID (protected)
router.put('/update-blogby/:id', authenticateToken, upload.array('files', 10), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { title, content, tags, url, images, videos } = req.body;

    // Try to find by document id or custom id field
    let blog = await blogService.getById(id);
    if (!blog) {
      blog = await blogService.getByField('id', id);
    }
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Upload new files if any
    const newImages: string[] = [];
    const newVideos: string[] = [];
    
    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        const fileExt = file.originalname.split('.').pop()?.toLowerCase() || '';
        const isVideo = ['mp4', 'mov', 'avi', 'webm'].includes(fileExt);
        const folder = isVideo ? 'videos' : 'images';
        const destinationPath = `portfolio/blogs/${blog.id}/${folder}/${Date.now()}_${file.originalname}`;
        
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
    if (content) updateData.content = content;
    if (tags) updateData.tags = typeof tags === 'string' ? tags.split(',').map(t => t.trim()) : tags;
    if (url !== undefined) updateData.url = url;
    if (images !== undefined) {
      const existingImages = blog.images || [];
      updateData.images = [...existingImages, ...newImages, ...(Array.isArray(images) ? images : [images])];
    } else if (newImages.length > 0) {
      updateData.images = [...(blog.images || []), ...newImages];
    }
    if (videos !== undefined) {
      const existingVideos = blog.videos || [];
      updateData.videos = [...existingVideos, ...newVideos, ...(Array.isArray(videos) ? videos : [videos])];
    } else if (newVideos.length > 0) {
      updateData.videos = [...(blog.videos || []), ...newVideos];
    }

    const updated = await blogService.update(blog.id, updateData);
    res.json(updated);
  } catch (error: any) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Error updating blog' });
  }
});

// Delete blog by ID (protected)
router.delete('/delete-blogby/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    
    // Try to find by document id or custom id field
    let blog = await blogService.getById(id);
    if (!blog) {
      blog = await blogService.getByField('id', id);
    }
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Delete associated files from storage
    if (blog.images) {
      for (const imageUrl of blog.images) {
        try {
          await storageService.deleteFileByURL(imageUrl);
        } catch (error) {
          console.error('Error deleting image:', error);
        }
      }
    }
    if (blog.videos) {
      for (const videoUrl of blog.videos) {
        try {
          await storageService.deleteFileByURL(videoUrl);
        } catch (error) {
          console.error('Error deleting video:', error);
        }
      }
    }

    await blogService.delete(blog.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Error deleting blog' });
  }
});

export default router;
