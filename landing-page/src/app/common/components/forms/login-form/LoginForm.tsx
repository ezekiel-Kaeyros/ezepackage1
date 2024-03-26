'use client';

import InputField from '../text-field/InputField';
import EmailIcon from '../../../../../../public/icons/mailIcon.svg';
import PasswordIcon from '../../../../../../public/icons/password-check.svg';
import GoogleIcon from '../../../../../../public/icons/googleIcon.svg';
import { Button } from '../../button/Button';
import { LoginFormValues } from './loginForm';

import Link from 'next/link';
import { useState } from 'react';
import { Spinner } from '@nextui-org/react';
import AuthService from '@/services/authService';
import { setAuthUser } from '@/redux/features/auth-slice';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { getIsFirstTime } from '@/cookies/cookies';

const COMMUNITIES_URL = 'https://communities.eze.wiki/';

const LoginForm:React.FC<{login:any}> = ({login}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { dispatch } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormValues>({ mode: 'onChange' || 'onBlur' || 'onSubmit' });

  const { push } = useRouter();
  //   // Triggers when submitting

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const isFirstTime = getIsFirstTime();
    try {
      const res = await new AuthService().login(data);

      if (res?.status !== 200) {
        setErrorMessage(res?.data);
      } else {
        dispatch(setAuthUser({ user: res?.data }));
        toast.success('Logged in successfully');
        (isFirstTime && push(COMMUNITIES_URL)) || push('/fr/onboarding?step=1');
      }
    } catch (error: any) {
      console.log(`An error occured`, error);
      toast.error(error.response?.data);
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
          {login.title}
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
              placeholder={login.email}
            />
          </div>
          {errors.email && (
            <p className="text-red-700 ml-6 text-xs">{login.email_error}</p>
          )}
          <div>
            <InputField
              icon={PasswordIcon}
              register={register('password', { required: true, minLength: 4 })}
              type="password"
              name="password"
              placeholder={login.password}
            />
          </div>
          <p className="my-2 opacity-80">{login.forgot}</p>
        </div>
        <div className="mt-4 w-full flex flex-col items-center space-y-4 justify-center">
          <Button
            //href="/fr/onboarding?step=1"
            type="submit"
            disabled={isLoading ? true : false}
            variant={!isValid || isLoading ? 'disabled' : 'default'}
            className="w-full"
          >
            {isLoading ? <Spinner size="sm" color="white" /> : <>{login.btn}</>}
          </Button>

          <h1 className="font-bold opacity-50">{login.choice}</h1>

          <Button
            variant="outline"
            className="flex items-center justify-center"
            icon={GoogleIcon}
          >
            {login.google}
          </Button>
        </div>
        <div className="mt-4">
          <h1 className="flex justify-center items-center space-x-2">
            <h3>{login.question}</h3>
            <Link className="font-bold" href="/signup">
              {login.sign_up}
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
