import Image from 'next/image';
import React from 'react';
import Logo from '../../../../../public/logo.svg';
import Link from 'next/link';

const Footer: React.FC<{ footer: any }> = ({ footer }) => {
  return (
    <div>
      <section className="bg-[#E6F0ED] px-5 sm:px-16 pb-10 border-2 md:px-20 ">
        <div className="border-b-2 border-[#CCCCCC] flex flex-col sm:flex-row justify-between pt-10 pb-3">
          <div></div>
          <div className="mb-8 sm:mb-0">
            <Image
              src={Logo}
              alt="image not found"
              className="w-20 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                {footer?.block1?.title}
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer ">
                {footer?.block1?.ligne1}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block1?.ligne2}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block1?.ligne3}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block1?.ligne4}
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            {/* <div className="flex flex-col gap-2 mb-6 sm:mb-0"> */}
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                {footer?.block2?.title}
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer">
                {' '}
                {footer?.block2?.ligne1}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block2?.ligne2}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block2?.ligne3}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block2?.ligne4}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block2?.ligne5}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block2?.ligne6}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block2?.ligne7}
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                {footer?.block3?.title}
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block3?.ligne1}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block3?.ligne2}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block3?.ligne3}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block3?.ligne4}
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-6 sm:mb-0">
            <span>
              <h1 className="text-[21px] font-semibold m-0 cursor-pointer">
                {footer?.block4?.title}
              </h1>
            </span>
            <span className="flex flex-col gap-1">
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block4?.ligne1}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {footer?.block4?.ligne2}
              </p>
              <p className="text-[16px] m-0 cursor-pointer">
                {' '}
                {footer?.block4?.ligne3}
              </p>
            </span>
          </div>
          <div className="mb-2 sm:mb-0">
            <h1 className="cursor-pointer"> {footer?.social}</h1>
          </div>
        </div>
        <div className="flex flex-col mt-4 sm:flex-row sm:justify-between">
          <div>
            {footer?.design}
            <Link
              href="https://kaeyros-analytics.com/"
              className="text-green-800 ml-2"
            >
              Kaeyros Analytics
            </Link>
          </div>
          <div className="text-end font-medium cursor-pointer">
            {`© ${footer?.copy} EZE 2023`}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
