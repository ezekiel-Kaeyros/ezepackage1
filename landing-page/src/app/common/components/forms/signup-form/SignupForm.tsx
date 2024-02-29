'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Spinner } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';

import InputField from '../text-field/InputField';
import EmailIcon from '../../../../../../public/icons/mailIcon.svg';
import ContactIcon from '../../../../../../public/icons/contactIcon.svg';
import UserIcon from '../../../../../../public/icons/loginUserIcon.svg';

import PasswordIcon from '../../../../../../public/icons/password-check.svg';
import GoogleIcon from '../../../../../../public/icons/googleIcon.svg';
import { Button } from '../../button/Button';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SignupFormValues } from './signupForm';
import { useAuth } from '@/app/hooks/useAuth';
import { setAuthUser } from '@/redux/features/auth-slice';
import AuthService from '@/services/authService';

// const COMMUNITIES_URL = 'https://communities.eze.wiki/';

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push } = useRouter();

  const { dispatch } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignupFormValues>({ mode: 'onChange' || 'onBlur' || 'onSubmit' });

  // Triggers when submitting

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    // setIsLoading(true);
    try {
      const res = await new AuthService().register(data);

      if (res?.status !== 200) {
        toast.error('Registration failed');
      } else {
        toast.success('Registration completed');

        dispatch(setAuthUser({ user: res?.data }));
        // Redirecting to onboarding
        push('/onboarding?step=1');
      }
    } catch (error: any) {
      console.log(`An error occured`, error);
      toast.error(error?.response?.data);
    }
  };

  return (
    <div className="w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  w-full  mx-auto dark:text-white justify-center"
      >
        <h1 className="font-bold text-xl lg:text-3xl text-center mb-4">
          Signup
        </h1>
        <div>
          <div>
            <InputField
              icon={UserIcon}
              name="fullName"
              register={register('fullName', {
                required: true,
                minLength: 3,
              })}
              type="fullName"
              placeholder="Enter your full name"
            />
          </div>
          {errors?.fullName && (
            <p className="text-sm text-red-700">Full name not valid</p>
          )}
          <div>
            <InputField
              icon={ContactIcon}
              name="contact"
              register={register('contact', {
                required: false,
                pattern: /^6(9|7|6|5|2|8)[0-9]{7}$/,
                maxLength: 9,
                minLength: 9,
              })}
              type="contact"
              placeholder="Enter your contact"
            />
          </div>
          {errors?.contact && (
            <p className="text-sm text-red-700">Contact not valid</p>
          )}
          <div>
            <InputField
              icon={EmailIcon}
              name="email"
              register={register('email', {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              type="email"
              placeholder="E-mail address"
            />
          </div>
          {errors?.email && (
            <p className="text-sm text-red-700">Email not valid</p>
          )}
          <div>
            <InputField
              icon={PasswordIcon}
              register={register('password', { required: true, minLength: 4 })}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <p className="my-2 opacity-80">Forgot password ?</p>
        </div>
        <div className="mt-4 w-full flex flex-col items-center space-y-4 justify-center">
          <Button
            disabled={isLoading ? true : false}
            variant={!isValid || isLoading ? 'disabled' : 'default'}
            className="w-full"
          >
            {isLoading ? <Spinner size="sm" color="white" /> : <>Signup</>}
          </Button>

          <h1 className="font-bold opacity-50">OR</h1>

          <Button
            variant="outline"
            className="flex items-center justify-center"
            icon={GoogleIcon}
          >
            Signup with Google
          </Button>
        </div>
        <div className="mt-4">
          <h1 className="flex justify-center items-center space-x-2">
            <h3>{'Already have an account ?'}</h3>
            <Link className="font-bold" href="/login">
              Login
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
