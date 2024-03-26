import React from 'react';
import Image from 'next/image';

import { ReportCardProps } from './reportCard';
import RightIcon from '../../../../../../../public/icons/rightIcon.svg';
import Link from 'next/link';

const ReportCard: React.FC<ReportCardProps> = ({
  description,
  title,
  image,
  subTitle,
  href,
}) => {
  return (
    <div className="md:w-[80%] xl:w-[80%] w-[85%] m-auto sm:m-0  rounded-tr-xl rounded-tl-lg text-base  h-full ">
      <Image src={image} alt="" className="w-full object-contain " />
      <div className=" w-full bg-[#E6F0ED] p-8 sm:3 md:p-4 lg:p-4 xl:p-8 rounded-br-[70px] ">
        <div className="object-contain ">
          <h1 className="mb-3 font-[700] md:text-sm text-base">
            {title}
            <br></br>
            {subTitle}
          </h1>
          <p className="mb-3 text-[#47586E] md:text-sm text-sm">
            {description}
          </p>
          <p className="flex text-[#014E38] items-center">
            <span className="mr-2">{href}</span>
            <Image
              src={RightIcon}
              alt=""
              className="w-[24px] h-[24px]  "
            />
          </p>
        </div>
      </div>
    </div>
    // <div className="rounded-tr-xl bg-[#E6F0ED] w-10/12 mx-8 xl:max-w-sm rounded-br-[4rem] rounded-tl-xl">
    //   <Image className="w-full" src={image} alt="Image of report" />
    //   <div className="p-6">
    //     <h1 className="font-bold text-xl">{title}</h1>
    //     <h2 className="font-bold text-lg">{subTitle}</h2>
    //     <p className="mt-4">{description}</p>
    //     <Link href={''} className="flex mt-4 text-primaryColor space-x-2">
    //       <h3 className="font-bold">Report</h3>
    //       <Image src={RightIcon} alt="right icon" />
    //     </Link>
    //   </div>
    // </div>
  );
};

export default ReportCard;
