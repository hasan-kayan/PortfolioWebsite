import React, { useEffect, useState } from "react";
import axios from "axios";
import PDFViewer from "pdf-viewer-reactjs";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, Alert } from "@mui/material";
import { AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";

const PORTFOLIO_API = import.meta.env.VITE_PORTFOLIO_URL;

const PortfolioManager = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchPortfolio();
    }
  }, [token]);

  const requestWithAuth = async (axiosCall) => {
    try {
      return await axiosCall();
    } catch (err) {
      const isTokenError =
        err?.response?.status === 401 ||
        err?.response?.status === 403 ||
        err?.response?.data?.message === "Invalid or expired token";

      if (isTokenError) {
        localStorage.removeItem("token");
        setToken("");
        navigate("/login");
      } else {
        throw err;
      }
    }
  };

  const fetchPortfolio = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${PORTFOLIO_API}/download`);
      if (!response.ok) throw new Error("No portfolio found");
      const blob = await response.blob();
      setPdfUrl(URL.createObjectURL(blob));
    } catch (err) {
      setPdfUrl(null);
      setError("No portfolio PDF found.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a PDF file");

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    setUploading(true);
    setError(null);
    try {
      await requestWithAuth(() =>
        axios.post(`${PORTFOLIO_API}/upload`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
      );
      setSelectedFile(null);
      fetchPortfolio(); // Refresh the PDF
    } catch (err) {
      setError("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete the current portfolio PDF?")) return;
    try {
      await requestWithAuth(() =>
        axios.delete(`${PORTFOLIO_API}/delete`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      );
      setPdfUrl(null);
    } catch (err) {
      setError("Failed to delete portfolio PDF.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-2 sm:px-4 py-6 bg-appbgcolor">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Portfolio Manager</h1>

      {loading && <CircularProgress color="secondary" />}
      {error && <Alert severity="error">{error}</Alert>}

      {pdfUrl && !loading && (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-3 sm:p-5 overflow-hidden mb-6">
          {/* PDF Viewer */}
          <div className="w-full overflow-x-auto">
            <PDFViewer document={{ url: pdfUrl }} canvasCss="w-full max-w-full h-auto" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AiOutlineDownload />}
              href={pdfUrl}
              download="portfolio.pdf"
            >
              Download Portfolio
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<AiOutlineDelete />}
              onClick={handleDelete}
            >
              Delete Portfolio
            </Button>
          </div>
        </div>
      )}

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-2xl flex flex-col gap-4"
        encType="multipart/form-data"
      >
        <label className="text-black font-semibold">Upload New Portfolio PDF</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="text-black"
        />
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload PDF"}
        </Button>
      </form>
    </div>
  );
};

export default PortfolioManager;
