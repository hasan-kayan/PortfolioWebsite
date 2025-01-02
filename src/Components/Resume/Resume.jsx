import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdf = new URL("../../Assets/HASAN_KAYAN.pdf", import.meta.url).href;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <div className="w-full max-w-3xl">
        <div className="flex justify-center mb-4">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition"
          >
            <AiOutlineDownload className="mr-2" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center bg-white shadow-md p-4 rounded-md">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        <div className="flex justify-center mt-4">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition"
          >
            <AiOutlineDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
