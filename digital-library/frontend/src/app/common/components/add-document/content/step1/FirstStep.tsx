import { useAddDocument } from "@/app/hooks/useAddDocument";
import { step1Handler } from "@/redux/features/addDocument-slice";
import { useState } from "react";

const FirstStep: React.FC<{ step: number; changeHandler: any }> = ({
  step,
  changeHandler,
}) => {
  const { step1 ,dispatch}=useAddDocument()
  const channelarray = [
    { name: "health", id: 1 },
    { name: "Mines", id: 2 },
    { name: "Ict", id: 3 },
    { name: "Agro Food Sciences", id: 4 },
    { name: "Energie", id: 5 },
    { name: "Social Xciences", id: 6 },
    { name: "Data Analytics", id: 7 },
    
  ];

  const Docarray = [
    { name: "Research", id: 1 },
    { name: "Article", id: 2 },
    { name: "Thesis", id: 3 },
    { name: "Records", id: 4 },
    { name: "Other", id: 5 },
  ];
  const [value, setValue] = useState(step1.categorie);
  const [valueDoc, setValueDoc] = useState(step1.type);

  return (
    <div>
      <h1>Settings</h1>
      <p className="text-xs">Document</p>
      <p className="text-sm mt-5">Science Category :</p>

      <div className="flex gap-5  overflow-auto lg:w-full border sm:w-96 w-[230px]">
        {channelarray.map((item,index) => (
          <div
            onClick={() => {
              if (value == item.name) {
                setValue("");
              } else {
                setValue(item.name);
              }
            }}
            className={`h-24 w-24 flex items-center justify-center  ${
              item.name != value
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
        {Docarray.map((item,index) => (
          <div
            onClick={() => {
              if (valueDoc == item.name) {
                setValueDoc("");
              } else {
                setValueDoc(item.name);
              }
            }}
            className={`h-24 w-24 flex items-center justify-center  ${
              item.name != valueDoc
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
        disabled={value == "" || valueDoc == ""}
        onClick={() => {
          dispatch(step1Handler({ categorie: value, type: valueDoc }));
          changeHandler("add");
        }}
        className={`bg-mainColor ${
          valueDoc == "" || value == "" ? "opacity-60" : "opacity-100"
        } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
      >
        Continue
      </button>
    </div>
  );
};
export default FirstStep;
