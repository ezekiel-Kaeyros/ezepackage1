'use client'
import { useEffect, useRef, useState } from "react";
import Stepper from "./steper/Stepper";
import ContentAdd from "./content/ContentAdd";

const AddDocument = () => {
    const [step, setStep] = useState(1);
   
  const changeHandler = (type: string) => {
    type == "add" ? setStep((step) => step + 1) : setStep((step) => step - 1);
  };
       const refDiv = useRef<null | HTMLDivElement>(null);
       useEffect(() => {
         if (refDiv.current) {
           refDiv.current.scrollIntoView();
         }
         console.log(step);

         // getFileHandler('../../../../../../public');
       }, [step]);
  return (
    <div className="w-full px-5 py-5">
      <div ref={refDiv}></div>
      <h1>Upload Document</h1>
      <p>Upload Articles, Resarch Works, Documentation, Thesis ...</p>

      <div className="w-full mt-10 flex h-full">
        <div className="w-fit h-full ">
          <Stepper step={step} />
        </div>
        <div className="flex-grow border-l">
          <ContentAdd step={step} changeHandler={changeHandler} />
        </div>
      </div>
    </div>
  );
};

export default AddDocument;
