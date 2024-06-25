"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Spinner } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import TableSelect from "./table-select/tableSelect";
import InputField from "@/app/common/ui/forms/text-field/InputField";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import axios from "axios";

interface LoginFormValues {
  name: string;
  encryptionTechnique: string;
  secretKey: string;
  url: {
    baseUrl: string;
    loginRedirectUrl: string;
    signupRedirectUrl: string;
    forgotPasswordRedirectUrl: string;
  };
}

interface EncryptionNames {
  name: string;
  __v: number;
  _id: string;
}

const CreateModuleForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmittingData, setIsSubmittingData] = useState<boolean>(false);
  const [Encryptiondata, setEncryptionData] = useState<EncryptionNames[]>([]);

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange" || "onBlur" || "onSubmit",
  });

  // fetch all the users here.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/encryption-techniques"
        );
        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Failed to fetch data");
        }
        if (response.ok) {
          const result = await response.json();
          setEncryptionData(result);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onSubmit: SubmitHandler<LoginFormValues> = async (
    data: LoginFormValues
  ) => {
    console.log(data, "applicationData");

    const rsa = {
      ...data,
      encryptionTechnique: Encryptiondata[0]._id,
    };
    console.log(rsa, "this is my rsa");
    setIsSubmittingData(true);
    try {
      const response = await axios.post(
        "http://localhost:1337/applications/",
        rsa
      );

      console.log(response, "response");
      if (response.status !== 201) {
        toast.error("Please check your data and try again");
        setIsSubmittingData(false);
      }

      if (response.status === 201) {
        toast.success("Applicaton Created Successfully");
        setIsSubmittingData(false);
        push("/dashboard/module-detail/9");
        reset();
      }
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      setIsSubmittingData(false);
      toast.error("Please check your data and try again");
      console.error("Error sending data:", error);
    }
  };

  const options = ["Admin", "Viewer", "Cleaner", "Risk-manager"];

  return (
    <div className="bg-black h-full">
      {/* <div className="w-full p-4 text-red-400 text-center border bg-cardDark border-red-200 rounded-lg my-4">
        Login failed
      </div> */}
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="h-full">
          <div className="h-fit py-5 px-16">
            <div className="text-white">
              <h1 className="font-bold text-2xl lg:text-2xl mb-10">
                Create A Module
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              <div>
                <InputField
                  // icon={EmailIcon}
                  title="Name"
                  name="name"
                  register={register("name", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 characters long",
                    },
                  })}
                  type="text"
                  placeholder="name"
                />
                {errors.name && (
                  <p className="font-bold text-red-700">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <InputField
                  // icon={PasswordIcon}
                  title="secretKey"
                  register={register("secretKey", {
                    required: true,
                  })}
                  type="secretKey"
                  name="text"
                  placeholder="secretKey"
                />
              </div>
              <div>
                <InputField
                  title="Base Url"
                  register={register("url.baseUrl", {
                    required: true,
                    // minLength: {
                    //   value: 6,
                    //   message: "Password must be at least 6 characters long",
                    // },
                    // pattern: {
                    //   value:
                    //     /^(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_][a-zA-Z0-9\W_]{5,}$/,
                    //   message:
                    //     "Password must contain at least one letter and one special character",
                    // },
                  })}
                  type="text"
                  name="baseUrl"
                  placeholder="baseUrl"
                />
              </div>
              <div>
                <InputField
                  title="Login Redirect"
                  // icon={PasswordIcon}
                  register={register("url.loginRedirectUrl", {
                    required: true,
                  })}
                  type="text"
                  name="loginRedirectUrl"
                  placeholder="loginRedirectUrl"
                />
              </div>
              <div>
                <InputField
                  // icon={PasswordIcon}
                  title="Signup Redirect"
                  register={register("url.signupRedirectUrl", {
                    required: true,
                  })}
                  type="text"
                  name="signupRedirectUrl"
                  placeholder="signupRedirectUrl"
                />
              </div>
              <div>
                <InputField
                  // icon={PasswordIcon}
                  title="Forgotten Password Redurect Url"
                  register={register("url.forgotPasswordRedirectUrl", {
                    required: true,
                  })}
                  type="text"
                  name="forgotPasswordRedirectUrl"
                  placeholder="forgotPasswordRedirectUrl"
                />
              </div>
              <div>
                <TableSelect
                  title="Encryption Technique"
                  options={Encryptiondata}
                  props={register("encryptionTechnique", { required: true })}
                />
              </div>
            </div>
            <div className="mt-5 mb-5 w-full flex justify-end mt-20">
              <Button
                // disabled={!isValid || isLoading ? true : false}
                // disabled={true}
                // variant={!isValid || isLoading ? "disabled" : "default"}
                // variant={'disabled'}
                className="rounded-sm w-fit"
                type="submit"
              >
                {isSubmittingData ? (
                  <Spinner size="sm" color="white" />
                ) : (
                  <h1 className="text-[18px]">Submit</h1>
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateModuleForm;
