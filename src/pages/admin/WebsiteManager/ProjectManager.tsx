import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Plus, Edit, Trash2, X, Save, Tag, Link as LinkIcon, Github, ExternalLink, Image } from 'lucide-react';
import axios from 'axios';

interface Project {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  images?: string[];
  videos?: string[];
}

const initialFormState = {
  id: '',
  title: '',
  description: '',
  technologies: '',
  githubLink: '',
  demoLink: '',
  image: null as File | null,
};

const ProjectManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      // Public endpoint, no token needed
      const response = await axios.get(`/api/projects/get-all-projects`);
      setProjects(response.data);
    } catch (err: any) {
      console.error('Error fetching projects:', err);
      setError(err.response?.data?.message || 'Failed to load projects. Please make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setForm({
        ...form,
        image: fileInput.files ? fileInput.files[0] : null,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const uploadImageToGitHub = async (file: File, filePath: string): Promise<string> => {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    const REPO = "hasan-kayan/Assets";
    const API_ENDPOINT = `https://api.github.com/repos/${REPO}/contents/${filePath}`;

    console.log('📸 [FRONTEND] Starting GitHub upload...');
    console.log('📸 [FRONTEND] File:', file.name, file.size, 'bytes');
    console.log('📸 [FRONTEND] File path:', filePath);
    console.log('📸 [FRONTEND] GitHub token exists:', !!GITHUB_TOKEN);

    if (!GITHUB_TOKEN) {
      const error = "Missing GitHub token. Please set VITE_GITHUB_TOKEN in your .env file.";
      console.error('❌ [FRONTEND]', error);
      throw new Error(error);
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Content = reader.result?.toString().split(',')[1];
          if (!base64Content) {
            throw new Error('Failed to convert file to base64');
          }
          
          console.log('📸 [FRONTEND] File converted to base64, length:', base64Content.length);
          console.log('📸 [FRONTEND] Uploading to GitHub API:', API_ENDPOINT);
          
          const res = await axios.put(
            API_ENDPOINT,
            {
              message: `Upload project image: ${filePath}`,
              content: base64Content,
            },
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
              timeout: 30000, // 30 second timeout
            }
          );
          
          console.log('✅ [FRONTEND] GitHub upload successful');
          console.log('📸 [FRONTEND] GitHub upload response:', res.data);
          
          // GitHub API returns download_url in the content object
          const downloadUrl = res.data.content?.download_url;
          if (!downloadUrl) {
            throw new Error('GitHub API did not return download_url');
          }
          
          console.log('📸 [FRONTEND] Download URL:', downloadUrl);
          resolve(downloadUrl);
        } catch (err: any) {
          console.error('❌ [FRONTEND] GitHub upload error:', err);
          console.error('❌ [FRONTEND] Error response:', err.response?.data);
          console.error('❌ [FRONTEND] Error status:', err.response?.status);
          console.error('❌ [FRONTEND] Error message:', err.message);
          
          if (err.response?.status === 401) {
            reject(new Error('GitHub authentication failed. Please check your VITE_GITHUB_TOKEN.'));
          } else if (err.response?.status === 404) {
            reject(new Error('GitHub repository not found. Please check the repository name.'));
          } else if (err.code === 'ECONNABORTED') {
            reject(new Error('GitHub upload timeout. Please try again.'));
          } else if (err.code === 'ECONNREFUSED' || err.message?.includes('Network Error')) {
            reject(new Error('Network error connecting to GitHub. Please check your internet connection.'));
          } else {
            reject(new Error(`GitHub upload failed: ${err.response?.data?.message || err.message || 'Unknown error'}`));
          }
        }
      };
      reader.onerror = (error) => {
        console.error('❌ [FRONTEND] FileReader error:', error);
        reject(new Error('Failed to read file. Please try again.'));
      };
      reader.readAsDataURL(file);
    });
  };

  // Helper function to normalize URLs
  const normalizeUrl = (url: string): string => {
    if (!url || url.trim() === '') return '';
    const trimmed = url.trim();
    // If it already starts with http:// or https://, return as is
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    // Otherwise, add https://
    return `https://${trimmed}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 [FRONTEND] handleSubmit called');
    console.log('📋 [FRONTEND] Form data:', form);
    
    // Check if token exists
    if (!token) {
      console.error('❌ [FRONTEND] No token found');
      setError('You are not authenticated. Please login again.');
      return;
    }
    
    console.log('✅ [FRONTEND] Token exists:', token.substring(0, 20) + '...');
    
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    
    try {
      // First verify token is still valid
      console.log('🔐 [FRONTEND] Verifying token...');
      try {
        const verifyResponse = await axios.get('/api/auth/verify', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('✅ [FRONTEND] Token verified:', verifyResponse.data);
      } catch (verifyErr: any) {
        console.error('❌ [FRONTEND] Token verification failed:', verifyErr.response?.data || verifyErr.message);
        if (verifyErr.response?.status === 401 || verifyErr.response?.status === 403) {
          setError('Your session has expired. Please refresh the page and login again.');
          setSubmitting(false);
          return;
        }
      }
      
      let imageUrl = '';
      if (form.image) {
        console.log('📸 [FRONTEND] Uploading image to GitHub...');
        console.log('📸 [FRONTEND] Image file:', form.image.name, form.image.size, 'bytes');
        const fileName = `${Date.now()}_${form.image.name}`;
        const filePath = `Portfolio/Projects/${fileName}`;
        try {
          imageUrl = await uploadImageToGitHub(form.image, filePath);
          console.log('✅ [FRONTEND] Image uploaded successfully:', imageUrl);
        } catch (uploadErr: any) {
          console.error('❌ [FRONTEND] Image upload failed:', uploadErr);
          console.error('❌ [FRONTEND] Upload error details:', {
            message: uploadErr.message,
            code: uploadErr.code,
            response: uploadErr.response?.data,
            status: uploadErr.response?.status
          });
          // Don't throw here, let the user know but continue with project creation
          setError(`Image upload failed: ${uploadErr.message || 'Unknown error'}. Project will be created without image.`);
          // Continue without image - set imageUrl to empty
          imageUrl = '';
        }
      }
      
      // Normalize URLs before sending
      const normalizedGithubLink = form.githubLink ? normalizeUrl(form.githubLink) : '';
      const normalizedDemoLink = form.demoLink ? normalizeUrl(form.demoLink) : '';
      
      const projectPayload = {
        id: form.id,
        title: form.title,
        description: form.description,
        technologies: form.technologies.split(',').map(tech => tech.trim()).filter(tech => tech.length > 0),
        githubLink: normalizedGithubLink,
        demoLink: normalizedDemoLink,
        images: imageUrl ? [imageUrl] : [],
      };
      
      console.log('📦 [FRONTEND] Project payload:', projectPayload);
      
      if (editingId) {
        console.log('✏️ [FRONTEND] Updating project:', editingId);
        console.log('🔗 [FRONTEND] Request URL: /api/projects/update-projectby/' + editingId);
        console.log('🔑 [FRONTEND] Authorization header:', `Bearer ${token.substring(0, 20)}...`);
        console.log('📦 [FRONTEND] Update payload:', projectPayload);
        
        const updateResponse = await axios.put(`/api/projects/update-projectby/${editingId}`, projectPayload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        console.log('✅ [FRONTEND] Project updated successfully:', updateResponse.data);
        setSuccess('Project updated successfully');
      } else {
        console.log('➕ [FRONTEND] Creating new project...');
        console.log('🔗 [FRONTEND] Request URL: /api/projects/create-project');
        console.log('🔑 [FRONTEND] Authorization header:', `Bearer ${token.substring(0, 20)}...`);
        
        const response = await axios.post(`/api/projects/create-project`, projectPayload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        console.log('✅ [FRONTEND] Project created successfully:', response.data);
        setSuccess('Project created successfully');
      }
      
      resetForm();
      fetchProjects();
    } catch (err: any) {
      console.error('❌ [FRONTEND] Error saving project:', err);
      console.error('❌ [FRONTEND] Error response:', err.response);
      console.error('❌ [FRONTEND] Error status:', err.response?.status);
      console.error('❌ [FRONTEND] Error data:', err.response?.data);
      console.error('❌ [FRONTEND] Error message:', err.message);
      console.error('❌ [FRONTEND] Error code:', err.code);
      
      // Handle different error types
      if (err.response?.status === 401 || err.response?.status === 403) {
        const errorMsg = err.response?.data?.message || 'Authentication failed. Please check your login.';
        console.error('🔒 [FRONTEND] Authentication error:', errorMsg);
        setError(errorMsg);
      } else if (err.code === 'ECONNREFUSED' || err.message?.includes('socket hang up') || err.message?.includes('Network Error')) {
        setError('Backend server is not responding. Please wait a moment and try again.');
      } else if (!err.response) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError(err.response?.data?.message || 'Failed to save project. Please try again.');
      }
    } finally {
      setSubmitting(false);
      console.log('🏁 [FRONTEND] handleSubmit finished');
    }
  };

  const handleEdit = (project: Project) => {
    setForm({
      id: project.id || '',
      title: project.title,
      description: project.description,
      technologies: project.technologies?.join(', ') || '',
      githubLink: project.githubLink || '',
      demoLink: project.demoLink || '',
      image: null,
    });
    setEditingId(project.id || project._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    
    try {
      await axios.delete(`/api/projects/delete-projectby/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess('Project deleted successfully');
      fetchProjects();
    } catch (err: any) {
      console.error('Error deleting project:', err);
      setError(err.response?.data?.message || 'Failed to delete project. Please try again.');
    }
  };

  const resetForm = () => {
    setForm(initialFormState);
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Loader2 className="h-12 w-12 text-indigo-500 animate-spin" />
        <p className="mt-4 text-xl">Loading projects...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Project Manager</h2>
        
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={18} />
            Add New Project
          </button>
        ) : (
          <button
            onClick={resetForm}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
          >
            <X size={18} />
            Cancel
          </button>
        )}
      </div>
      
      {error && (
        <motion.div 
          className="bg-red-900/20 border border-red-700 text-red-100 rounded-lg p-4 mb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}
      
      {success && (
        <motion.div 
          className="bg-green-900/20 border border-green-700 text-green-100 rounded-lg p-4 mb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {success}
        </motion.div>
      )}
      
      {showForm && (
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-700 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            {editingId ? 'Edit Project' : 'Create New Project'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-300 mb-2">
                Project ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={form.id}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="unique-project-id"
              />
            </div>
            
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Project Title"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Project description..."
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Tag size={16} />
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="react, node.js, mongodb"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="githubLink" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <Github size={16} />
                GitHub Link (optional)
              </label>
              <input
                type="text"
                id="githubLink"
                name="githubLink"
                value={form.githubLink}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="github.com/username/repo (optional)"
              />
            </div>
            
            <div>
              <label htmlFor="demoLink" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <ExternalLink size={16} />
                Demo Link (optional)
              </label>
              <input
                type="text"
                id="demoLink"
                name="demoLink"
                value={form.demoLink}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="www.example.com (optional)"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Image size={16} />
              Project Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange as any}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-gray-400 text-sm mt-1">
              {form.image ? `Selected: ${form.image.name}` : 'No file selected'}
            </p>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  {editingId ? 'Update Project' : 'Create Project'}
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
      
      {projects.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p>No projects found. Create your first project!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id || project._id || index}
              className="bg-gray-700 rounded-lg overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {project.images && project.images.length > 0 && (
                <div className="md:w-48 h-48 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/fallback.png";
                    }}
                  />
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Tech Stack</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies?.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-600 text-indigo-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white flex items-center gap-1"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(project)}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    
                    <button
                      onClick={() => handleDelete(project.id || project._id || '')}
                      className="flex items-center gap-1 text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectManager;