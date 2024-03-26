import React from 'react';
import { Button } from '../../button/Button';
import Image from 'next/image';
import VideoImage from '../../../../../../public/images/video.png';

const PersonalGuidanceSection:React.FC<{home:any}> = ({home}) => {
  return (
    <div className="mt-20 max-lg:mt-80 max-sm:mt-[30rem] w-full flex flex-col lg:flex-row items-start gap-x-11 px-8">
      <div className="lg:w-4/12 w-full flex flex-col justify-start space-y-4">
        <h2 className="font-bold text-2xl lg:text-3xl "></h2>
        <p className="text-base font-normal">{home?.section2.sec3.des2}</p>
        <Button className="w-fit text-sm px-8">
          {home?.section2.sec3.paragragph1}
        </Button>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 w-full">
        <Image src={VideoImage} alt="Personal guidance section image" />
      </div>

      <div className="lg:w-4/12 mt-16 lg:mt-0 flex w-full flex-col space-y-4">
        <h3>{home?.section2.sec3.des2}</h3>
        <div className="flex mt-2 items-center space-x-8">
          <div className="text-center mt-2">
            <h1 className="font-bold text-4xl text-secondaryColor opacity-80">
              450 +
            </h1>
            <p>{home?.section2.sec1.paragragph1}</p>
          </div>
          <div>
            <h1 className="font-bold text-4xl text-secondaryColor opacity-80">
              100 +
            </h1>
            <p>{home?.section2.sec1.paragragph2}</p>
          </div>
          <div>
            <h1 className="font-bold text-4xl text-secondaryColor opacity-80">
              100 +
            </h1>
            <p>{home?.section2.sec1.paragragph2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGuidanceSection;
