import React from 'react';
import Image from 'next/image';

import SearchBar from '../../search-bar/SearchBar';
import ChipLink from '../chip-link/ChipLink';

import HeroImage from '../../../../../../public/images/heroImage.png';

const topics = [
  {
    id: 1,
    title: 'Health Sciences',
    href: '#',
  },
  {
    id: 2,
    title: 'Mines',
    href: '#',
  },
  {
    id: 3,
    title: 'ICT',
    href: '#',
  },
  {
    id: 4,
    title: 'Agro-food Sciences',
    href: '#',
  },
  {
    id: 5,
    title: 'Energy',
    href: '#',
  },
  {
    id: 6,
    title: 'Data Analytics',
    href: '#',
  },
  {
    id: 7,
    title: 'Social Sciences',
    href: '#',
  },
];

const HeroSection = () => {
  return (
    <div className="flex w-full items-center justify-between px-8">
      <div className="w-full text-center lg:text-start lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">
        <div className="font-bold flex items-center flex-col lg:block text-center lg:text-start text-4xl lg:text-5xl xl:text-6xl">
          <h1 className="mb-2">Where Minds Meet,</h1>
          <h1 className="flex space-x-2">
            <h3>Ideas</h3> <h3 className="text-primaryColor">Spark</h3>
          </h1>
        </div>
        <p className="my-6 text-md lg:text-xl">
          Unleash the full potential of your scientific journey with Eze, your
          gateway to a thriving community of knowledge seekers, learners, and
          experts.
        </p>
        <div className="mb-6 mt-12">
          <SearchBar />
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 flex-grow">
          {topics?.map((topic) => (
            <ChipLink key={topic?.id} title={topic?.title} href={topic?.href} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:max-w-md xl:max-w-xl">
        <Image
          src={HeroImage}
          alt="Hero section image of scientific researchers"
        />
      </div>
    </div>
  );
};

export default HeroSection;
