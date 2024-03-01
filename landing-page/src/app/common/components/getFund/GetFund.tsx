import React from 'react';
import Frame from '../../../../../public/getfund/Frame 368.svg';
import Image from 'next/image';
import { Button } from '../button/Button';

export type HomeProps = {
  home: any;
  lang: any;
};

const GetFund: React.FC<HomeProps> = ({ home, lang }) => {
  return (
    <section className="mt-20 max-sm:mt-20 2xl:px-40  max-sm:px-5 max-lg:px-5">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-1">
        <div className="">
          <Image src={Frame} alt="Personal guidance section image" />
        </div>
        <div className="flex flex-col justify-center item-center">
          <h1 className="text-3xl font-extrabold">
            {home.home.section2.sec3.title1}
          </h1>
          <p className="mt-3 text-[15px] sm:text-[18px] xl:text-[20px] text-[#47586E]">
            {home.home.section2.sec3.des1}
          </p>
          <Button className="mt-5 w-2/4 max-sm:w-3/4 bg-[#015E44] text-[18px] sm:text-xl">
            {home.home.section2.sec3.paragragph1}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetFund;
