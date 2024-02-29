import React from 'react';

type CheckboxChipProps = {
  name: string | undefined;
  id: string | undefined;
  value: string | undefined;
  label?: string;
  register: any;
};

const CheckboxChip: React.FC<CheckboxChipProps> = ({
  name,
  id,
  value,
  label,
  register,
}) => {
  return (
    <div className="sm:p-1 p-0">
      <div className="flex justify-center items-center mr-0 mb-0">
        <input
          {...register}
          id={`${id}`}
          type="checkbox"
          value={value}
          name={name}
          className={`${`w-4 h-4 peer hidden text-primaryColor bg-white focus:ring-primaryColor focus:ring-2`} `}
        />
        <label
          htmlFor={id}
          className="w-fit py-2 my-1 bg-white px-4 ml-0 text-sm  cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-primaryColor peer-checked:border-white peer-checked:font-bold peer-checked:text-white font-medium text-secondaryColor flex justify-center border border-secondaryColor "
        >
          <div className="flex cursor-pointer">{label}</div>
        </label>
      </div>
    </div>
  );
};

export default CheckboxChip;
