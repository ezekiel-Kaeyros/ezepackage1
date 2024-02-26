import React from 'react';
import { Button } from '../../button/Button';
import Carousel from './carousel/Carousel';

const CertifiedLibrarySection = () => {
  return (
    <div className="flex flex-col  items-center xl:flex-row justify-between">
      <div className="flex flex-col space-y-4 w-full lg:w-4/12">
        <h1 className="font-bold text-2xl lg:text-3xl">
          Certified Online Library
        </h1>
        <h3>
          Access an extensive library of certified articles and research papers.
          Stay at the forefront of your field with the latest discoveries and
          perspectives from renowned researchers.
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
        </div>

        <div className="pt-4">
          <Button className="w-fit">Visit Our Library</Button>
        </div>
      </div>

      <div className="mt-16 w-8/12 xl:mt-0">
        <Carousel />
      </div>
    </div>
  );
};

export default CertifiedLibrarySection;
