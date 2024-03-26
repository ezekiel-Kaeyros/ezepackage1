import Image from 'next/image';
import React from 'react';

import AnimationImage from '../../../../../../public/icons/animation.svg';
import MobileCommunityImage from '../../../../../../public/images/circleCommunityImage.svg';

import { Button } from '../../button/Button';

const OnlineCommunitySection: React.FC<{home:any}> = ({home}) => {
  return (
    <div className="my-8 w-full px-8">
      <Image
        className="w-full hidden lg:block"
        src={AnimationImage}
        alt="online community spinner"
      />

      {/* Mobile only */}

      <Image
        className="lg:hidden w-full"
        src={MobileCommunityImage}
        alt="Community mobile circle"
      />

      <div className="flex -mt-[20rem] sm:-mt-[28rem] md:-mt-[36rem]  mb-[16rem] lg:max-w-lg  lg:-mt-[10rem] lg:mb-[10rem] xl:-mt-[12rem] 2xl:-mt-[14rem] w-full mx-auto flex-col items-center justify-center">
        <h1 className="font-bold max-w-xs text-center lg:max-w-full text-2xl xl:text-3xl 2xl:text-4xl">
          {home?.section1.block1.block2.title}
        </h1>
        <h3 className="mt-4 text-sm sm:text-xl lg:text-medium max-w-xs text-center lg:max-w-full 2xl:text-2xl ">
          {home?.section1.block1.block2.p}
        </h3>
        <div className="mt-6">
          <Button className="w-fit text-sm">
            {home?.section1.block1.block2.btn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnlineCommunitySection;
