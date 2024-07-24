import React from 'react';
import { ChipLinkProps } from './chipLink';
import Link from 'next/link';
import config from '@/utils/config'

const ChipLink: React.FC<ChipLinkProps> = ({ title, href }) => {
  http://localhost:3003/en/digital-library/seeFileCat/Data%20Analytics
  return (
    <Link
      className="flex border text-secondaryColor border-secondaryColor rounded-full hover:bg-primaryColor hover:text-white text-sm lg:text-md hover:border-white items-center justify-center px-4 py-2"
      href={`${config.livingLibraryUrl}/seeFileCat/${href}/`}
    >
      {title}
    </Link>
  );
};

export default ChipLink;
