'use client'
import { useEffect, useRef, useState } from "react";
import Stepper from "./steper/Stepper";
import ContentAdd from "./content/ContentAdd";
import { toggleFunc2 } from "@/redux/features/auth-slice";
import { useToggleSidebar } from "@/app/hooks/useToggleSidebar";

const AddDocument = () => {
    const [step, setStep] = useState(1);
  const { dispatch } = useToggleSidebar();
   
  const changeHandler = (type: string) => {
    type == "add" ? setStep((step) => step + 1) : setStep((step) => step - 1);
  };
       const refDiv = useRef<null | HTMLDivElement>(null);
       useEffect(() => {
         if (refDiv.current) {
           refDiv.current.scrollIntoView();
         }
         // getFileHandler('../../../../../../public');
       }, [step]);
  
   useEffect(() => {
     dispatch(toggleFunc2(false));
   }, []);
  return (
    <div
      className="w-full px-5 py-5"
      onClick={() => {
        dispatch(toggleFunc2(false));
      }}
    >
      <div ref={refDiv}></div>
      <h1 className="text-xl font-bold">Upload Document</h1>
      <p className="text-[#47586E]">
        Upload Articles, Resarch Works, Documentation, Thesis ...
      </p>

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
