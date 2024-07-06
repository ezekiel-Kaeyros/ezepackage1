'use client';
import React from 'react';
import FirstStep from './first-step/FirstStep';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import LogoForm from '../../../../../public/icons/logoForm.svg';
import SecondStep from './second-step/SecondStep';
import { useAuth } from '@/app/hooks/useAuth';

const Onboarding = () => {
  const searchParams = useSearchParams();
  const { userAuth0, user } = useAuth();
  const step = searchParams.get('step');

  console.log(userAuth0, 'userAuth0');

  return (
    <div>
      <h1 className="font-bold text-2xl lg:text-3xl mb-12 md:space-x-2">
        <span className="block md:inline">Welcome</span>
        <span className="font-bold text-primaryColor text-wrap">{user?.fullName}</span>
      </h1>
      {parseInt(`${step}`) === 1 ? <FirstStep /> : <SecondStep />}

      {/* Form image */}
      <Image
        src={LogoForm}
        className="absolute -z-10 right-0 bottom-0"
        alt="LogoForm"
      />
    </div>
  );
};

export default Onboarding;
