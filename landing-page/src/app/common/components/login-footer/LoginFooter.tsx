import Image from 'next/image';
import React from 'react';

import SCHLogo from '../../../../../public/images/schLogo.png';
import IFYARLogo from '../../../../../public/images/ifyarLogo.png';

const LoginFooter = () => {
  return (
    <div className="relative ">
      <h1 className="opacity-70">Partenaires de coopération</h1>
      <div className="flex space-x-4">
        <Image src={SCHLogo} alt="SCH logo" />
        <Image src={IFYARLogo} alt="SCH logo" />
      </div>
    </div>
  );
};

export default LoginFooter;
