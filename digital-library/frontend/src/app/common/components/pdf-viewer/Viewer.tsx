// // components/PdfViewer.tsx
// import React, { useState, useEffect } from "react";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";
// import { PDFDocument } from "pdf-lib";

// interface PdfViewerProps {
//   pdfUrl: string;
// }

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// const FileViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [isPaid, setIsPaid] = useState<boolean>(false);

//   useEffect(() => {
//     const loadPdf = async () => {
//       const existingPdfBytes = await fetch(pdfUrl).then((res) =>
//         res.arrayBuffer()
//       );
//       const pdfDoc = await PDFDocument.load(existingPdfBytes);
//       setNumPages(pdfDoc.getPageCount());
//     };
//     loadPdf();
//   }, [pdfUrl]);

//   const handlePayment = () => {
//     setIsPaid(true);
//     alert("Merci pour votre paiement !");
//   };

//   return (
//     // <div className="w-1/2 h-1/2 border overflow-auto">
//     <div className="w-full h-full border overflow-auto max-h-[70vh]">
//       {pdfUrl ? (
//         <Document
//           file={pdfUrl}
//           onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//           className="w-full h-full"
//         >
//           {Array.from(new Array(numPages), (el, index) => (
//             <div
//               key={`page_${index + 1}`}
//               className="w-full h-full border object-contain bg-red-100"
//             >
//               {/* {index < 2 || isPaid ? (
//                 <Page
//                   pageNumber={index + 1}
//                   className="w-full h-full object-contain"
//                   renderTextLayer={false}
//                   renderAnnotationLayer={false}
//                 />
//               ) : (
//                 index === 2 &&
//                 !isPaid && (
//                   <div className="flex justify-center items-center flex-col absolute border bg-white bg-opacity-75">
//                     <p>Payez pour voir plus de pages</p>
//                     <button
//                       onClick={handlePayment}
//                       className="mt-2 p-2 bg-blue-500 text-white rounded"
//                     >
//                       Payez pour voir plus de pages
//                     </button>
//                   </div>
//                 )
//               )} */}
//               <Page
//                   pageNumber={index + 1}
//                   className="w-full h-full object-contain"
//                   renderTextLayer={false}
//                   renderAnnotationLayer={false}
//                 />
//             </div>
//           ))}
//         </Document>
//       ) : (
//         <div className='bg-white h-[70vh]'>
//           <div className="flex justify-center items-center h-full flex-col">
//             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileViewer;

// components/PdfViewer.tsx
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument } from "pdf-lib";

interface PdfViewerProps {
  pdfUrl: string;
}

// Dynamically import the worker script to ensure it's available
if (typeof window !== "undefined") {
  import("pdfjs-dist/build/pdf.worker.min.mjs").then(worker => {
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
  });
}

const FileViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  console.log("meta url", import.meta.url);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  useEffect(() => {
    const loadPdf = async () => {
      const existingPdfBytes = await fetch(pdfUrl).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      setNumPages(pdfDoc.getPageCount());
    };
    loadPdf();
  }, [pdfUrl]);

  const handlePayment = () => {
    setIsPaid(true);
    alert("Merci pour votre paiement !");
  };

  return (
    <div className="w-full h-full border overflow-auto max-h-[70vh]">
      {pdfUrl ? (
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="w-full h-full"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div
              key={`page_${index + 1}`}
              className="w-full h-full border object-contain bg-red-100"
            >
              <Page
                pageNumber={index + 1}
                className="w-full h-full object-contain"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </Document>
      ) : (
        <div className="bg-white h-[70vh]">
          <div className="flex justify-center items-center h-full flex-col">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileViewer;
