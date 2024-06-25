import { useEffect, useRef } from "react";
import FirstStep from "./step1/FirstStep";
import SecondStep from "./step2/SecondStep";
import ThirdStep from "./step3/ThirdStep";
import FourthStep from "./step4/FourthStep";

const ContentAdd: React.FC<{ step: number; changeHandler: any }> = ({
  step,
  changeHandler,
}) => {
 
    return (
      <div className="w-full sm:pl-10 pl-3 lg:pb-36 md:pb-24 pb-10" >
        {step == 1 && <FirstStep step={step} changeHandler={changeHandler} />}
        {step == 2 && <SecondStep step={step} changeHandler={changeHandler} />}
        {step == 3 && <ThirdStep step={step} changeHandler={changeHandler} />}
        {step == 4 && <FourthStep step={step} changeHandler={changeHandler} />}
      </div>
    );
};
export default ContentAdd;
