import React from 'react';
import { Button } from '../../button/Button';
import Image from 'next/image';
import VideoImage from '../../../../../../public/images/video.png';

const PersonalGuidanceSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-x-11">
      <div className="lg:w-4/12 w-full flex flex-col justify-start space-y-4">
        <h2 className="font-bold text-2xl lg:text-3xl ">
          Personalized Guidance
        </h2>
        <p className="text-base font-normal">
          Navigate your academic and research pursuits with confidence through
          one-on-one coaching sessions with certified professors. Receive
          tailored advice and insights to propel your career forward.
        </p>
        <Button className="w-fit text-sm px-8">Get Started</Button>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 w-full">
        <Image src={VideoImage} alt="Personal guidance section image" />
      </div>

      <div className="lg:w-4/12 mt-16 lg:mt-0 flex w-full flex-col space-y-4">
        <h3>
          Navigate your academic and research pursuits with confidence through
          one-on-one coaching sessions with certified professors. Receive
          tailored advice and insights to propel your career forward.
        </h3>
        <div className="flex mt-2 items-center space-x-8">
          <div className="text-center mt-2">
            <h1 className="font-bold text-5xl text-secondaryColor opacity-80">
              450 +
            </h1>
            <p>Research articles</p>
          </div>
          <div>
            <h1 className="font-bold text-5xl text-secondaryColor opacity-80">
              100 +
            </h1>
            <p>Research papers</p>
          </div>
          <div>
            <h1 className="font-bold text-5xl text-secondaryColor opacity-80">
              100 +
            </h1>
            <p>Research papers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGuidanceSection;
