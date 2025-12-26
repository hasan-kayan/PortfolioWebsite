import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Plus, Edit, Trash2, X, Save, Tag, Link as LinkIcon, Image } from 'lucide-react';
import apiClient from '../../../config/axios.config';

interface Blog {
  _id?: string;
  id?: string;
  title: string;
  content: string;
  tags?: string[];
  url?: string;
  images?: string[];
  videos?: string[];
}

const initialFormState = {
  id: '',
  title: '',
  content: '',
  tags: '',
  url: '',
  image: null as File | null,
};

const BlogManager = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      // Public endpoint, no token needed
      const response = await apiClient.get(`/api/blogs/get-all-blogs`);
      setBlogs(response.data);
    } catch (err: any) {
      console.error('Error fetching blogs:', err);
      setError(err.response?.data?.message || 'Failed to load blogs. Please make sure the backend server is running.');
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
          const res = await apiClient.put(
            API_ENDPOINT,
            {
              message: `Upload blog image: ${filePath}`,
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
    
    // Check if token exists
    if (!token) {
      setError('You are not authenticated. Please login again.');
      return;
    }
    
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    
    try {
      let imageUrl = '';
      if (form.image) {
        const fileName = `${Date.now()}_${form.image.name}`;
        const filePath = `Portfolio/Blogs/${fileName}`;
        imageUrl = await uploadImageToGitHub(form.image, filePath);
      }
      
      const blogPayload = {
        id: form.id,
        title: form.title,
        content: form.content,
        tags: form.tags.split(',').map(tag => tag.trim()),
        url: form.url,
        images: imageUrl ? [imageUrl] : [],
      };
      
      if (editingId) {
        await apiClient.put(`/api/blogs/update-blogby/${editingId}`, blogPayload);
        setSuccess('Blog updated successfully');
      } else {
        await apiClient.post(`/api/blogs/create-blog`, blogPayload);
        setSuccess('Blog created successfully');
      }
      
      resetForm();
      fetchBlogs();
    } catch (err: any) {
      console.error('Error saving blog:', err);
      
      // Handle authentication errors - but don't auto-redirect
      if (err.response?.status === 401 || err.response?.status === 403) {
        const errorMsg = err.response?.data?.message || 'Authentication failed. Please check your login.';
        setError(errorMsg);
        // Don't clear token or redirect automatically - let user decide
      } else if (err.code === 'ECONNREFUSED' || err.message?.includes('socket hang up')) {
        setError('Backend server is not responding. Please make sure the server is running.');
      } else {
        setError(err.response?.data?.message || 'Failed to save blog. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (blog: Blog) => {
    setForm({
      id: blog.id || '',
      title: blog.title,
      content: blog.content,
      tags: blog.tags?.join(', ') || '',
      url: blog.url || '',
      image: null,
    });
    setEditingId(blog.id || blog._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      await apiClient.delete(`/api/blogs/delete-blogby/${id}`);
      setSuccess('Blog deleted successfully');
      fetchBlogs();
    } catch (err: any) {
      console.error('Error deleting blog:', err);
      setError(err.response?.data?.message || 'Failed to delete blog. Please try again.');
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
        <p className="mt-4 text-xl">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog Manager</h2>
        
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={18} />
            Add New Blog
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
            {editingId ? 'Edit Blog' : 'Create New Blog'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-300 mb-2">
                Blog ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={form.id}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="unique-blog-id"
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
                placeholder="Blog Title"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={form.content}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Blog content..."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <Tag size={16} />
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={form.tags}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="react, typescript, web"
              />
            </div>
            
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <LinkIcon size={16} />
                URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={form.url}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com/blog"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <Image size={16} />
              Blog Image
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
                  {editingId ? 'Update Blog' : 'Create Blog'}
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
      
      {blogs.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p>No blogs found. Create your first blog!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id || blog._id || index}
              className="bg-gray-700 rounded-lg overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {blog.images && blog.images.length > 0 && (
                <div className="md:w-48 h-48 overflow-hidden">
                  <img 
                    src={blog.images[0]} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/blog-fallback.png";
                    }}
                  />
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{blog.content}</p>
                
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-4">
                  {blog.url && (
                    <a 
                      href={blog.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <LinkIcon size={16} />
                      View Article
                    </a>
                  )}
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    
                    <button
                      onClick={() => handleDelete(blog.id || blog._id || '')}
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

export default BlogManager;