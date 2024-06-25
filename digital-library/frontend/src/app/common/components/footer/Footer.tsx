import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/icons/Logo.svg";
import what from "../../../../../public/icons/social-link (3).svg";
import insta from "../../../../../public/icons/social-link (1).svg";
import face from "../../../../../public/icons/social-link.svg";
import twit from "../../../../../public/icons/social-link (2).svg";
import Link from "next/link";

const Footer: React.FC<{ footer: any }> = ({ footer }) => {
  return (
    <footer className="bg-[#E6F0ED] xl:px-10 px-5 w-full pb-10 ">
      <div className="border-b-2 border-[#CCCCCC] justify-between xl:gap-24 gap-10 flex flex-wrap pt-10 pb-3">
        <div className="mb-8 sm:mb-0">
          <Image
            src={Logo}
            alt="image not found"
            className="h-20 cursor-pointer"
          />
        </div>
        <div className="">
          <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
            Visit
          </h1>

          <p className="text-[16px] m-0 cursor-pointer ">Communities</p>
          <p className="text-[16px] m-0 cursor-pointer">Online Courses</p>
          <p className="text-[16px] m-0 cursor-pointer">Library</p>
          <p className="text-[16px] m-0 cursor-pointer">Funding Area</p>
        </div>
        <div className="flex flex-col gap-2 mb-6 sm:mb-0">
          {/* <div className="flex flex-col gap-2 mb-6 sm:mb-0"> */}

          <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
            Communities
          </h1>

          <p className="text-[16px] m-0 cursor-pointer"> Health Sciences</p>
          <p className="text-[16px] m-0 cursor-pointer">Mines</p>
          <p className="text-[16px] m-0 cursor-pointer">ICT</p>
          <p className="text-[16px] m-0 cursor-pointer">Agro-food Sciences</p>
          <p className="text-[16px] m-0 cursor-pointer">Energy</p>
          <p className="text-[16px] m-0 cursor-pointer">Data Analytics</p>
          <p className="text-[16px] m-0 cursor-pointer">Social Sciences</p>
        </div>
        <div className="flex flex-col gap-2 mb-6 sm:mb-0">
          <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
            Online Courses
          </h1>

          <p className="text-[16px] m-0 cursor-pointer">Health Sciences</p>
          <p className="text-[16px] m-0 cursor-pointer">Mines</p>
          <p className="text-[16px] m-0 cursor-pointer">ICT</p>
          <p className="text-[16px] m-0 cursor-pointer">Agro-food Sciences</p>
        </div>
        <div className="flex flex-col gap-2 mb-6 sm:mb-0">
          <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
            Popular Articles
          </h1>

          <p className="text-[16px] m-0 cursor-pointer">
            Agricultural product Insights
          </p>
          <p className="text-[16px] m-0 cursor-pointer">
            Medical Consumption Insights
          </p>
          <p className="text-[16px] m-0 cursor-pointer"> Football Stats</p>
        </div>
        <div className="border flex gap-2 items-start">
          <Image src={face} alt="" />
          <Image src={what} alt="" />
          <Image src={twit} alt="" />
          <Image src={what} alt="" />
        </div>
      </div>
      <div className="  mt-4 flex justify-between sm:text-sm text-xs">
        <div>
          {footer?.design}
          <Link
            href="https://kaeyros-analytics.com/"
            className="text-green-800 "
          >
            Kaeyros Analytics
          </Link>
        </div>
        <div className="font-medium cursor-pointer">
          {`© copyright EZE 2023`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
