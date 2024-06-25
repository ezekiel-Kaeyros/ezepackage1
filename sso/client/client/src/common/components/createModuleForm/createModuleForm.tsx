"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Spinner } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
// import Swivy from "../../../../../../public/icons/swivy.svg";

import InputField from "@/common/ui/forms/text-field/InputField";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";

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

const CreateModuleForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<LoginFormValues>({ mode: "onChange" || "onBlur" || "onSubmit" });

  // http://localhost:4000/login

  // Triggers when submitting

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {};

  return (
    <div className="bg-gray-700">
      {/* <div className="w-full p-4 text-red-400 text-center border bg-cardDark border-red-200 rounded-lg my-4">
        Login failed
      </div> */}
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="h-full">
          <div className="h-full w-full flex items-center">
            <div className="flex justify-between w-full mx-20">
              <div className="px-4 h-fit">
                <div className="text-white">
                  <h1 className="font-bold text-2xl lg:text-2xl mb-2">
                    Create A Module
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    // icon={EmailIcon}
                    name="email"
                    register={register("name", {
                      required: true,
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="name"
                  />
                  <InputField
                    // icon={PasswordIcon}
                    register={register("encryptionTechnique", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_][a-zA-Z0-9\W_]{5,}$/,
                        message:
                          "Password must contain at least one letter and one special character",
                      },
                    })}
                    type="password"
                    name="password"
                    placeholder="encryptionTechnique"
                  />
                  <InputField
                    // icon={PasswordIcon}
                    register={register("encryptionTechnique", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_][a-zA-Z0-9\W_]{5,}$/,
                        message:
                          "Password must contain at least one letter and one special character",
                      },
                    })}
                    type="password"
                    name="password"
                    placeholder="secretKey"
                  />

                  <InputField
                    // icon={PasswordIcon}
                    register={register("encryptionTechnique", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_][a-zA-Z0-9\W_]{5,}$/,
                        message:
                          "Password must contain at least one letter and one special character",
                      },
                    })}
                    type="password"
                    name="password"
                    placeholder="baseUrl"
                  />
                  <InputField
                    // icon={PasswordIcon}
                    register={register("encryptionTechnique", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_][a-zA-Z0-9\W_]{5,}$/,
                        message:
                          "Password must contain at least one letter and one special character",
                      },
                    })}
                    type="password"
                    name="password"
                    placeholder="loginRedirectUrl"
                  />
                </div>
                <div className="mt-5 mb-5 w-full">
                  <Button
                    disabled={!isValid || isLoading ? true : false}
                    // disabled={true}
                    // variant={!isValid || isLoading ? "disabled" : "default"}
                    // variant={'disabled'}
                    className="w-full rounded-sm"
                  >
                    {isLoading ? (
                      <Spinner size="sm" color="white" />
                    ) : (
                      <h1 className="text-[18px]">Login</h1>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateModuleForm;
