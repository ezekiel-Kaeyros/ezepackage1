'use client';
import React, { ReactNode } from 'react';
import LoginHeader from '../components/login-header/LoginHeader';
import LoginFooter from '../components/login-footer/LoginFooter';
import Image from 'next/image';

import LoginFrame from '../../../../public/icons/LoginFrame.svg';
import LogoFormIcon from '../../../../public/icons/logoFormIcon.svg';

const LoginSignupLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="xl:flex px-4 sm:px-16 md:px-32 lg:px-64 xl:px-0 xl:fixed w-full h-full">
      <div className=" w-full  xl:w-6/12 p-8">
        <LoginHeader />
        <div className="my-12 xl:overflow-y-scroll 2xl:overflow-hidden h-[80vh] pb-16 pr-8">
          {children}
        </div>

        <LoginFooter />
      </div>
      <div className="w-full relative bg-gray-200">
        <Image
          className="h-screen hidden xl:block absolute w-screen"
          src={LoginFrame}
          alt="Login frame"
        />
        <div className="relative hidden xl:flex top-1/2 mx-auto pr-6  max-w-xs text-center  justify-center flex-col items-center left-0">
          <h1 className="font-bold">Connected Community</h1>
          <p className="text-sm mt-2">
            Our mission is to bridge the gap between different sectors of
            scientific researchers.
          </p>
          <Image className="mt-4" src={LogoFormIcon} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignupLayout;
