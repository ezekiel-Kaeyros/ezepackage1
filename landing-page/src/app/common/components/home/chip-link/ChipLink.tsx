import React from 'react';
import { ChipLinkProps } from './chipLink';
import Link from 'next/link';

const ChipLink: React.FC<ChipLinkProps> = ({ title, href }) => {
  return (
    <Link
      className="flex border text-secondaryColor border-secondaryColor rounded-full hover:bg-primaryColor hover:text-white text-sm lg:text-md hover:border-white items-center justify-center px-4 py-2"
      href={`/${href}`}
    >
      {title}
    </Link>
  );
};

export default ChipLink;
