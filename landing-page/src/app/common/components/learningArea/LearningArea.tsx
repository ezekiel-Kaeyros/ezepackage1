import React from 'react'
import Learning from '../../../../../public/learningAREA/line-trasvers.svg'
import Image from 'next/image'
import { Button } from '../button/Button'
export type HomeProps = {
    home: any;
    lang: any;
  };

const LearningArea: React.FC<HomeProps> = ({ home, lang}) => {
  return (
    <section className="mt-20 max-sm:mb-96 w-full max-sm:px-5 max-lg:px-10">
        <div className=" relative flex justify-center ">
          <Image src={Learning} alt="Learning" className="w-full xl:block max-sm:mt-20 max-sm:hidden max-lg:hidden" />
          <div className="w-full  xl:w-[45%] flex flex-col gap-y-5 absolute top-0 sm:top-0  max-sm:mb-20">
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-y-5 w-full text-center sm:w-full xl:w-[87%]">
                <h1 className=" text-3xl text-center  tracking-wide [word-spacing:5px] font-bold">
                {home.home.section2.sec2.title1}
                </h1>
                <p className=" text-[15px]  text-[#47586E] tracking-wider w-full xl:w-full">
                {home.home.section2.sec2.des1}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-center">
              <div className="flex gap-x-8 text-[#47586E]">
                <span className="text-center">
                  <h1 className=" text-4xl max-sm:text-2xl">100+</h1>
                  <p className=" text-[20px]tracking-wider">
                  {home.home.section2.sec2.paragragph1}
                  </p>
                </span>
                <span className="text-center">
                  <h1 className=" text-4xl max-sm:text-2xl">20+</h1>
                  <p className=" text-[20px]tracking-wider">
                  {home.home.section2.sec2.paragragph2}
                  </p>
                </span>
                <span className="text-center">
                  <h1 className=" text-4xl max-sm:text-2xl">50+</h1>
                  <p className=" text-[20px]tracking-wider">
                  {home.home.section2.sec2.paragragph3}
                  </p>
                </span>
              </div>
              <Button
                className="w-[70%] sm:w-[30%] bg-[#015E44] text-xl mx-auto "
              >
             {home.home.section2.sec2.paragragph4}
              </Button>
         
            </div>
          </div>
        </div>
      </section>
  )
}

export default LearningArea