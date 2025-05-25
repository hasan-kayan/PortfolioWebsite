import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, FileText, Download, Trash2, Upload } from 'lucide-react';
import axios from 'axios';

const PortfolioManager = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const token = localStorage.getItem('token');
  
  const PORTFOLIO_API = import.meta.env.VITE_PORTFOLIO_URL;

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${PORTFOLIO_API}/download`);
      if (!response.ok) throw new Error("No portfolio found");
      const blob = await response.blob();
      setPdfUrl(URL.createObjectURL(blob));
    } catch (err) {
      setPdfUrl(null);
      console.error('Error fetching portfolio:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select a PDF file');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);
    
    const formData = new FormData();
    formData.append('pdf', selectedFile);

    try {
      await axios.post(`${PORTFOLIO_API}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setSuccess('Portfolio uploaded successfully');
      setSelectedFile(null);
      // Reset the file input
      const fileInput = document.getElementById('pdf-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      fetchPortfolio();
    } catch (err: any) {
      console.error('Error uploading portfolio:', err);
      setError(err.response?.data?.message || 'Failed to upload portfolio. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete the current portfolio PDF?')) return;
    
    try {
      await axios.delete(`${PORTFOLIO_API}/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setPdfUrl(null);
      setSuccess('Portfolio deleted successfully');
    } catch (err: any) {
      console.error('Error deleting portfolio:', err);
      setError(err.response?.data?.message || 'Failed to delete portfolio. Please try again.');
    }
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
      <h2 className="text-2xl font-bold mb-6">Portfolio Manager</h2>
      
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
      
      {pdfUrl ? (
        <motion.div 
          className="bg-gray-700 rounded-lg overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 bg-gray-600 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FileText className="text-indigo-400" />
              <span className="font-medium">Current Portfolio PDF</span>
            </div>
            <div className="flex gap-3">
              <a 
                href={pdfUrl}
                download="portfolio.pdf"
                className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded transition-colors text-sm"
              >
                <Download size={16} />
                Download
              </a>
              
              <button
                onClick={handleDelete}
                className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <iframe
              src={pdfUrl}
              className="w-full h-[500px] rounded border border-gray-600"
              title="Portfolio PDF"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className="bg-gray-700/50 border border-gray-600 rounded-lg p-8 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FileText className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Portfolio PDF Found</h3>
          <p className="text-gray-400 mb-4">
            Upload a PDF file to display your professional portfolio.
          </p>
        </motion.div>
      )}
      
      <motion.form
        onSubmit={handleUpload}
        className="bg-gray-700 rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold mb-4">
          {pdfUrl ? 'Replace Portfolio PDF' : 'Upload New Portfolio PDF'}
        </h3>
        
        <div className="mb-6">
          <label htmlFor="pdf-upload" className="block text-sm font-medium text-gray-300 mb-2">
            Select PDF File
          </label>
          <input
            type="file"
            id="pdf-upload"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-gray-400 text-sm mt-1">
            {selectedFile ? `Selected: ${selectedFile.name}` : 'No file selected'}
          </p>
        </div>
        
        <button
          type="submit"
          disabled={uploading || !selectedFile}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {uploading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Uploading...
            </>
          ) : (
            <>
              <Upload size={18} />
              Upload PDF
            </>
          )}
        </button>
      </motion.form>
    </div>
  );
};

export default PortfolioManager;