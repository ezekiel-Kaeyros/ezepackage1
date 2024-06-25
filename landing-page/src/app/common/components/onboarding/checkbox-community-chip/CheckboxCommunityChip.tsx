'use client'
import Image from 'next/image';
import React, { useState } from 'react';

import usersImage from '../../../../../../public/images/usersGroup.png';
import IFYARLogo from '../../../../../../public/images/ifyarLogo.png';

type CheckboxCommunityChipProps = {
  name: string | undefined;
  id: string | undefined;
  value: string | undefined;
  description: string;
  label?: string;
  register: any;
  gettopic: any
  item:any
};

const CheckboxCommunityChip: React.FC<CheckboxCommunityChipProps> = ({
  name,
  id,
  value,
  label,
  description,
  register,
  gettopic,
  item
}) => {

  function extractUpToNextWhitespace(str: string, limit: any) {
    // Extract the first 'limit' characters
    let partialString = str.slice(0, limit);
    // Find the next whitespace after the 'limit'
    let nextWhitespaceIndex = str.indexOf(' ', limit);
    if (nextWhitespaceIndex === -1) {
        // If no whitespace is found, return the entire string
        return str;
    }
    // Include the substring up to the next whitespace
    return str.slice(0, nextWhitespaceIndex);
}
  const [check,setCheck]=useState(false)
  return (
    <div
      className={`bg-[#FFE6EF] w-[350px] ml-0 py-6 rounded-2xl h-[180px] ${check && 'border-primaryColor border-2  text-secondaryColor'} `}
      onClick={() => {
        // alert(check)
        setCheck((preview) => !preview);
        gettopic(item)

      }}
    >
      <div className="flex justify-center items-center mr-0 mb-0">
        {/* <input
          {...register}
          id={id}
          type="checkbox"
          value={value}
          name={name}
          className={`${`w-4 h-4 peer hidden text-primaryColor bg-white focus:ring-primaryColor focus:ring-2`} `}
        /> */}
        <label
          htmlFor={`${id}`}
          className={`text-sm  cursor-pointer select-none font-medium text-secondaryColor flex flex-col`}
        >
          <div className="flex gap-x-10">
            <Image className="w-fit" src={IFYARLogo} alt="IFYAR logo" />

            <Image src={usersImage} alt="User image" />
          </div>
          <h1 className="font-bold text-xl my-2">{label}</h1>
          {description.length > 0 ? <p className='text-base'>{extractUpToNextWhitespace(description, 24)}...</p> : <p></p>} 
        </label>
      </div>
    </div>
  );
};

export default CheckboxCommunityChip;
