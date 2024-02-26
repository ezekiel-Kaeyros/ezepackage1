import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '../../../../../public/logo.svg';
import LocaleSwitcher from '../header/locale-switcher/locale-switcher';
const LoginHeader = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <Link href="/">
        <Image src={Logo} alt="Logo" />
        <p className="opacity-80 mt-2 text-sm">Welcome to our community</p>
      </Link>

      <div>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default LoginHeader;
