// import { useAddDocument } from "@/app/hooks/useAddDocument";
// import { getFormCookies, getUserCookies, setFormCookies } from "@/cookies/cookies";
// import { step1Handler } from "@/redux/features/addDocument-slice";
// import { useEffect, useState } from "react";
// import { FIRST_STEP } from "@/cookies/cookies.d";
// import { HealthIcon, MinesIcon, FoodIcon, EnergyIcon, SocialIcon, DanalyticsIcon } from "../stepIcons/step1Icons";
// import { Modal, ModalBody, ModalContent, SelectItem, Select } from "@nextui-org/react";


// interface FirstFormProps {
//   step: number;
//   catValue: string;
//   valueDoc: string;
// }

// const FirstStep: React.FC<{ step: number; changeHandler: any }> = ({
//   step,
//   changeHandler,
// }) => {
//   const { step1, dispatch } = useAddDocument();
//   const userCredentials = getUserCookies()
//   const channelarray = [
//     { name: "Health", id: 1 },
//     { name: "Mines", id: 2 },
//     { name: "Ict", id: 3 },
//     { name: "Agro Food Sciences", id: 4 },
//     { name: "Energie", id: 5 },
//     { name: "Social Sciences", id: 6 },
//     { name: "Data Analytics", id: 7 },
//   ];

//   const Docarray = [
//     { name: "Research", id: 1 },
//     { name: "Article", id: 2 },
//     { name: "Thesis", id: 3 },
//     { name: "Records", id: 4 },
//     { name: "Attachment", id: 5 },
//     { name: "Book", id: 6 },
//     { name: "Other", id: 7 },
//   ];

//   const iconMapping = {
//     Health: HealthIcon,
//     Mines: MinesIcon,
//     Ict: MinesIcon,
//     "Agro Food Sciences": FoodIcon,
//     Energie: EnergyIcon,
//     "Social Sciences": SocialIcon,
//     "Data Analytics": DanalyticsIcon,
//   } as any;

//   const [catValue, setCatValue] = useState("");
//   const [valueDoc, setValueDoc] = useState("");

//   useEffect(() => {
//     const formData: FirstFormProps = getFormCookies(FIRST_STEP);
//     if (formData) {
//       formData.catValue && setCatValue(formData.catValue);
//       formData.valueDoc && setValueDoc(formData.valueDoc);
//     }
//   }, []);

//   useEffect(() => {
//     const firstStepValues = {
//       step,
//       catValue,
//       valueDoc,
//     };
//     setFormCookies(firstStepValues, FIRST_STEP);
//   }, [catValue, valueDoc]);

//   console.log(catValue, valueDoc, 'my formData');
//   return (
//     <>
//       <div className="lg:w-full sm:w-[450px] w-[290px]">
//         <h1>Settings</h1>
//         <p className="text-xs">Document Settings</p>
//         <p className="text-sm mt-9 mb-5">Science Category :</p>

//         <div className="flex gap-2 overflow-auto w-full">
//           {channelarray.map((item, index) => (
//             <div
//               onClick={() => {
//                 if (catValue === item.name) {
//                   setCatValue("");
//                 } else {
//                   setCatValue(item.name);
//                 }
//               }}
//               className={`h-24 w-24 flex items-center justify-center ${item.name !== catValue
//                 ? "border-black border"
//                 : "border-mainColor border-3"
//                 } rounded-xl text-xs text-center cursor-pointer object-cover px-3`}
//               key={index}
//             >
//               {item.name}
//             </div>
//           ))}
//         </div>

//         <p className="text-sm mt-9 mb-5">Document type :</p>
//         <div className="flex gap-5 items-center overflow-auto w-full">
//           {Docarray.map((item, index) => {
//             const activeColor = item.name !== valueDoc ? "border-black border" : "border-mainColor border-3"
//             const IconComponent = iconMapping[item.name];

//             console.log(IconComponent, 'iconComponent')

//             return (
//               <div
//                 onClick={() => {
//                   if (valueDoc === item.name) {
//                     setValueDoc("");
//                   } else {
//                     setValueDoc(item.name);
//                   }
//                 }}
//                 className={`h-[90px] w-[90px] lg:px-0 px-6 flex items-center justify-center ${activeColor} rounded-xl text-xs text-center cursor-pointer`}
//                 key={item.name}
//               >
//                 {IconComponent && <IconComponent col={activeColor} />}
//                 {item.name}
//               </div>)
//           })}
//         </div>

//         {
//           userCredentials?.email ?
//             <button
//               disabled={catValue === "" || valueDoc === ""}
//               onClick={() => {
//                 dispatch(step1Handler({ categorie: catValue, type: valueDoc }));
//                 changeHandler("add");
//               }}
//               className={`bg-mainColor ${valueDoc === "" || catValue === "" ? "opacity-60" : "opacity-100"
//                 } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
//             >
//               Continue
//             </button>
//             :
//             <div className="mt-10">
//               <h1 className="text-red-700 font-bold">User Must be Authenticated to Continue, Try Logging In Again</h1>
//             </div>
//         }
//       </div>
//     </>
//   );
// };

// export default FirstStep;





import React, { useEffect, useState } from "react";
import { useAddDocument } from "@/app/hooks/useAddDocument";
import { getFormCookies, getUserCookies, setFormCookies } from "@/cookies/cookies";
import { step1Handler } from "@/redux/features/addDocument-slice";
import { FIRST_STEP } from "@/cookies/cookies.d";
import { HealthIcon, MinesIcon, FoodIcon, EnergyIcon, SocialIcon, DanalyticsIcon, RecordsIcon, ResearchIcon } from "../stepIcons/step1Icons";

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
  const userCredentials = getUserCookies();

  const channelArray = [
    { name: "Health", id: 1 },
    { name: "Mines", id: 2 },
    { name: "Ict", id: 3 },
    { name: "Agro Food Sciences", id: 4 },
    { name: "Energie", id: 5 },
    { name: "Social Sciences", id: 6 },
    { name: "Data Analytics", id: 7 },
  ];

  const Docarray = [
    { name: "Research", id: 1 },
    { name: "Article", id: 2 },
    { name: "Thesis", id: 3 },
    { name: "Records", id: 4 },
    { name: "Other", id: 7 },
  ];

  const channelIconMapping = {
    Health: HealthIcon,
    Mines: MinesIcon,
    Ict: MinesIcon,
    "Agro Food Sciences": FoodIcon,
    Energie: EnergyIcon,
    "Social Sciences": SocialIcon,
    "Data Analytics": DanalyticsIcon,
  } as any;

  const DocIconMapping = {
    Research: ResearchIcon,
    Article: ResearchIcon,
    Thesis: FoodIcon,
    Records: RecordsIcon,
    Other: HealthIcon,
  } as any;

  const [catValue, setCatValue] = useState("");
  const [valueDoc, setValueDoc] = useState("");

  const activeBorderColor = "#015e44";

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
    <>
      <div className="lg:w-full sm:w-[450px] w-[290px]">
        <h1>Settings</h1>
        <p className="text-xs">Document Settings</p>
        <p className="text-sm mt-9 mb-5">Science Category :</p>

        <div className="flex gap-2 overflow-auto w-full">
          {channelArray.map((item, index) => {
            const isActive = item.name === catValue;
            const borderColor = isActive ? activeBorderColor : "black";
            const borderStyle = isActive ? "3px solid" : "1px solid";
            const IconComponent = channelIconMapping[item.name];

            return (
              <div
                onClick={() => {
                  if (catValue === item.name) {
                    setCatValue("");
                  } else {
                    setCatValue(item.name);
                  }
                }}
                style={{ border: `${borderStyle} ${borderColor}` }}
                className="h-24 w-24 flex items-center justify-center rounded-xl text-xs text-center cursor-pointer object-cover px-3 flex-col gap-y-2"
                key={index}
              >
                {IconComponent && <IconComponent isActive={borderColor} />}
                {item.name}
              </div>
            );
          })}
        </div>

        <p className="text-sm mt-9 mb-5">Document type :</p>
        <div className="flex gap-5 items-center overflow-auto w-full">
          {Docarray.map((item, index) => {
            const isActive = item.name === valueDoc;
            const borderColor = isActive ? activeBorderColor : "black";
            const borderStyle = isActive ? "3px solid" : "1px solid";
            const IconComponent = DocIconMapping[item.name];

            return (
              <div
                onClick={() => {
                  setValueDoc(isActive ? "" : item.name);
                }}
                style={{ border: `${borderStyle} ${borderColor}` }}
                className="h-[90px] w-[90px] lg:px-0 px-6 items-center justify-center rounded-xl text-xs text-center cursor-pointer flex gap-y-2 flex-col"
                key={index}
              >
                {IconComponent && <IconComponent isActive={borderColor} />}
                {item.name}
              </div>
            );
          })}
        </div>

        {userCredentials?.email ? (
          <button
            disabled={catValue === "" || valueDoc === ""}
            onClick={() => {
              dispatch(step1Handler({ categorie: catValue, type: valueDoc }));
              changeHandler("add");
            }}
            className={`bg-mainColor ${valueDoc === "" || catValue === "" ? "opacity-60" : "opacity-100"} px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
          >
            Continue
          </button>
        ) : (
          <div className="mt-10">
            <h1 className="text-red-700 font-bold">
              User Must be Authenticated to Continue, Try Logging In Again
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default FirstStep;