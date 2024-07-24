'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../../../../../public/logo.svg';
import { Button } from '../../button/Button';
import HamburgerMenuIcon from '../../../../../../public/icons/hamburgerMenuIcon.svg';
import CloseIcon from '../../../../../../public/icons/closeIcon.svg';
import LocaleSwitcher from '../locale-switcher/locale-switcher';
import AnimateClick from '../../animate-click/AnimateClick';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import config from '@/utils/config';
import logoutIcon from '../../../../../../public/icons/logout.svg';


type NavBarProps = {
  lang: string;
  navigation: any;
};

const NavBar: React.FC<NavBarProps> = ({ lang, navigation }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { user } = useAuth<{ email: string }>();

  let domNode = useClickOutside(() => {
    setToggleMenu(true);
  });

  const router = useRouter();

  const handleLogin = async () => {
    try {
      // const returnUrl = window.location.href + '/onboarding';
      window.location.href = `${config.ssoUrl}/auth/login`;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const logout = async () => {
    try {
      window.location.href = `${config.ssoUrl}/auth/logout`
    } catch (error) {
      console.error('An error occurred while logging out: ', error);
    }
  };

  useEffect(() => {
    user && console.log("Authenticated")
  }, [user])

  return (
    <nav
      ref={domNode}
      className="w-[100vw]  top-0 shadow-sm py-2 px-4 lg:px-8 lg:fixed z-50 sticky flex justify-between items-center bg-white "
    >
      <Link href="/">
        <Image className="w-24" src={Logo} alt="Logo" />
      </Link>

      <div
        className={`absolute lg:w-fit lg:relative  top-0 ${toggleMenu
          ? '-right-[100%] hidden lg:right-0 lg:block transition-all ease-soft-spring 2s'
          : 'right-0 transition-all ease-soft-spring 2s'
          }  h-screen lg:h-fit transition-all ease-soft-spring 2s  bg-white shadow-lg lg:shadow-none lg:ml-auto w-[16rem] lg:w-fit`}
      >
        {/* Close icon */}

        <div
          onClick={() => setToggleMenu(true)}
          className="rounded-md cursor-pointer lg:hidden w-10 h-10 m-4 border  ml-auto p-2 border-slate-400"
        >
          <AnimateClick>
            <Image className="" src={CloseIcon} alt="close icon" />
          </AnimateClick>
        </div>

        <ul
          ref={domNode}
          className="flex flex-col lg:flex-row space-y-3 lg:w-fit lg:space-y-0 lg:items-center  pt-2"
        >
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6 pt-4 lg:pt-0 pb-2">
            <Link href={config.communitiesUrl} onClick={handleLogin}>
              {navigation.comunity}
            </Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            <Link href={`${config.kashAppAuthUrl}`}> {navigation.online}</Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            <Link href={`${config.livingLibraryUrl}`}>
              {navigation.library}
            </Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            <Link href="#"> {navigation.fuding}</Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            <Link href="#"> {navigation.events}</Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-4">
            {user ? (
              <Button href={`${config.communitiesUrl}`} className="w-fit py-3">
                {navigation.dash}
              </Button>
            ) : (
              <Button className="w-fit py-3" onClick={handleLogin}>
                {navigation.btn}
              </Button>
            )}
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-4">
            <LocaleSwitcher />
          </li>
          {user && <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-4">
            <Image src={logoutIcon} alt="" className='w-5 cursor-pointer' onClick={logout} />
          </li>}
        </ul>
      </div>

      {/* Menu icon (mobile only) */}
      <div>
        <Image
          className="w-10 cursor-pointer lg:hidden"
          onClick={() => setToggleMenu((prev) => !prev)}
          src={HamburgerMenuIcon}
          alt="Hamburger menu"
        />
      </div>
    </nav>
  );
};

export default NavBar;
