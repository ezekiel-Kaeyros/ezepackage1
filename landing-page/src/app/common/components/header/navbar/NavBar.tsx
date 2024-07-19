'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../../../../../public/logo.svg';
import { Button } from '../../button/Button';
import HamburgerMenuIcon from '../../../../../../public/icons/hamburgerMenuIcon.svg';
import CloseIcon from '../../../../../../public/icons/closeIcon.svg';
import LocaleSwitcher from '../locale-switcher/locale-switcher';
import AnimateClick from '../../animate-click/AnimateClick';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { getUserCookies } from '@/cookies/cookies';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import config from '@/utils/config';
import logoutIcon from '../../../../../../public/icons/logout.svg';
import cookies from 'js-cookie';
import { Cookies } from '@/utils';


type NavBarProps = {
  lang: string;
  navigation: any;
};
const COMMUNITIES_URL = config.communitiesUrl

const NavBar: React.FC<NavBarProps> = ({ lang, navigation }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { token } = useAuth();

  let domNode = useClickOutside(() => {
    setToggleMenu(true);
  });

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const returnUrl = window.location.href + '/onboarding';
      window.location.href = `${config.ssoLoginUrl}?module=${encodeURIComponent(returnUrl)}`;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleVisitLibrary = async () => {
    try {
      const returnUrl = window.location.href + `${config.livingLibraryUrl}/en/`;
      window.location.href = `${config.ssoLoginUrl}?module=${encodeURIComponent(returnUrl)}`;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const tokenExists = cookies.get(Cookies.Token) !== undefined;
  const userDataExists = cookies.get(Cookies.User_data) !== undefined;

  const logout = async () => {
    try {
      if (process.env.NODE_ENV == 'development') {
        cookies.remove(Cookies.Token);
        cookies.remove(Cookies.User_data);
      } else {
        cookies.remove(Cookies.Token, { domain: '.eze.ink' })
        cookies.remove(Cookies.User_data, { domain: '.eze.ink' })
      }
      // closeDropDown();
      window.location.href = config.ssoLogoutUrl
    } catch (error) {
      console.log('An error occurred while logging out: ', error);
    }
  };

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
            {token ? (
              <Link href={`${COMMUNITIES_URL}`}>{navigation.comunity}</Link>
            ) : (
              <Link href="#" onClick={handleLogin}>
                {navigation.comunity}
              </Link>
            )}
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            <Link href={`${config.kashAppAuthUrl}`}> {navigation.online}</Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            {token ? (
              <Link href={`${config.livingLibraryUrl}`}>
                {navigation.library}
              </Link>
            ) : (
              <Link href="#" onClick={handleLogin}>
                {navigation.library}
              </Link>
            )}
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            <Link href="#"> {navigation.fuding}</Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-2">
            <Link href="#"> {navigation.events}</Link>
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-4">
            {token ? (
              <Button href={`${COMMUNITIES_URL}`} className="w-fit py-3">
                {navigation.dash}
              </Button>
            ) : (
              // <Button href={`/${lang}/login`} className="w-fit py-3">
              //   {navigation.btn}
              // </Button>
              <Button className="w-fit py-3" onClick={handleLogin}>
                {navigation.btn}
              </Button>
            )}
          </li>
          <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-4">
            <LocaleSwitcher />
          </li>
          {tokenExists && <li className="border-t-1 hover:text-primaryColor lg:border-none px-6 lg:px-3 2xl:px-6  pt-4 lg:pt-0 pb-4">
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
