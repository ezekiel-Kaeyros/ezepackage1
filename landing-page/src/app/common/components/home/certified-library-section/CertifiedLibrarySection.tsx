import React from 'react';
import Carousel from './carousel/Carousel';

const CertifiedLibrarySection = () => {
  return (
    <div className="mt-[10%] bg-white md:flex md:justify-between  text-black block overflow-hidden w-full md:pl-3 ">
      <div className=" md:w-[31%] w-fit md:px-0 md:m-0  md:mt-0 mt-[2%] ">
        <h1 className="lg:mb-4 mb-4  md:mb-2 text-xl font-[700] md:mt-2">
          Certified Online Library
        </h1>
        <p className="lg:mb-4 md:mb-2 mb-4 sm:text-justify w-full text-base pr-4">
          Access an extensive library of certified articles and research papers.
          Stay at the forefront of your field with the latest discoveries and
          perspectives from renowned researchers.
        </p>
        <div className="flex lg:mb-4 mb-4  md:mb-2 text-[#47586E]">
          <div className="mr-6">
            <h1 className="text-4xl text-[#47586E] mb-2">450 +</h1>
            <p>Research articles</p>
          </div>
          <div>
            <h1 className="text-4xl text-[#47586E] mb-2">100 +</h1>
            <p> Research papers</p>
          </div>
        </div>
        <button className="bg-[#015E44] rounded-3xl px-4 py-3 text-white font-[700]">
          Visit Our Library
        </button>
      </div>
      <div className="md:w-[68%] box-border md:px-0 w-full m-auto md:m-0	md:mt-0 mt-[2%]  h-[600px]">
        <Carousel />
      </div>
    </div>
  );
};

export default CertifiedLibrarySection;
