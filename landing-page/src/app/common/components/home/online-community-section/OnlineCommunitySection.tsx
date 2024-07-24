"use client"

import Image from 'next/image';
import React from 'react';

import AnimationImage from '../../../../../../public/icons/animation.svg';
import MobileCommunityImage from '../../../../../../public/images/circleCommunityImage.svg';

import { Button } from '../../button/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import config from '@/utils/config'

const OnlineCommunitySection: React.FC<{ home: any }> = ({ home }) => {
  const router = useRouter()
  return (
    <div className="my-8 w-full px-8">
      <div className='relative'>
        <Image
          className="w-full hidden lg:block"
          src={AnimationImage}
          alt="online community spinner"
        />
        <div className="top-[60%] hidden lg:flex w-full absolute items-center justify-center flex-col">
          <h1 className="font-bold max-w-md text-center lg:max-w-full text-[16px] sm:text-2xl xl:text-3xl 2xl:text-4xl">
            {home?.section1.block1.block2.title}
          </h1>
          <h3 className="mt-4 text-[14px] sm:text-xl lg:text-medium max-w-md text-center w-full 2xl:text-2xl ">
            {home?.section1.block1.block2.p}
          </h3>
          <div className="mt-6">
            <Button onClick={() => router.push(`${config.communitiesUrl}/communities/community`)} className="w-fit text-sm">
              {home?.section1.block1.block2.btn}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile only */}

      <div className='relative'>
        <Image
          className="lg:hidden w-full"
          src={MobileCommunityImage}
          alt="Community mobile circle"
        />
        <div className="top-[20%] sm:top-[35%] w-full absolute lg:hidden flex items-center justify-center flex-col">
          <h1 className="font-bold max-w-xs sm:max-w-md text-center lg:max-w-full text-[14px] sm:text-2xl xl:text-3xl 2xl:text-4xl">
            {home?.section1.block1.block2.title}
          </h1>
          <h3 className="mt-4 text-[12px] sm:text-xl lg:text-medium max-w-xs sm:max-w-md text-center w-full 2xl:text-2xl ">
            {home?.section1.block1.block2.p}
          </h3>
          <div className="mt-6">
            <Button className="w-fit text-sm">
              {home?.section1.block1.block2.btn}
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OnlineCommunitySection;
