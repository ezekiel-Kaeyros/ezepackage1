// components/PDFViewer.tsx
import React, { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import mammoth from 'mammoth';
import { getDocument } from 'pdfjs-dist';

interface PDFViewerProps {
  fileUrl: string;
  fileType: string;
}

const PDFViewer02: React.FC<PDFViewerProps> = ({ fileUrl, fileType }) => {
  const [excelData, setExcelData] = useState<string[][] | null>(null);
  const [wordData, setWordData] = useState<string | null>(null);
  const pdfCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pdfPages, setPdfPages] = useState<number>(0);

  useEffect(() => {
    const fetchFile = async () => {
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      if (fileType === 'xlsx') {
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data: string[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setExcelData(data);
      } else if (fileType === 'docx') {
        const arrayBuffer = await blob.arrayBuffer();
        mammoth.convertToHtml({ arrayBuffer })
          .then((result) => {
            setWordData(result.value);
          })
          .catch((error) => {
            console.error('Error converting Word document to HTML:', error);
          });
      } else if (fileType === 'pdf') {
        const pdf = await getDocument({ data: await blob.arrayBuffer() }).promise;
        setPdfPages(pdf.numPages);
        if (pdfCanvasRef.current) {
          const context = pdfCanvasRef.current.getContext('2d');
          if (context) {
            pdf.getPage(1).then((page) => {
              const viewport = page.getViewport({ scale: 1 });
              pdfCanvasRef.current!.height = viewport.height;
              pdfCanvasRef.current!.width = viewport.width;

              page.render({
                canvasContext: context,
                viewport: viewport,
              });
            });
          }
        }
      }
    };

    fetchFile();
  }, [fileUrl, fileType]);

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '16px',
    textAlign: 'left',
  };

  const thTdStyle: React.CSSProperties = {
    border: '1px solid #dddddd',
    padding: '8px',
  };

  const thStyle: React.CSSProperties = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  };

  const trEvenStyle: React.CSSProperties = {
    backgroundColor: '#f9f9f9',
  };

  const wordContainerStyle: React.CSSProperties = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '20px 0',
    lineHeight: '1.6',
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '14pt',
    color: '#000',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const pageBreakStyle: React.CSSProperties = {
    pageBreakAfter: 'always',
    height: '2px',
    backgroundColor: '#eee',
    margin: '20px 0',
  };

  const addPageNumbers = (html: string): string => {
    const pages = html.split('<div style="page-break-after: always"></div>');
    return pages
      .map((page, index) => {
        return `${page}<div style="page-break-after: always"></div><div style="text-align: center; margin-top: 10px; color: gray;">Page ${index + 1}</div>`;
      })
      .join('');
  };

  if (fileType === 'xlsx' && excelData) {
    return (
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              {excelData[0].map((cell, index) => (
                <th key={index} style={thStyle}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} style={rowIndex % 2 === 0 ? trEvenStyle : undefined}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={thTdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (fileType === 'docx' && wordData) {
    return (
      <div style={wordContainerStyle} dangerouslySetInnerHTML={{ __html: addPageNumbers(wordData) }} />
    );
  } else if (fileType === 'pdf') {
    return (
      <div>
        <canvas ref={pdfCanvasRef}></canvas>
        {Array.from({ length: pdfPages }, (_, index) => (
          <div key={index} style={{ textAlign: 'center', marginTop: '10px', color: 'gray' }}>
            Page {index + 1}
          </div>
        ))}
      </div>
    );
  } else if (fileType === 'txt') {
    return <iframe src={`https://docs.google.com/viewer?url=${fileUrl}&embedded=true`} width="100%" height="600px" />;
  } else if (['png', 'jpg', 'jpeg', 'gif'].includes(fileType)) {
    return <img src={fileUrl} alt="file content" />;
  } else {
    return <p>Unsupported file type</p>;
  }
};

export default PDFViewer02;
