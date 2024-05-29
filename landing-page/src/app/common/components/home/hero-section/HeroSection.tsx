'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

import SearchBar from '../../search-bar/SearchBar';
import ChipLink from '../chip-link/ChipLink';

import HeroImage from '../../../../../../public/images/heroImage.png';
import ChannelService from '@/services/channelService';

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




const HeroSection: React.FC<{ home: any }> = ({ home }) => {
  
  useEffect(() => {
    const response = new ChannelService().channel().then((result) => {
      console.log('result======',result);
      
    }).catch((error) => {
      console.log('error==============',error);
      
    })
  },[])
  return (
    <div className="flex w-full items-center justify-between px-8">
      <div className="w-full text-center lg:text-start lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">
        <div className="font-bold flex items-center flex-col lg:block text-center lg:text-start text-4xl lg:text-5xl xl:text-6xl">
          <h1 className="mb-2">
            {home?.section1.block1.h1}{' '}
            <span className="text-primaryColor">
              {home?.section1.block1.span}
            </span>
          </h1>
          {/* <h1 className="flex space-x-2">
            <h3>Ideas</h3> <h3 className="text-primaryColor">Spark</h3>
          </h1> */}
        </div>
        <p className="my-6 text-md lg:text-xl">{home?.section1.block1.p}</p>
        <div className="mb-6 mt-12">
          <SearchBar
            placeholder={home?.section1.block1.placeholder}
            btn={home?.section1.block1.btn}
          />
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
