'use client';
import React from 'react';
import FirstStep from './first-step/FirstStep';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import LogoForm from '../../../../../public/icons/logoForm.svg';
import SecondStep from './second-step/SecondStep';

const Onboarding = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  return (
    <div>
      <h1 className="font-bold flex text-3xl mb-12">
        Welcome <h2 className="font-bold ml-2 text-primaryColor">John Doe</h2>
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