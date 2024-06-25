import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
const extArray = ["pdf", "docx", "csv", "xlsx", "txt"];
import xlsxLogo from '../../../../../../../public/images/Frame 512.svg'
import { useAddDocument } from "@/app/hooks/useAddDocument";
import { step3Handler } from "@/redux/features/addDocument-slice";

const ThirdStep: React.FC<{ step: number; changeHandler: any }> = ({
  step,
  changeHandler,
}) => {
    const { step3, dispatch } = useAddDocument();
  const [file, setFile] = useState<File | undefined>(step3.file);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<{
    name: string;
    author: string;
    isbn: string;
    description: string;
  }>({ mode: "onChange" || "onBlur" || "onSubmit" });

  const handleFileSelected = async (e: any) => {
    const ext: string = e.target?.files[0]?.name.split(".").pop();
    !extArray.includes(ext.toLocaleLowerCase()) ? toast.error("bad file") : "";
    // filee=e.target.files[0];
    const files = e?.target?.files;
    // setFileName(e.target?.files[0].name);
    if (extArray.includes(ext.toLocaleLowerCase())) {
      // files && setInputValue(files);
      console.log(e.target.files, "target");

      // const reader = new FileReader();
      setFile(e.target.files[0]);
      // setInputValue(e.target.files);

      e.target.value = null;
    } else {
      setFile(undefined);
    }
  };

  const onSubmit: SubmitHandler<{
    name: string;
    author: string;
    isbn: string;
    description: string;
  }> = async (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h1>Upload </h1>
      <p className="text-xs">Upload your documents</p>

      <div className="w-full">
        <input
          type="file"
          accept=".csv,.pdf,.xlsx,.docx,.txt"
          id="file1"
          className="hidden"
          onChange={handleFileSelected}
        />

        {/* {img && (
          <div className="h-48 w-36 ">
            <Image
              src={URL.createObjectURL(img)}
              width={30}
              height={30}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        )} */}
        <label
          htmlFor="file1"
          className="cursor-pointer   px-3 py-2 font-bold text-white text-sm flex justify-center items-center  mt-10"
        >
          <div className="w-full text-[#3E585D] justify-center border-dashed h-96 rounded-xl border border-collapse border-mainColor flex flex-col items-center">
            <Image src={xlsxLogo} alt="" />
            <p className="font-bold ">Upload your document</p>
            <p>Upload a pdf, docx, xlsx, csv, txt file </p>
          </div>
        </label>

        {file && (
          <div className="h-24 w-full border flex items-center justify-between px-5 mt-5">
            <span className="w-6/12">{file?.name}</span>
            <span
              onClick={() => setFile(undefined)}
              className="cursor-pointer font-bold text-xl"
            >
              x
            </span>
          </div>
        )}
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
          type="submit"
          disabled={!file}
          onClick={() => {
            changeHandler("add");
            dispatch(
              step3Handler({
                file,
                urlFile: file ? URL.createObjectURL(file) : "",
              })
            );
          }}
          className={`bg-mainColor ${
            !file ? "opacity-60" : "opacity-100"
          } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
        >
          Continue
        </button>
      </div>
      {/* <p className="text-sm mt-5">Science Category :</p> */}
    </form>
  );
};
export default ThirdStep;
