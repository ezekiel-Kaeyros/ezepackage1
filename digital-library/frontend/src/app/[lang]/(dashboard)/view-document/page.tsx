"use client";
import { useAddDocument } from "@/app/hooks/useAddDocument";
import Image from "next/image";
import save from '../../../../../public/images/save-2.svg'
import star from "../../../../../public/images/star (2).svg";
import Carousel from "@/app/common/components/caroussel/Carousel";
import cover2 from "../../../../../public/images/overview.svg";
// import pdfFile from ""
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import PdfViewer from "@/app/common/components/pdf-viewer/PdfViewer";
  const arraytest = [
    { num: 3, save: true },

    { num: 2, save: false, img: cover2 },

    { num: 2, save: false },
    { num: 3, save: false },

    { num: 2, save: false, img: cover2 },

    { num: 7, save: true },

    { num: 2, save: false },
  ];
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
const ViewDocument = () => {
  const { dispatch, idDoc, arrayDoc } = useAddDocument();
    const doc = arrayDoc.filter((item) => item.id == idDoc);
    console.log('arrayDoc++++++++++',arrayDoc);
    console.log("idDoc++++++++++", idDoc);
     const [numPages, setNumPages] = useState<number | null>(null);;
     const [pageNumber, setPageNumber] = useState(1);

     const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
       setNumPages(numPages);
     };

     const handlePageChange = (newPage:number) => {
       if (newPage <= 3) {
         setPageNumber(newPage);
       } else {
         // Afficher le dégradé ou la demande d'abonnement
         // En fonction de votre logique de gestion de contenu payant
         alert("Veuillez souscrire pour accéder à la page suivante.");
       }
     };
  return (
    <div className="w-full h-full pt-5">
      {doc.length > 0 && (
        <div className="w-full px-2 md:h-[50vh] grid md:grid-cols-2 gap-5">
          <div className=" overflow-auto h-full w-full no-scrollbar">
            <Image
              src={doc[0].url!}
              height={30}
              width={30}
              alt=""
              className="h-full w-full object-cover"
            />
            {/* <div className="h-full w-full">
              <Document
                              file={doc[0].urlFile}
                            //   file='/public/images/bulk-messages_template.pdf'
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <div>
                {Array.from(new Array(numPages || 0), (el, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    Page {index + 1}
                  </button>
                ))}
              </div>
            </div> */}
            {doc[0].file?.name.split(".").pop()?.toLocaleLowerCase() ==
              "pdf" ? (
              <iframe src={doc[0].urlFile} className="w-full h-full"></iframe>
            ) : <div className="w-full h-full flex items-center justify-center bg-black text-white">
                no preview available for {doc[0].file?.name.split(".").pop()} file
              </div>}
            {/* {doc[0].file?.name.split(".").pop()?.toLocaleLowerCase() !=
              "pdf" && (
              <div className="w-full h-full flex items-center justify-center">
                no preview available for {doc[0].file?.name.split(".").pop()} file
              </div>
            )} */}
            {/* { doc[0].file?.name.split(".").pop()?.toLocaleLowerCase()=='pdf' && <PdfViewer pdfUrl={doc[0].urlFile!} />}  */}
          </div>
          <div className="w-full h-full bg-white flex flex-col justify-between overflow-y-auto overflow-x-hidden  ">
            <p className="flex justify-between  ">
              <span></span>
              <span className="border rounded-l-full md:px-5 px-3 h-10 bg-slate-500 text-white flex items-center w-fit">
                {" "}
                {doc[0].type}
              </span>
            </p>
            <div className=" flex flex-col w-full flex-grow px-2 gap-5">
              <div>
                <h2>Article Name</h2>
                <p>{doc[0].name}</p>
              </div>

              <div className="max-h-24 overflow-auto w-11/12">
                <h2>Description</h2>
                <p className="text-sm">{doc[0].description}</p>
              </div>
              <div>
                <h2>File type</h2>
                <p className="text-sm">{doc[0].file?.name.split(".").pop()}</p>
              </div>
              {/* <div>
                <h2>File type</h2>
                <p>{doc[0].document?.name.split(".").pop()}</p>
              </div> */}
              <div>
                <h2>Category</h2>
                <p className="text-sm">{doc[0].categorie}</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-5 text-xs">
                  <div className="flex flex-col justify-center items-center">
                    <Image src={save} alt="" className="h-7 w-7" />
                    <span>save</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Image src={star} alt="" className="h-7 w-7" />
                    <span>save</span>
                  </div>
                </div>
                <button className="bg-mainColor px-3 py-2 rounded-full text-white font-bold text-xs">
                  Buy (free)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">
        <div className="w-full flex justify-between items-center mb-5 px-1">
          <p className="font-bold text-lg">Recent</p>
          <p className=" font-bold border-b-3 border-[green] text-[green]">
            See More
          </p>
        </div>
        <div className="w-full  pb-14 overflow-hidden">
          <Carousel data={arraytest} />
        </div>
      </div>
    </div>
  );
};
export default ViewDocument;
