// import { useAddDocument } from "@/app/hooks/useAddDocument";
// import { step4Handler } from "@/redux/features/addDocument-slice";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import toast, {Toaster} from "react-hot-toast";

// const FourthStep: React.FC<{ step: number, changeHandler: any }> = ({ step, changeHandler }) => {
//     const { step1, step2, step3, step4, dispatch } = useAddDocument();
//     const [isLoading, setIsLoading] = useState(false)

//    const channelarray = [
//      { name: "private", id: 1 },
//      { name: "public", id: 2 },     
//    ];
//    const {type} = step1
//    const { file } = step3;
//    const { firstName, lastName } = step2;
//    const title = "Lengend of the seeker"

//    const formData: any = {firstName, lastName, title, file, type}
//    console.log(formData, 'allSteps')

//   const { push }=useRouter()
//    const [value, setValue] = useState(step4);

//    const url = `${process.env.NEXT_PUBLIC_ZOTERO_POST_FILES_URL}/api/files/upload`

//    const uploadFile = async () => {
//     setIsLoading(true)
//     try {
//       const response = await axios.post(url, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ZOTERO_API_KEY}`
//         }
//       });

//       setIsLoading(false);
//       if (response.status !== 200) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       console.log('File uploaded successfully:', response);
//       const result = response.data;
//     } catch (error: any) {
//       setIsLoading(false);
//       console.error('Error uploading file:', error);
//     }
//    }

//   return (
//     <div>
//       <Toaster />
//       <h1>Settings</h1>
//       <p className="text-xs">Document</p>
//       <p className="text-sm mt-5">Science Category :</p>

//       <div className="flex gap-5 items-center overflow-auto w-full border">
//         {channelarray.map((item) => (
//           <div
//             onClick={() => {
//               if (value == item.name) {
//                 setValue("");
//               } else {
//                 setValue(item.name);
//               }
//             }}
//             className={`h-24 w-24 flex items-center justify-center  ${
//               item.name != value
//                 ? "border-black border"
//                 : "border-mainColor border-3"
//               } rounded-xl text-xs text-center cursor-pointer`}
//             key={item.name}
//           >
//             {item.name}
//           </div>
//         ))}
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
          
//           disabled={value == ""}
//           onClick={() => (
//             uploadFile()
//             // changeHandler("add")
//             // dispatch(step4Handler(value))
//             // push('/en')
//           )}
//           className={`bg-mainColor ${
//             value == "" ? "opacity-60" : "opacity-100"
//           } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
//         >
//          {isLoading ? "loading..." :  "Donetr"}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default FourthStep;









import { useAddDocument } from "@/app/hooks/useAddDocument";
import { step4Handler } from "@/redux/features/addDocument-slice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const FourthStep: React.FC<{ step: number, changeHandler: any }> = ({ step, changeHandler }) => {
    const { step1, step2, step3, step4, dispatch } = useAddDocument();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const channelarray = [
        { name: "private", id: 1 },
        { name: "public", id: 2 },
    ];
    // const { type } = step1;
    const type  = 'attachment';
    const { file } = step3;
    const { title, firstName, lastName, description } = step2;

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("itemTitle", title);
    formData.append("note", description);
    formData.append("itemType", type);
    if (file) {
        formData.append("file", file);
    }

    console.log(type, 'this is my type')
    console.log(formData, 'step2')

    // console.log({ firstName, lastName, title, file, type }, 'allSteps');
    // console.log(process.env.NEXT_PUBLIC_ZOTERO_POST_FILES_URL, 'zotro post file');

    const { push } = useRouter();
    const [value, setValue] = useState(step4);

    const url = `${process.env.NEXT_PUBLIC_ZOTERO_POST_FILES_URL}/api/files/upload`;

    const uploadFile = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ZOTERO_POST_FILES_URL}`
                }
            });
    
            setIsLoading(false);
            if (response.status !== 200) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // if(response.status == 500) {
            //     toast.error('This file already exist, please upload a different file');
            // }

            // console.log('File uploaded successfully:', response);
            toast.success('File uploaded successfully!');
            const result = response.data;
            push('/en')
        } catch (error: any) {
            setIsLoading(false);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server error:', error.response.data);
                setErrorMessage(error.response.data.error || 'An error occurred during file upload');
                toast.error(error.response.data.error || 'An error occurred during file upload');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response from server:', error.request);
                setErrorMessage('No response from server');
                toast.error('No response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Request setup error:', error.message);
                setErrorMessage('Request setup error');
                toast.error('Request setup error');
            }
        }
    };
    

    console.log(!!errorMessage, 'errorMessage')
    

    return (
        <div>
            <Toaster />
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
                        uploadFile();
                    //   {  !errorMessage 
                    //         changeHandler("add")
                    //         dispatch(step4Handler(value))
                    //         push('/en')}

                        
                    }}
                    className={`bg-mainColor ${
                        value == "" ? "opacity-60" : "opacity-100"
                        } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
                >
                    {isLoading ? "loading..." : "Done"}
                </button>
            </div>
        </div>
    );
};

export default FourthStep;


