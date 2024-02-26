import Image from 'next/image';
import React from 'react';
import Logo from '../../../../../public/logo.svg';

const Footer = () => {
  return (
    <div>
      <section className="bg-[#E6F0ED] px-5 sm:px-16 pb-10 border-2 md:px-20 ">
        <div className="border-b-2 border-[#CCCCCC] flex flex-col sm:flex-row justify-between pt-10 pb-3">
          {/* <div className="flex justify-between"> */}
          {/* <div className='mb-8 sm:mb-0'> */}
          <div></div>
          <div className="mb-8 sm:mb-0">
            <Image
              src={Logo}
              alt="image not found"
              className="w-20 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            {/* <div className="flex flex-col gap-2 mb-6 sm:mb-0"> */}
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                Visit
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer ">Communities</p>
              <p className="text-[16px] m-0 cursor-pointer">Online Courses</p>
              <p className="text-[16px] m-0 cursor-pointer">Library</p>
              <p className="text-[16px] m-0 cursor-pointer">Funding Area</p>
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            {/* <div className="flex flex-col gap-2 mb-6 sm:mb-0"> */}
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                Communities
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer">Health Sciences</p>
              <p className="text-[16px] m-0 cursor-pointer">Mines</p>
              <p className="text-[16px] m-0 cursor-pointer">ICT</p>
              <p className="text-[16px] m-0 cursor-pointer">
                Agro-food Sciences
              </p>
              <p className="text-[16px] m-0 cursor-pointer">Energy</p>
              <p className="text-[16px] m-0 cursor-pointer">Data Analytics</p>
              <p className="text-[16px] m-0 cursor-pointer">Social Sciences</p>
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                Online Courses
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer">Health Sciences</p>
              <p className="text-[16px] m-0 cursor-pointer">Mines</p>
              <p className="text-[16px] m-0 cursor-pointer">ICT</p>
              <p className="text-[16px] m-0 cursor-pointer">
                Agro-food Sciences
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                Popular Articles
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer">
                Agricultural product Insights
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                Medical Consumption Insights
              </p>
              <p className="text-[16px] m-0 cursor-pointer">Football Stats</p>
            </span>
          </div>
          <div className="mb-2 sm:mb-0">
            <h1 className="cursor-pointer">Our Socials</h1>
            {/* <div className="flex items-center gap-x-2">
        <Image src={facebook} alt="instagram" className="w-[50px] h-[50px] p-2 cursor-pointer rounded-full bg-[#015E44]" />
        <Image src={instagram} alt="facebook" className="w-[50px] h-[50px] p-2 cursor-pointer rounded-full bg-[#015E44]" />
        <Image src={twitter} alt="twitter" className="w-[50px] h-[50px]  p-2 cursor-pointer rounded-full bg-[#015E44]" />
        <Image src={whatsapp} alt="whatsapp" className="w-[50px] h-[50px] p-2 cursor-pointer rounded-full bg-[#015E44]" />
      </div> */}
          </div>
        </div>
        <div>Designed by Kaeryros Analytics</div>
        <div className="text-end font-thin cursor-pointer">
          ©2023 Kaeyros Analytics
        </div>
      </section>
    </div>
  );
};

export default Footer;
