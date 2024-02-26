'use client';

import InputField from '../text-field/InputField';
import EmailIcon from '../../../../../../public/icons/mailIcon.svg';
import PasswordIcon from '../../../../../../public/icons/password-check.svg';
import GoogleIcon from '../../../../../../public/icons/googleIcon.svg';
import { Button } from '../../button/Button';
import { LoginFormValues } from './loginForm';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Spinner } from '@nextui-org/react';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormValues>({ mode: 'onChange' || 'onBlur' || 'onSubmit' });

  //   // Triggers when submitting

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {};

  return (
    <div className="w-full">
      {/* <div className="w-full p-4 text-red-400 text-center border bg-divDark border-red-200 rounded-lg my-4">
        Login failed
      </div> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  w-full  mx-auto dark:text-white justify-center"
      >
        <h1 className="font-bold text-xl lg:text-3xl text-center mb-4">
          Login
        </h1>
        <div>
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
          {errors.email && (
            <p className="text-red-700 ml-6 text-xs">
              Enter a valid email address
            </p>
          )}
          <div>
            <InputField
              icon={PasswordIcon}
              register={register('password', { required: true, minLength: 4 })}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <p className="my-2 opacity-80">Forgot password ?</p>
        </div>
        <div className="mt-4 w-full flex flex-col items-center space-y-4 justify-center">
          <Button
            href="/fr/onboarding?step=1"
            disabled={isLoading ? true : false}
            variant={!isValid || isLoading ? 'disabled' : 'default'}
            className="w-full"
          >
            {isLoading ? <Spinner size="sm" color="white" /> : <>Connexion</>}
          </Button>

          <h1 className="font-bold opacity-50">OR</h1>

          <Button
            variant="outline"
            className="flex items-center justify-center"
            icon={GoogleIcon}
          >
            Login with Google
          </Button>
        </div>
        <div className="mt-4">
          <h1 className="flex justify-center items-center space-x-2">
            <h3>{" You don't have an account ?"}</h3>
            <Link className="font-bold" href="/signup">
              Signup
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
