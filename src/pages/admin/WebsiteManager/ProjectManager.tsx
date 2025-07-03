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
  
  const PROJECT_API_URL = `${import.meta.env.VITE_PROJECT_URL}`;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${PROJECT_API_URL}/get-all-projects`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(response.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects. Please try again.');
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

    if (!GITHUB_TOKEN) {
      throw new Error("Missing GitHub token.");
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Content = reader.result?.toString().split(',')[1];
        try {
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
            }
          );
          resolve(res.data.content.download_url);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    
    try {
      let imageUrl = '';
      if (form.image) {
        const fileName = `${Date.now()}_${form.image.name}`;
        const filePath = `Portfolio/Projects/${fileName}`;
        imageUrl = await uploadImageToGitHub(form.image, filePath);
      }
      
      const projectPayload = {
        id: form.id,
        title: form.title,
        description: form.description,
        technologies: form.technologies.split(',').map(tech => tech.trim()),
        githubLink: form.githubLink,
        demoLink: form.demoLink,
        images: imageUrl ? [imageUrl] : [],
      };
      
      if (editingId) {
        await axios.put(`${PROJECT_API_URL}/update-projectby/${editingId}`, projectPayload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess('Project updated successfully');
      } else {
        await axios.post(`${PROJECT_API_URL}/create-project`, projectPayload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess('Project created successfully');
      }
      
      resetForm();
      fetchProjects();
    } catch (err: any) {
      console.error('Error saving project:', err);
      setError(err.response?.data?.message || 'Failed to save project. Please try again.');
    } finally {
      setSubmitting(false);
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
      await axios.delete(`${PROJECT_API_URL}/delete-projectby/${id}`, {
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
                GitHub Link
              </label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                value={form.githubLink}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://github.com/username/repo"
              />
            </div>
            
            <div>
              <label htmlFor="demoLink" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <ExternalLink size={16} />
                Demo Link
              </label>
              <input
                type="url"
                id="demoLink"
                name="demoLink"
                value={form.demoLink}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com"
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