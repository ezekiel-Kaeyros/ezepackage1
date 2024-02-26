import Image from 'next/image';
import React from 'react';

const StatisticChipCard = ({ icon, stat }: { icon: string; stat: string }) => {
  return (
    <div className="px-3 mr-2 mt-2 h-8 py-1 bg-[#2D383C] rounded-full flex items-center">
      <Image src={icon} alt="Stat icon" />{' '}
      <div className="ml-2 text-sm">{stat}</div>
    </div>
  );
};

export default StatisticChipCard;
