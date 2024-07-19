// import { SubmitHandler, useForm } from "react-hook-form";
// import InputField from "../../../forms/InputField";
// import TextField from "../../../forms/TextField";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import toast from "react-hot-toast";
// import { useAddDocument } from "@/app/hooks/useAddDocument";
// import { step1Handler, step2Handler } from "@/redux/features/addDocument-slice";
// import { SECOND_STEP } from "@/cookies/cookies.d";
// import { getFormCookies, setFormCookies } from "@/cookies/cookies";
// const extArray=['svg','jpg','jpeg','png']
// const SecondStep: React.FC<{ step: number; changeHandler: any }> = ({
//   step,
//   changeHandler,
// }) => {

//   // console.log(step, 'this is my current step')
//   const { step2,dispatch }=useAddDocument()
// const[img,setImag]=useState<File|undefined>(step2.coverImage)
//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     formState: { isValid, errors },
//   } = useForm<{ lastName: string, title: string, firstName: string, description: string, author:string }>({ mode: "onChange" || "onBlur" || "onSubmit" });
//    let title = watch("title");
//    let firstName = watch("firstName");
//    let lastName = watch("lastName");
//    let description = watch("description");
//   const handleFileSelected = async (e: any) => {
   
//   const ext:string = e.target?.files[0]?.name.split(".").pop();
//   !extArray.includes(ext.toLocaleLowerCase()) ? toast.error("bad file") : "";
//   // filee=e.target.files[0];
//   const files = e?.target?.files;
//   // setFileName(e.target?.files[0].name);
//   if (extArray.includes(ext.toLocaleLowerCase())) {
//     // files && setInputValue(files);
// // console.log(e.target.files,'target');

//     // const reader = new FileReader();
//     setImag(e.target.files[0]);
//     // setInputValue(e.target.files);

//     e.target.value = null;
//   } else {
//     setImag(undefined)
//   }
// };



//   const onSubmit: SubmitHandler<{
//     firstName: string;
//     lastName: string;
//     title: string;
//     description: string;
//   }> = async (data) => { 
//     console.log(data, 'this is my data')
//     setFormCookies(data, SECOND_STEP)
//   };
  
//   useEffect(() => {
//     let formValue: any = getFormCookies(SECOND_STEP)

//     setValue('title', step2.title)
//     setValue('firstName', step2.firstName)
//     setValue('lastName',step2.lastName)
//     setValue('description', step2.description)
//   },[])

//   // console.log(step2, 'this is my step2')


//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//       <h1>Document Setup</h1>
//       <p className="text-xs">Document Related</p>

//       {/* This is my doc title */}
//       <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
//         <InputField
//           title="Enter document Title *"
//           placeholder="Ex: My Title"
//           id="titlek"
//           name="title"
//           type="text"
//           props={register("title", {
//             required: true,
//           })}
//         />
//       </div>
//       {/* firstName */}
//       <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
//         <InputField
//           title="FirstName"
//           placeholder="Enter First Name"
//           id="firstnamek"
//           name="firstname"
//           type="text"
//           props={register("firstName", {
//             required: true,
//           })}
//         />
//       </div>

//       {/* lastName */}
//       <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
//         <InputField
//           title="LastName"
//           placeholder="Enter Last Name"
//           id="lastnamek"
//           name="lastname"
//           type="text"
//           props={register("lastName", {
//             required: true,
//           })}
//         />
//       </div>

//       <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full mt-5">
//         <TextField
//           title="description"
//           id="descriptionk"
//           props={register("description", {
//             required: true,
//           })}
//         />
//       </div>

//       <div className="w-fit mt-5">
//         <input
//           type="file"
//           accept=".svg,.png,.jpg,.jpeg"
//           id="file1"
//           className="hidden"
//           onChange={handleFileSelected}
//         />
//         <p className="font-bold my-3">Cover page</p>
//         {img && (
//           <div className="h-48 w-36 ">
//             <Image
//               src={URL.createObjectURL(img)}
//               width={30}
//               height={30}
//               alt=""
//               className="h-full w-full object-contain"
//             />
//           </div>
//         )}
//         <label
//           htmlFor="file1"
//           className="cursor-pointer  bg-mainColor  px-3 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10"
//         >
//           Select picture
//         </label>
//       </div>

//       <div className="flex justify-end gap-5 items-center">
//         <button
//           type="button"
//           onClick={() => {
//             changeHandler("back");
//           }}
//           className={`px-4 py-2 font-bold text-black text-sm flex justify-center items-center rounded-full mt-10`}
//         >
//           back
//         </button>
//         <button
//           type="submit"
//           disabled={!description || !firstName || !lastName || !title || !img ? true : false}
//           onClick={() => {
//             changeHandler("add");
//             dispatch(
//               step2Handler({
//                 firstName,
//                 description,
//                 coverImage: img,
//                 lastName: lastName,
//                 title,
//                 url: img ? URL.createObjectURL(img) : '',
//               })
//             );
//           }}
//           className={`bg-mainColor ${
//             !description || !firstName || !lastName || !title || !img ? "opacity-60" : "opacity-100"
//           } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
//         >
//           Continue
//         </button>
//       </div>
//       {/* <p className="text-sm mt-5">Science Category :</p> */}
//     </form>
//   );
// };
// export default SecondStep;













import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../../../forms/InputField";
import TextField from "../../../forms/TextField";
import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useAddDocument } from "@/app/hooks/useAddDocument";
import { step2Handler } from "@/redux/features/addDocument-slice";
import { SECOND_STEP } from "@/cookies/cookies.d";
import { getFormCookies, setFormCookies } from "@/cookies/cookies";

const extArray = ['svg', 'jpg', 'jpeg', 'png'];

const SecondStep: React.FC<{ step: number; changeHandler: any }> = ({ step, changeHandler }) => {
  const { step2, dispatch } = useAddDocument();
  const [img, setImg] = useState<File | undefined>(step2.coverImage);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<{ lastName: string, title: string, firstName: string, description: string, author: string }>({ mode: "onChange" || "onBlur" || "onSubmit" });

  let title = watch("title");
  let firstName = watch("firstName");
  let lastName = watch("lastName");
  let description = watch("description");

  const handleFileSelected = async (e: any) => {
    const ext: string = e.target?.files[0]?.name.split(".").pop();
    !extArray.includes(ext.toLocaleLowerCase()) ? toast.error("bad file") : "";

    const files = e?.target?.files;
    if (extArray.includes(ext.toLocaleLowerCase())) {
      setImg(e.target.files[0]);
      e.target.value = null;
    } else {
      setImg(undefined);
    }
  };

  const onSubmit: SubmitHandler<{ firstName: string; lastName: string; title: string; description: string; }> = async (data) => {

    const completeData = {
      ...data,
      coverImage:img,
      // url: img,
      url: img ? URL.createObjectURL(img) : '',
      step:step
    }
    setFormCookies(completeData, SECOND_STEP);

    dispatch(
      step2Handler({
        firstName,
        description,
        coverImage: img,
        lastName: lastName,
        title,
        // url: img,
        url: img ? URL.createObjectURL(img) : '',
      })
    );

    changeHandler("add");
  };

  useEffect(() => {
    let formValue: any = getFormCookies(SECOND_STEP);
    console.log(formValue, 'this is my formValue')

    setValue('title', step2.title);
    setValue('firstName', step2.firstName);
    setValue('lastName', step2.lastName);
    setValue('description', step2.description);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h1>Document Setup</h1>
      <p className="text-xs">Document Related</p>

      {/* Document Title */}
      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
        <InputField
          title="Enter document Title *"
          placeholder="Ex: My Title"
          id="titlek"
          name="title"
          type="text"
          props={register("title", {
            required: true,
          })}
        />
      </div>
      
      {/* First Name */}
      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
        <InputField
          title="FirstName"
          placeholder="Enter First Name"
          id="firstnamek"
          name="firstname"
          type="text"
          props={register("firstName", {
            required: true,
          })}
        />
      </div>

      {/* Last Name */}
      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full">
        <InputField
          title="LastName"
          placeholder="Enter Last Name"
          id="lastnamek"
          name="lastname"
          type="text"
          props={register("lastName", {
            required: true,
          })}
        />
      </div>

      <div className="2xl:w-6/12 lg:9/12 sm:w-11/12 w-full mt-5">
        <TextField
          title="description"
          id="descriptionk"
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
          className="cursor-pointer bg-mainColor px-3 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10"
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
          disabled={!description || !firstName || !lastName || !title || !img}
          className={`bg-mainColor ${!description || !firstName || !lastName || !title || !img ? "opacity-60" : "opacity-100"} px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default SecondStep;
