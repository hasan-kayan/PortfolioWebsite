import React, { useEffect, useState } from "react";
import PDFViewer from "pdf-viewer-reactjs";
import { Button, CircularProgress, Alert } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";

const PortfolioViewer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_PORTFOLIO_URL + "/download");
        if (!response.ok) throw new Error("Failed to load portfolio PDF");

        const blob = await response.blob();
        setPdfUrl(URL.createObjectURL(blob));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-2 sm:px-4 py-6 bg-appbgcolor">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Portfolio PDF</h1>

      {loading && <CircularProgress color="secondary" />}
      {error && <Alert severity="error">{error}</Alert>}

      {pdfUrl && (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-3 sm:p-5 overflow-hidden">
          {/* PDF Viewer */}
          <div className="w-full overflow-x-auto">
            <PDFViewer
              document={{ url: pdfUrl }}
              canvasCss="w-full max-w-full h-auto"
            />
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-6">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AiOutlineDownload />}
              href={pdfUrl}
              download="portfolio.pdf"
            >
              Download Portfolio
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioViewer;
