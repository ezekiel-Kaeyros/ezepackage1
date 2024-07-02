'use client';

import React, { FC, useEffect, useState } from 'react';


import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';
import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';



import logo from '../../../../public/icons/Logo.svg'
import logo2 from "../../../../public/icons/community-link.svg";
import logo3 from "../../../../public/icons/community-link (1).svg";
import logo4 from "../../../../public/icons/community-link (2).svg";
import logo5 from "../../../../public/icons/community-frame.svg";


import Image from 'next/image';
import Link from 'next/link';
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
  const [user1, setUser1] = useState('');
   const [view, setView] = useState(false);
  const { isSidebarToggled, dispatch } = useToggleSidebar();
  const [show, setShow]=useState(false)
  //  const id: any = localStorage.getItem('code');

// const pathname=usep


 


  return (
    <div
      className={`flex flex-col justify-start md:items-start items-center w-full  h-screen border-r-1 sm:pt-4 pt-1  text-xs font-bold`}
    >
      <div className="md:pl-2">
        <a href={`${process.env.NEXT_PUBLIC_ZOTERO_HOME_URL}/en/`}>
          <Image
            src={logo}
            alt=""
            onClick={() => setView((view) => !view)}
            className=""
          />
        </a>
      </div>
      <div className="mt-14 flex flex-col gap-5 w-full ">
        <Link
          href={"/en/"}
          className={`w-full md:p-2 ${
            !pathName.includes("/en/digital-library") &&
            !pathName.includes("/en/settings") &&
            !pathName.includes("/en/create") &&
            !pathName.includes("/en/add-document") &&
            "bg-[#daeeda]"
          }`}
        >
          {" "}
          <div className="flex items-center gap-2">
            <Image src={logo2} alt="" className={``} />
            <p className={`md:block hidden`}>My Document</p>
          </div>
        </Link>
        <Link
          href={"/en/digital-library"}
          className={`w-full md:p-2 ${
            pathName.includes("digital-library") && "bg-[#daeeda]"
          }`}
        >
          {" "}
          <div className={`flex items-center gap-2 `}>
            <Image src={logo3} alt="" className={``} />
            <p className={`md:block hidden`}>Digital Library</p>
          </div>
        </Link>
        <Link
          href={"/en/settings"}
          className={`w-full md:p-2 ${
            pathName.includes("setting") && "bg-[#daeeda]"
          }`}
        >
          <div className="flex items-center gap-2">
            <Image src={logo4} alt="" className={``} />
            <p className={`lg:block hidden`}>Setting</p>
          </div>
        </Link>
        <Link
          href={"/en/add-document"}
          className={`w-full md:p-2 mt-14 flex items-center gap-2 ${
            pathName.includes("add-document") && "bg-[#daeeda]"
          }`}
        >
          {" "}
          <Image src={logo5} alt="" className={``} />
          <p className={`lg:block hidden`}>Create file</p>
        </Link>
        {/* <Link
          href={"add-document"}
          className="flex items-center gap-2 pl-2"
        ></Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
