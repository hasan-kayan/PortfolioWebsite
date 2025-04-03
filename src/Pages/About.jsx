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
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-5 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Portfolio PDF</h1>

      {loading && <CircularProgress color="secondary" />}
      {error && <Alert severity="error">{error}</Alert>}

      {pdfUrl && (
        <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg">
          <PDFViewer
            document={{
              url: pdfUrl,
            }}
            canvasCss="shadow-lg rounded-lg"
          />

          <div className="flex justify-center mt-4">
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
