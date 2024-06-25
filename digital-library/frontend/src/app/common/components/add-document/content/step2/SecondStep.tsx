import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../../../forms/InputField";
import TextField from "../../../forms/TextField";
import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useAddDocument } from "@/app/hooks/useAddDocument";
import { step1Handler, step2Handler } from "@/redux/features/addDocument-slice";
const extArray=['svg','jpg','jpeg','png']
const SecondStep: React.FC<{ step: number; changeHandler: any }> = ({
  step,
  changeHandler,
}) => {
  const { step2,dispatch }=useAddDocument()
const[img,setImag]=useState<File|undefined>(step2.coverImage)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<{ name: string, author: string, isbn: string, description: string }>({ mode: "onChange" || "onBlur" || "onSubmit" });
   let author = watch("author");
   let isbn = watch("isbn");
   let name = watch("name");
   let description = watch("description");
  const handleFileSelected = async (e: any) => {
   
  const ext:string = e.target?.files[0]?.name.split(".").pop();
  !extArray.includes(ext.toLocaleLowerCase()) ? toast.error("bad file") : "";
  // filee=e.target.files[0];
  const files = e?.target?.files;
  // setFileName(e.target?.files[0].name);
  if (extArray.includes(ext.toLocaleLowerCase())) {
    // files && setInputValue(files);
console.log(e.target.files,'target');

    // const reader = new FileReader();
    setImag(e.target.files[0]);
    // setInputValue(e.target.files);

    e.target.value = null;
  } else {
    setImag(undefined)
  }
};

  const onSubmit: SubmitHandler<{
    name: string;
    author: string;
    isbn: string;
    description: string;
  }> = async (data) => { };
  
  useEffect(() => {
    setValue('author', step2.author)
    setValue('description', step2.description)
    setValue('isbn', step2.ibsn)
    setValue('name',step2.name)
  },[])
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h1>Document Setup</h1>
      <p className="text-xs">Document Related</p>

      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
        <InputField
          title="Enter document name *"
          placeholder="Ex : My thesis"
          id="cat"
          name="cat"
          type="text"
          props={register("name", {
            required: true,
          })}
        />
      </div>
      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
        <InputField
          title="Author"
          placeholder="John Doe"
          id="name"
          name="name"
          type="text"
          props={register("author", {
            required: true,
          })}
        />
      </div>
      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
        <InputField
          title="ISBN"
          placeholder="Ex : 978-2-07-061275-8."
          id="ISBN"
          name="ISBN"
          type="text"
          props={register("isbn", {
            required: true,
          })}
        />
      </div>

      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full mt-5">
        <TextField
          title="description"
          id="description"
          props={register("description", {
            required: true,
          })}
        />
      </div>

      <div className="w-fit mt-5">
        <input
          type="file"
          accept=".svg,.png,.jpg,.jpeg"
          id="file1"
          className="hidden"
          onChange={handleFileSelected}
        />
        <p className="font-bold my-3">Cover page</p>
        {img && (
          <div className="h-48 w-36 ">
            <Image
              src={URL.createObjectURL(img)}
              width={30}
              height={30}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <label
          htmlFor="file1"
          className="cursor-pointer  bg-mainColor  px-3 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10"
        >
          Select picture
        </label>
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
          disabled={!author || !description || !name || !isbn || !img ? true : false}
          onClick={() => {
            changeHandler("add");
            dispatch(
              step2Handler({
                author,
                name,
                description,
                coverImage: img,
                ibsn: isbn,
                url: img ? URL.createObjectURL(img) : '',
              })
            );
          }}
          className={`bg-mainColor ${
            !author || !description || !name || !isbn || !img ? "opacity-60" : "opacity-100"
          } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
        >
          Continue
        </button>
      </div>
      {/* <p className="text-sm mt-5">Science Category :</p> */}
    </form>
  );
};
export default SecondStep;
