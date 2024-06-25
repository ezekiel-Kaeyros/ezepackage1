import Image from 'next/image';
import React from 'react';

type CheckboxChipProps = {
  name: string | undefined;
  id: string | undefined;
  value: string | undefined;
  label?: string;
    props: any;
  img:any
};

const CheckboxChip: React.FC<CheckboxChipProps> = ({
  name,
  id,
  value,
  label,
    props,
  img
}) => {
  return (
   <>  <input
        {...props}
        id={id}
        type="checkbox"
        value={value}
        name={name}
        className={`${`w-4 h-4 peer hidden text-primaryColor bg-white focus:ring-primaryColor focus:ring-2`} `}
      />
      <label
        htmlFor={id}
        className="border border-tog rounded-xl py-3 px-2  flex justify-start item-center gap-x-2 cursor-pointer peer-checked:bg-gray-100"
      >
        <Image src={img} alt="" width={12} height={12} className="h-6 w-6" />
        <span className="font-bold text-[#3E585D] flex m-0 ">{label}</span>
      </label></>
     
    
 
  );
};

export default CheckboxChip;
