import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Upload, Trash2, FileText, X, AlertTriangle, CheckCircle } from 'lucide-react';
import apiClient from '../../../config/axios.config';

interface Portfolio {
  id: string;
  filename: string;
  url: string;
  size: number;
  mimetype: string;
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioManager = () => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get('/api/portfolio/download');
      // If we get a JSON response with URL, it means portfolio exists
      if (response.headers['content-type']?.includes('application/json')) {
        const data = response.data;
        if (data.url) {
          // We have a portfolio URL, but we need to get the full portfolio info
          // Since the download endpoint doesn't return full portfolio info,
          // we'll construct a basic portfolio object
          setPortfolio({
            id: 'current',
            filename: 'portfolio.pdf',
            url: data.url,
            size: 0,
            mimetype: 'application/pdf',
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      } else {
        // PDF blob was streamed, portfolio exists
        setPortfolio({
          id: 'current',
          filename: 'portfolio.pdf',
          url: '/api/portfolio/download',
          size: 0,
          mimetype: 'application/pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    } catch (err: any) {
      if (err.response?.status === 404) {
        // No portfolio exists yet, which is fine
        setPortfolio(null);
      } else {
        console.error('Error fetching portfolio:', err);
        setError(err.response?.data?.message || 'Failed to load portfolio.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setError('Only PDF files are allowed.');
        setFile(null);
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB.');
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a PDF file to upload.');
      return;
    }

    if (!token) {
      setError('You are not authenticated. Please login again.');
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      formData.append('pdf', file);

      await apiClient.post('/api/portfolio/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Portfolio uploaded successfully!');
      setFile(null);
      setShowForm(false);
      fetchPortfolio();
    } catch (err: any) {
      console.error('Error uploading portfolio:', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Authentication failed. Please check your login.');
      } else if (err.code === 'ECONNREFUSED' || err.message?.includes('Network Error')) {
        setError('Backend server is not responding. Please make sure the server is running.');
      } else {
        setError(err.response?.data?.message || 'Failed to upload portfolio. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete the portfolio? This action cannot be undone.')) {
      return;
    }

    if (!token) {
      setError('You are not authenticated. Please login again.');
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await apiClient.delete('/api/portfolio/delete');

      setSuccess('Portfolio deleted successfully!');
      setPortfolio(null);
    } catch (err: any) {
      console.error('Error deleting portfolio:', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Authentication failed. Please check your login.');
      } else if (err.code === 'ECONNREFUSED' || err.message?.includes('Network Error')) {
        setError('Backend server is not responding. Please make sure the server is running.');
      } else {
        setError(err.response?.data?.message || 'Failed to delete portfolio. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Loader2 className="h-12 w-12 text-indigo-500 animate-spin" />
        <p className="mt-4 text-xl">Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Portfolio Manager</h2>
        
        {!showForm && !portfolio ? (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Upload size={18} />
            Upload Portfolio
          </button>
        ) : showForm ? (
          <button
            onClick={() => {
              setShowForm(false);
              setFile(null);
              setError(null);
            }}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
          >
            <X size={18} />
            Cancel
          </button>
        ) : null}
      </div>
      
      {error && (
        <motion.div 
          className="bg-red-900/20 border border-red-700 text-red-100 rounded-lg p-4 mb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} />
            {error}
          </div>
        </motion.div>
      )}
      
      {success && (
        <motion.div 
          className="bg-green-900/20 border border-green-700 text-green-100 rounded-lg p-4 mb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle size={18} />
            {success}
          </div>
        </motion.div>
      )}
      
      {showForm && (
        <motion.form
          onSubmit={handleUpload}
          className="bg-gray-700 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">Upload Portfolio PDF</h3>
          
          <div className="mb-6">
            <label htmlFor="pdf" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
              <FileText size={16} />
              Portfolio PDF (Max 10MB)
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept="application/pdf"
              onChange={handleFileChange}
              required
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {file && (
              <div className="mt-2 p-3 bg-gray-600 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Selected:</strong> {file.name} ({formatFileSize(file.size)})
                </p>
              </div>
            )}
            <p className="text-gray-400 text-sm mt-2">
              Note: Uploading a new portfolio will replace the existing one.
            </p>
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setFile(null);
                setError(null);
              }}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting || !file}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={18} />
                  Upload Portfolio
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
      
      {portfolio && !showForm && (
        <motion.div
          className="bg-gray-700 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <FileText className="text-indigo-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">{portfolio.filename}</h3>
                {portfolio.size > 0 && (
                  <p className="text-sm text-gray-400 mt-1">
                    Size: {formatFileSize(portfolio.size)}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Upload size={16} />
                Replace
              </button>
              
              <button
                onClick={handleDelete}
                disabled={submitting}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <Trash2 size={16} />
                )}
                Delete
              </button>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <iframe
              src={portfolio.url}
              className="w-full h-[60vh] rounded border border-gray-600"
              title="Portfolio PDF Preview"
            />
          </div>
          
          <div className="mt-4">
            <a
              href={portfolio.url}
              download={portfolio.filename}
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
            >
              <FileText size={16} />
              Download Portfolio
            </a>
          </div>
        </motion.div>
      )}
      
      {!portfolio && !showForm && (
        <div className="text-center py-10 text-gray-400">
          <FileText className="h-16 w-16 mx-auto mb-4 text-gray-600" />
          <p className="text-lg mb-2">No portfolio uploaded yet.</p>
          <p className="text-sm mb-4">Upload a PDF portfolio to get started.</p>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors mx-auto"
          >
            <Upload size={18} />
            Upload Portfolio
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioManager;
