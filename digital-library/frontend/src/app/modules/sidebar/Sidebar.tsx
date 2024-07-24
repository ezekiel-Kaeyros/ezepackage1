'use client';

import React, { FC, useEffect, useState } from 'react';


import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';
import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';



import logo from '../../../../public/icons/Logo.svg'
import logoNew from "../../../../public/icons/Frame 423.svg";
import logo2 from "../../../../public/icons/community-link1.svg";
import logo21 from "../../../../public/icons/community-link1 copy.svg";
import logo3 from "../../../../public/icons/community-link (1).svg";
import logo4 from "../../../../public/icons/community-link (2).svg";
import logo5 from "../../../../public/icons/community-frame.svg";
import logo31 from "../../../../public/icons/community-link (1)1.svg";
import logo41 from "../../../../public/icons/community-link (2)1.svg";
import logo51 from "../../../../public/icons/add1.svg";
import coloredOwned from '../../../../public/icons/coloredOwned.svg';
import uncoloredOwned from '../../../../public/icons/uncoloredOwned.svg';
import bookmarksUncolored from '../../../../public/icons/bookmarkUncolored.svg';
import bookmarkscolored from '../../../../public/icons/bookmarkcolored.svg';

import Image from "next/image";
import Link from "next/link";
import { toggleFunc, toggleSideBarFunc2 } from "@/redux/features/auth-slice";
import config from '@/utils/config';
type SidebarProps = {
  lang: string;
  sidebar: {
    sendTransfer: string;
    history: string;
    dashboard: string;
    manageUser: string;
    settings: string;
  };
};

const Sidebar: FC<SidebarProps> = ({ lang, sidebar }) => {
  const pathName = usePathname();
  // const { user } = useAuth();
  const { push } = useRouter();
  const [user1, setUser1] = useState("");
  const [view, setView] = useState(true);
  const [display, setDisplay] = useState(true);
  const { isSidebarToggled, dispatch, isToggled } = useToggleSidebar();
  const [show, setShow] = useState(false);
  //  const id: any = localStorage.getItem('code');

  // const pathname=usep

  return (
    <div
      className={`flex duration-300 flex-shrink-0 ease-linear sm:translate-x-0 flex-col justify-start   sm:relative fixed  z-[200] bg-white border h-screen border-r-1 sm:pt-4 pt-1  text-xs font-bold ${!isSidebarToggled
          ? "sm:translate-x-0 -translate-x-full"
          : "translate-x-0"
        }
      
      ${isToggled
          ? "lg:items-start sm:items-center sm:!w-[15vw] !w-fit "
          : "sm:items-center sm:!w-[7vw] !w-fit "
        }  `}
    >
      <div className="md:pl-2 sm:pl-0 pl-4 sm:block flex justify-between">
        <Link href={`${config.landingPageUrl}`}>
          <Image
            src={logoNew}
            alt=""
            // onClick={() => setView((view) => !view)}
            className={` ${isToggled ? "lg:block sm:hidden" : "sm:hidden"}`}
          />
          <Image
            src={logo}
            alt=""
            // onClick={() => setView((view) => !view)}
            className={` ${isToggled ? "lg:hidden sm:block hidden" : "sm:block hidden"
              }`}
          />
        </Link>

        <span
          className="sm:hidden font-semibold text-5xl p-3 cursor-pointer"
          onClick={() => dispatch(toggleFunc())}
        >
         <small>x</small>
        </span>
      </div>
      <div className="mt-14 flex flex-col gap-6 w-full ">
      <Link
          href={"/digital-library"}
          className={`w-full md:p-2 sm:pl-0 pl-4 ${
            pathName.includes("digital-library") && "bg-[#daeeda]"
          }`}
        >
          {" "}
          <div className="flex items-center gap-2">
            <Image
              src={
                pathName.includes("digital-library") 
                  ? logo2
                  : logo21
              }
              alt=""
              className={`${isToggled ? "lg:m-0 sm:m-auto m-0" : "sm:m-auto m-0"
                }`}
            />
            <p
              className={`${isToggled ? "lg:block sm:hidden" : "sm:hidden"}`}
            >
              Digital Library
            </p>
          </div>
        </Link>
        <Link
          href={"/en/"}
          className={`w-full md:p-2 sm:pl-0 pl-4 ${
            !pathName.includes("digital-library") &&
            !pathName.includes("bookmarks") &&
            !pathName.includes("owned") &&
            !pathName.includes("add-document") &&
            "bg-[#daeeda]"
            }`}
        >
          {" "}
          <div className={`flex items-center gap-2 `}>
            <Image
              src={
                !pathName.includes("digital-library") &&
                !pathName.includes("owned") &&
                !pathName.includes("bookmarks") &&
                !pathName.includes("create") &&
                !pathName.includes("add-document")
                ? logo3 : logo31}
              alt=""
              className={`${isToggled ? "lg:m-0 sm:m-auto m-0" : "sm:m-auto m-0"
                }`}
            />
            <p
              className={`${isToggled ? "lg:block sm:hidden" : "sm:hidden"}   `}
            >
              My Library
            </p>
          </div>
        </Link>
        <Link
          href={"/bookmarks"}
          className={`w-full md:p-2 sm:pl-0 pl-4 ${
            pathName.includes("bookmarks") && "bg-[#daeeda]"
          }`}
        >
          <div className="flex items-center gap-2">
            <Image
              src={pathName.includes("bookmarks") ? bookmarkscolored : bookmarksUncolored}
              alt=""
              className={`${isToggled ? "lg:m-0 sm:m-auto m-0" : "sm:m-auto m-0"
                }`}
            />
            <p
              className={`${isToggled ? "lg:block sm:hidden" : "sm:hidden"}   `}
            >
              Bookmarks
            </p>
          </div>
        </Link>
        <Link
          href={"/owned"}
          className={`w-full md:p-2 sm:pl-0 pl-4 ${
            pathName.includes("owned") && "bg-[#daeeda]"
          }`}
        >
          <div className="flex items-center gap-2">
            <Image
              src={pathName.includes("owned") ? coloredOwned : uncoloredOwned}
              alt=""
              className={`${
                isToggled ? "lg:m-0 sm:m-auto m-0" : "sm:m-auto m-0"
              }`}
            />
            <p
              className={`${isToggled ? "lg:block sm:hidden" : "sm:hidden"}   `}
            >
              Owned
            </p>
          </div>
        </Link>
        <Link
          href={"/en/add-document"}
          className={`w-full md:p-2 sm:pl-0 pl-4 mt-8 flex items-center gap-2 ${pathName.includes("add-document") && "bg-[#daeeda]"
            }`}
        >
          {" "}
          <Image
            src={pathName.includes("add-document") ? logo5 : logo51}
            alt=""
            className={`${isToggled ? "lg:m-0 sm:m-auto m-0" : "sm:m-auto m-0"
              }`}
          />
          <p className={`${isToggled ? "lg:block sm:hidden" : "sm:hidden"}   `}>
            Create file
          </p>
        </Link>
        {/* <Link
          href={"add-document"}
          className="flex items-center gap-2 pl-2"
        ></Link> */}
      </div>
      <div
        className="flex-grow  w-full cursor-pointer"
        onClick={() => dispatch(toggleSideBarFunc2())}
      ></div>
    </div>
  );
};

export default Sidebar;
