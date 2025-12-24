import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Download, FileText, AlertTriangle } from 'lucide-react';

const PortfolioPage = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/portfolio/download");
        if (!response.ok) {
          if (response.status === 404) {
            setError("Portfolio PDF not found. Please upload one from the admin panel.");
            return;
          }
          throw new Error(`Failed to load portfolio PDF: ${response.status}`);
        }

        // Check if response is JSON (fallback URL) or blob (streamed PDF)
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data.url) {
            setPdfUrl(data.url);
          } else {
            throw new Error('No portfolio URL found in response');
          }
        } else {
          // PDF blob stream
          const blob = await response.blob();
          setPdfUrl(URL.createObjectURL(blob));
        }
      } catch (err: any) {
        console.error("Error fetching portfolio:", err);
        setError(err.message || "Failed to load portfolio. Make sure the backend server is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Download my comprehensive portfolio to see my complete work history and achievements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 text-indigo-500 animate-spin" />
              <p className="mt-4 text-xl text-gray-300">Loading portfolio...</p>
            </div>
          ) : error ? (
            <motion.div 
              className="bg-red-900/20 border border-red-700 text-red-100 rounded-lg p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-bold mb-2">Error Loading Portfolio</h3>
              <p className="mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          ) : pdfUrl ? (
            <motion.div
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 bg-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="text-indigo-400" />
                  <span className="font-medium">My Professional Portfolio</span>
                </div>
                <a 
                  href={pdfUrl}
                  download="portfolio.pdf"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition-colors"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
              
              <div className="p-4">
                <iframe
                  src={pdfUrl}
                  className="w-full h-[70vh] rounded border border-gray-700"
                  title="Portfolio PDF"
                />
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No portfolio found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;