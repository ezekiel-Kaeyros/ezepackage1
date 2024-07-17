// // components/PdfViewer.tsx
// import React, { useState, useEffect } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { PDFDocument } from "pdf-lib";

// interface PdfViewerProps {
//   pdfUrl: string;
// }

// // Dynamically import the worker script to ensure it's available
// if (typeof window !== "undefined") {
//   import("pdfjs-dist/build/pdf.worker.min.mjs").then(worker => {
//     pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
//   });
// }

// const FileViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
//   console.log("meta url", import.meta.url);
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
//               <Page
//                 pageNumber={index + 1}
//                 className="w-full h-full object-contain"
//                 renderTextLayer={false}
//                 renderAnnotationLayer={false}
//               />
//             </div>
//           ))}
//         </Document>
//       ) : (
//         <div className="bg-white h-[70vh]">
//           <div className="flex justify-center items-center h-full flex-col">
//             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileViewer;


// import React, { useState, useEffect } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { PDFDocument } from "pdf-lib";

// interface PdfViewerProps {
//   pdfUrl: string;
//   fileData: { data: Uint8Array };
// }

// // Dynamically import the worker script to ensure it's available
// if (typeof window !== "undefined") {
//   import("pdfjs-dist/build/pdf.worker.min.mjs").then(worker => {
//     pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
//   });
// }

// const FileViewer: React.FC<PdfViewerProps> = ({ pdfUrl, fileData }) => {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [isPaid, setIsPaid] = useState<boolean>(false);
//   const [pdfData, setPdfData] = useState<any>()

//   useEffect(() => {
//     setPdfData(new Uint8Array(fileData.data))
//     const loadPdf = async () => {
//       if (pdfData) {
//         const pdfDoc = await PDFDocument.load(pdfData);
//         setNumPages(pdfDoc.getPageCount());
//       }
//     };
//     loadPdf();
//   }, []);

//   const fileDataInside = new Uint8Array(fileData.data)

//   const handlePayment = () => {
//     setIsPaid(true);
//     alert("Merci pour votre paiement !");
//   };

//   console.log(pdfUrl, 'jasonj')

//   return (
//     <div className="w-full h-full border overflow-auto max-h-[70vh]">
//       {fileDataInside ? (
//         <Document
//           // file={pdfUrl}
//           file={{ data: fileDataInside }}
//           onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//           className="w-full h-full"
//         >
//           {Array.from(new Array(numPages), (el, index) => (
//             <div
//               key={`page_${index + 1}`}
//               className="w-full h-full border object-contain bg-red-100"
//             >
//               <Page
//                 pageNumber={index + 1}
//                 className="w-full h-full object-contain"
//                 renderTextLayer={false}
//                 renderAnnotationLayer={false}
//               />
//             </div>
//           ))}
//         </Document>
//       ) : (
//         <div className="bg-white h-[70vh]">
//           <div className="flex justify-center items-center h-full flex-col">
//             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileViewer;




import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument } from "pdf-lib";

interface PdfViewerProps {
  pdfUrl: string;
  fileData: { data: Uint8Array };
}

// Dynamically import the worker script to ensure it's available
if (typeof window !== "undefined") {
  import("pdfjs-dist/build/pdf.worker.min.mjs").then((worker) => {
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
  });
}

const FileViewer: React.FC<PdfViewerProps> = ({ pdfUrl, fileData }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [pdfData, setPdfData] = useState<Uint8Array | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      if (fileData.data) {
        // setPdfData(new Uint8Array(fileData.data));
        const pdfDoc = await PDFDocument.load(fileData.data);
        setNumPages(pdfDoc.getPageCount());
      }
    };
    loadPdf();
  }, []);

  const newFileData = new Uint8Array(fileData.data)

  const handlePayment = () => {
    setIsPaid(true);
    alert("Merci pour votre paiement !");
  };

  return (
    <>
      <div className="w-full h-full border overflow-auto max-h-[70vh]">
          <Document
            file={{ data: newFileData }}
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
      </div>
    </>
  );
};

export default FileViewer;
