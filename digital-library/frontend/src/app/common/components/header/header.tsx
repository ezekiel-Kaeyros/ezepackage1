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
import menu from "../../../../../public/icons/burgerMenu.svg";
import libraryIcon from "../../../../../public/icons/community-link (1).svg";
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';
import { toggleFunc } from '@/redux/features/auth-slice';
import config from '@/utils/config';
import logoutIcon from '../../../../../public/icons/logout.svg'
import axios from 'axios';
import cookies from 'js-cookie';
import { Cookies } from '../../../../utils'

type NavbarProps = {
  lang: string;
  navigation: any;
};

const Header: FC<NavbarProps> = ({ lang, navigation }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [view, setView] = useState(false)
  const [view2, setView2] = useState(false);
  const pathName = usePathname();
  const { dispatch } = useToggleSidebar()

  const logout = async () => {
    try {
      // closeDropDown();
      window.location.href = `${config.ssoUrl}/auth/logout`
    } catch (error) {
      console.log('An error occurred while logging out: ', error);
    }
  };

  return (
    <>
      <div className="sm:hidden w-full h-[80px] bg-white flex justify-end items-center pr-2">
        {/* <span className=" p-3 cursor-pointer"> */}
        <Image
          src={menu}
          alt=""
          className=" sm:hidden w-10 h-10"
          onClick={() => dispatch(toggleFunc())}
        />
        {/* </span> */}
      </div>
      <div className="w-full border md:h-[80px] h-[66px] bg-white px-3 sm:flex hidden justify-between items-center overflow-hidden">
        <div
          className={`${!view && !view2 ? "w-14" : "lg:w-[34%] w-[36%]"
            } duration-300 ease-linear h-14 relative border rounded-full bg-[#E9ECEF] cursor-pointer`}
          onMouseEnter={() => setView(true)}
          onClick={() => setView2((preview) => !preview)}
          onMouseLeave={() => setView(false)}
        >
          <input
            type="text"
            className={`w-full h-full pl-12 bg-transparent border rounded-full ${!view && !view2 ? "hidden" : "block"
              }`}
            placeholder={view ? "Search..." : ""}
            autoFocus={true}
          />
          <Image
            src={search}
            alt=""
            className="absolute h-7 w-7 top-[14px] left-3"
          />
        </div>

        <div className="w-[63%]   flex justify-between gap-5">
          <div className="flex xl:gap-8 gap-2 ">
            <Link
              href={"/en/"}
              className={`pb-2 hover:border-b-3 ${!pathName.includes("digital-library") &&
                !pathName.includes("settings") &&
                !pathName.includes("create") &&
                "border-b-3 border-[#015E44]"
                }`}
            >
              {" "}
              <Image src={home} alt="" className="" />
            </Link>
            <Link href={"#"} className={`pb-2 hover:border-b-3  px-2`}>
              <Image
                src={userSquar}
                alt=""
              // className="hover:border-b-3 border-[#015E44] pb-3"
              />
            </Link>
            <Link href={`${config.communitiesUrl}`} className={`pb-2 px-2 hover:border-b-3 `}>
              {" "}
              <Image
                src={peopleIcon}
                alt=""
              // className="hover:border-b-3 border-[#015E44] pb-3"
              />
            </Link>
            <Link href={"#"} className={`pb-2 px-2 hover:border-b-3 `}>
              <Image
                src={user}
                alt=""
              // className="hover:border-b-3 border-[#015E44] pb-3"
              />
            </Link>
            <Link href={"https://kashapp.biz/auth/mo_saml/index.php"} className={`pb-2 px-2 hover:border-b-3 `}>
              {" "}
              <Image
                src={note}
                alt=""
              // className="hover:border-b-3 border-[#015E44] pb-2"
              />
            </Link>

            <Link
              href={"digital-library"}
              className={`pb-2 px-2 hover:border-b-3 ${pathName.includes("digital-library") &&
                "border-b-3 border-[#015E44] "
                }`}
            >
              {" "}
              <Image src={libraryIcon} alt="" className="" />
            </Link>
          </div>
          <div className="flex xl:gap-5 gap-2 pb-3">
            {/* <Button className="flex justify-center items-center bg-[#015E44] text-white px-4 py-1 rounded-full lg:mr-5">
              <span>Create</span>
              <Image src={arrowIcon} alt="" />
            </Button> */}
            <Image src={notIcon} alt="" />
            <Image src={msgIcon} alt="" />
            <Image src={userIcon} alt="" />
            <Image src={logoutIcon} alt="" className='w-5 cursor-pointer' onClick={logout} />
          </div>
        </div>

        {/* <NavBar lang={lang} navigation={navigation} /> */}
      </div>
    </>
  );
};

export default Header;
