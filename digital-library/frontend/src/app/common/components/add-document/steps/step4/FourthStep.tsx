import { useAddDocument } from "@/app/hooks/useAddDocument";
import { step4Handler } from "@/redux/features/addDocument-slice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { removeUserCookies } from "@/cookies/cookies";
import { Modal, ModalBody, ModalHeader } from "@nextui-org/react";
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import CustomModal from "../../../modal/Modal";
import CustomModal02 from "../../../modal/modal02";
import InputField from "../../../InputField/input";
import { Button } from "../../../button/Button";
import AnimateClick from "../../../animateClick/AnimateClick";
import warning from '../../../../../../../public/icons/warning.svg';
import Image from "next/image";
import { getUserCookies } from "@/cookies/cookies";
import { ResearchIcon, FoodIcon, RecordsIcon, HealthIcon, CanceledEyeIcon } from "../stepIcons/step1Icons";
import config from "@/utils/config";

interface FourthFromValueProps {
  price: string;
}

const FourthStep: React.FC<{ step: number, changeHandler: any }> = ({ step, changeHandler }) => {
  const { step1, step2, step3, step4, dispatch } = useAddDocument();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const userCredentials = getUserCookies()


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FourthFromValueProps>();

  let price: string = watch(
    'price'
  );


  const channelarray = [
    { name: "private", id: 1 },
    { name: "public", id: 2 },
  ];

  const ChannelIconMapping = {
    private: CanceledEyeIcon,
    public: ResearchIcon,
  } as any;


  const type = 'attachment';
  const { file } = step3;
  const { title, firstName, lastName, description, coverImage } = step2;
  const { categorie } = step1;

  const activeBorderColor = "#015e44";

  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("itemTitle", title);
  formData.append("note", description);
  formData.append("itemType", type);
  formData.append("coverImage", coverImage);
  formData.append("price", price?.toString());
  formData.append("email", userCredentials?.email);
  formData.append("category", categorie)
  if (file) {
    formData.append("file", file);
  }
  const router = useRouter();
  const [value, setFourthValue] = useState(step4);
  const [isOpen, setIsOpen] = useState<boolean>(false)


  const url = `${config.ssoUrl}/api/files/upload`;

  const uploadFile = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ZOTERO_API_KEY}`
        }
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      toast.success('File uploaded successfully!');
      removeUserCookies();
      setIsLoading(false);
      reset();
      dispatch(step4Handler(value));
      
      window.location.href = `/digital-library/${response.data.itemKey}`;
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


  return (
    <div>
      <CustomModal02 isOpen={isOpen} onClose={() => setIsOpen(false)} position={'center'}>
        <div className="flex flex-col gap-y-5">
          <div>
            <h1>Publish</h1>
            <p>Publish Your Document to the public</p>
          </div>
          <div>
            <InputField
              name="price"
              type="number"
              props={register('price', {
                required: 'Price is required',
                minLength: { value: 3, message: 'Minimum length is 3' },
                validate: (value: any) => !isNaN(value) || 'Only numbers are allowed',
              })}
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
          </div>
          <div className="flex gap-x-2">
            <Image src={warning} alt="warning" className="w-16" />
            <small className="text-red-600">The price associated to the document wil be the one entered plus a 2% rate taken by the eze community, you will be motified when your file is available online</small>
          </div>
          <div>
            <AnimateClick>
              <Button
                className={`bg-mainColor w-fit rounded-lg float-right ${isLoading || price?.length <= 3 || price == undefined ? 'opacity-50' : ''}`}
                disabled={isLoading || price?.length <= 3 || price == undefined}
                type="submit" onClick={() => uploadFile()}>
                <h1>{isLoading ? 'Loading...' : "Send for Review"}</h1>
              </Button>
            </AnimateClick>
          </div>
        </div>
      </CustomModal02>
      <Toaster />
      <h1>Settings</h1>
      <p className="text-xs">Document</p>
      <p className="text-sm mt-5">Science Category :</p>

      <div className="flex gap-5 items-center overflow-auto w-full border">
        {channelarray.map((item) => {
          const isActive = item.name === value;
          const borderColor = isActive ? activeBorderColor : "black";
          const borderStyle = isActive ? "3px solid" : "1px solid";
          const IconComponent = ChannelIconMapping[item.name];
          return (
            <div
              onClick={() => {
                if (value == item.name) {
                  setFourthValue("");
                } else {
                  setFourthValue(item.name);
                }
              }}
              style={{ border: `${borderStyle} ${borderColor}` }}
              className="h-[90px] w-[90px] lg:px-0 px-6 items-center justify-center rounded-xl text-xs text-center cursor-pointer flex gap-y-2 flex-col"
              key={item.name}
            >
              {IconComponent && <IconComponent isActive={borderColor} />}
              {item.name}
            </div>
          )
        })}
      </div>

      <div className="flex justify-end gap-5 items-center">
        <button
          type="button"
          onClick={() => {
            changeHandler("back");
          }}
          className={`px-4 py-2 font-bold text-black text-sm flex justify-center items-center rounded-full mt-10`}
        >
          Back
        </button>
        <button
          type="button"
          disabled={value == "" || isLoading}
          onClick={() => setIsOpen(true)}
          className={`bg-mainColor ${value == "" ? "opacity-60" : "opacity-100"
            } px-4 py-2 font-bold text-white text-sm flex justify-center items-center rounded-full mt-10`}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default FourthStep;
