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
    <div className="rounded-tr-xl bg-[#E6F0ED] w-10/12 mx-8 xl:max-w-sm rounded-br-[4rem] rounded-tl-xl">
      <Image className="w-full" src={image} alt="Image of report" />
      <div className="p-6">
        <h1 className="font-bold text-xl">{title}</h1>
        <h2 className="font-bold text-lg">{subTitle}</h2>
        <p className="mt-4">{description}</p>
        <Link href={''} className="flex mt-4 text-primaryColor space-x-2">
          <h3 className="font-bold">Report</h3>
          <Image src={RightIcon} alt="right icon" />
        </Link>
      </div>
    </div>
  );
};

export default ReportCard;
