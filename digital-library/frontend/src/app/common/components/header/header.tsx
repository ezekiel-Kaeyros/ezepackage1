'use client'
import { FC, useState } from 'react';
import NavBar from './navbar/NavBar';
import Image from 'next/image';
import notIcon from "../../../../../public/images/notification-bing.svg"
import msgIcon from "../../../../../public/images/messages.svg";
import userIcon from "../../../../../public/images/Ellipse 1.svg";
import arrowIcon from "../../../../../public/images/arrow-down (1).svg";
import search from "../../../../../public/images/search-normal (2).svg";
import peopleIcon from "../../../../../public/images/people.svg";
import user from "../../../../../public/images/tag-user.svg";
import userSquar from "../../../../../public/images/user-square (1).svg";
import home from "../../../../../public/images/home-2.svg";
import note from "../../../../../public/images/note-2.svg";
import libraryIcon from "../../../../../public/icons/community-link (1).svg";
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  lang: string;
  navigation: any;
};

const Header: FC<NavbarProps> = ({ lang, navigation }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [view, setView] = useState(false)
  const pathName = usePathname();
  
  return (
    <div className="w-full border md:h-24 h-[66px] bg-white px-3 flex justify-between items-center overflow-hidden">
      <div
        className={`${
          !view ? "w-14" : "w-[29%]"
        } h-14 relative border rounded-full bg-[#E9ECEF] cursor-pointer`}
        onClick={() => setView(true)}
      >
        <input
          type="text"
          className={`w-full h-full pl-12 bg-transparent border rounded-full ${
            !view ? "hidden" : "block"
          }`}
          placeholder={view ? "Search..." : ""}
          autoFocus={true}
          onBlur={() => setView(false)}
        />
        <Image
          src={search}
          alt=""
          className="absolute h-7 w-7 top-[14px] left-3"
        />
      </div>

      <div className="xl:w-[65%]  w-[70%] flex justify-between gap-5">
        <div className="flex xl:gap-8 gap-5è">
          <Link
            href={"/"}
            className={`pb-2 hover:border-b-3 ${
              !pathName.includes("digital-library") &&
              !pathName.includes("settings") &&
              !pathName.includes("create") &&
              "border-b-3 border-[#015E44]"
            }`}
          >
            {" "}
            <Image src={home} alt="" className="" />
          </Link>
          <Link href={"#"} className={`pb-2 hover:border-b-3 `}>
            <Image
              src={userSquar}
              alt=""
              // className="hover:border-b-3 border-[#015E44] pb-3"
            />
          </Link>
          <Link href={"#"} className={`pb-2 hover:border-b-3 `}>
            {" "}
            <Image
              src={peopleIcon}
              alt=""
              // className="hover:border-b-3 border-[#015E44] pb-3"
            />
          </Link>
          <Link href={"#"} className={`pb-2 hover:border-b-3 `}>
            <Image
              src={user}
              alt=""
              // className="hover:border-b-3 border-[#015E44] pb-3"
            />
          </Link>
          <Link href={"#"} className={`pb-2 hover:border-b-3 `}>
            {" "}
            <Image
              src={note}
              alt=""
              // className="hover:border-b-3 border-[#015E44] pb-2"
            />
          </Link>

          <Link
            href={"digital-library"}
            className={`pb-2 hover:border-b-3 ${
              pathName.includes("digital-library") &&
              "border-b-3 border-[#015E44] "
            }`}
          >
            {" "}
            <Image src={libraryIcon} alt="" className="" />
          </Link>
        </div>
        <div className="flex gap-5 pb-3">
          <Button className="flex justify-center items-center bg-[#015E44] text-white px-4 py-1 rounded-full lg:mr-5">
            <span>Create</span>
            <Image src={arrowIcon} alt="" />
          </Button>
          <Image src={notIcon} alt="" />
          <Image src={msgIcon} alt="" />
          <Image src={userIcon} alt="" />
        </div>
      </div>

      {/* <NavBar lang={lang} navigation={navigation} /> */}
    </div>
  );
};

export default Header;
