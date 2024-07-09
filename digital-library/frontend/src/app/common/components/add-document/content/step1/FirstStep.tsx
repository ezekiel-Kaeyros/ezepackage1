import { useAddDocument } from "@/app/hooks/useAddDocument";
import { getFormCookies, setFormCookies } from "@/cookies/cookies";
import { step1Handler } from "@/redux/features/addDocument-slice";
import { useEffect, useState } from "react";
import { FIRST_STEP } from "@/cookies/cookies.d";

interface FirstFormProps {
  step: number;
  catValue: string;
  valueDoc: string;
}

const FirstStep: React.FC<{ step: number; changeHandler: any }> = ({
  step,
  changeHandler,
}) => {
  const { step1, dispatch } = useAddDocument();
  const channelarray = [
    { name: "health", id: 1 },
    { name: "Mines", id: 2 },
    { name: "Ict", id: 3 },
    { name: "Agro Food Sciences", id: 4 },
    { name: "Energie", id: 5 },
    { name: "Social Sciences", id: 6 },
    { name: "Data Analytics", id: 7 },
  ];

  const Docarray = [
    { name: "Research", id: 1 },
    { name: "article", id: 2 },
    { name: "Thesis", id: 3 },
    { name: "Records", id: 4 },
    { name: "attachment", id: 5 },
    { name: "book", id: 6 },
    { name: "Other", id: 7 },
  ];

  const [catValue, setCatValue] = useState("");
  const [valueDoc, setValueDoc] = useState("");

  useEffect(() => {
    const formData: FirstFormProps = getFormCookies(FIRST_STEP);
    if (formData) {
      formData.catValue && setCatValue(formData.catValue);
      formData.valueDoc && setValueDoc(formData.valueDoc);
    }
  }, []);
  
  useEffect(() => {
    const firstStepValues = {
      step,
      catValue,
      valueDoc,
    };
    setFormCookies(firstStepValues, FIRST_STEP);
  }, [catValue, valueDoc]);
  
  console.log(catValue, valueDoc, 'my formData');
  return (
    <div className="lg:w-full sm:w-[450px] w-[290px]">
      <h1>Settings</h1>
      <p className="text-xs">Document Settings</p>
      <p className="text-sm mt-9 mb-5">Science Category :</p>

      <div className="flex gap-2 overflow-auto w-full">
        {channelarray.map((item, index) => (
          <div
            onClick={() => {
              if (catValue === item.name) {
                setCatValue("");
              } else {
                setCatValue(item.name);
              }
            }}
            className={`h-24 w-24 flex items-center justify-center ${
              item.name !== catValue
                ? "border-black border"
                : "border-mainColor border-3"
            } rounded-xl text-xs text-center cursor-pointer object-cover px-3`}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>

      <p className="text-sm mt-9 mb-5">Document type :</p>
      <div className="flex gap-5 items-center overflow-auto w-full border">
        {Docarray.map((item, index) => (
          <div
            onClick={() => {
              if (valueDoc === item.name) {
                setValueDoc("");
              } else {
                setValueDoc(item.name);
              }
            }}
            className={`h-[90px] w-[90px] lg:px-0 px-6 flex items-center justify-center ${
              item.name !== valueDoc
                ? "border-black border"
                : "border-mainColor border-3"
            } rounded-xl text-xs text-center cursor-pointer`}
            key={item.name}
          >
            {item.name}
          </div>
        ))}
      </div>

      <button
        disabled={catValue === "" || valueDoc === ""}
        onClick={() => {
          dispatch(step1Handler({ categorie: catValue, type: valueDoc }));
          changeHandler("add");
        }}
        className={`bg-mainColor ${
          valueDoc === "" || catValue === "" ? "opacity-60" : "opacity-100"
        } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
      >
        Continue
      </button>
    </div>
  );
};

export default FirstStep;
