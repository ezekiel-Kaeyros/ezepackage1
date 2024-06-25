import { useAddDocument } from "@/app/hooks/useAddDocument";
import { step4Handler } from "@/redux/features/addDocument-slice";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FourthStep: React.FC<{ step: number, changeHandler: any }> = ({ step, changeHandler }) => {
    const { step4, dispatch } = useAddDocument();

   const channelarray = [
     { name: "private", id: 1 },
     { name: "publick", id: 2 },
     
   ];
  const { push }=useRouter()


   const [value, setValue] = useState(step4);

  return (
    <div>
      <h1>Settings</h1>
      <p className="text-xs">Document</p>
      <p className="text-sm mt-5">Science Category :</p>

      <div className="flex gap-5 items-center overflow-auto w-full border">
        {channelarray.map((item) => (
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
              } rounded-xl text-xs text-center cursor-pointer`}
            key={item.name}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-5 items-center">
        <button
          type="button"
          onClick={() => {
            changeHandler("back");
          }}
          className={`px-4 py-2 font-bold text-black text-sm flex justify-center items-center rounded-full mt-10`}
        >
          back
        </button>
        <button
          
          disabled={value == ""}
          onClick={() => {
            // changeHandler("add");
            dispatch(step4Handler(value))
            push('/en')
          }}
          className={`bg-mainColor ${
            value == "" ? "opacity-60" : "opacity-100"
          } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
        >
          Done
        </button>
      </div>
    </div>
  );
};
export default FourthStep;
