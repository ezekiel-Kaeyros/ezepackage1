import React, { useState } from "react";

interface EncryptionNames {
  name: string;
  __v: number;
  _id: string;
}

type SelectFieldProps = {
  title?: string;
  name?: string;
  options: Array<EncryptionNames>;
  props?: any;
  defaultValue?: string;
  // setSelectedOption: (option: string) => void;
  val?: string;
};

const TableSelect: React.FC<SelectFieldProps> = ({
  title,
  options,
  name,
  props,
  defaultValue,
  //   setSelectedOption,
  val,
}) => {
  //   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     const newOption = event.target.value;
  //     setSelectedOption(newOption);
  //   };

  return (
    <>
      <label htmlFor={name} className="block mb-3 font-bold text-white">
        {title}
      </label>
      <select
        // defaultValue={`defaultValue`}
        // value="james robison"
        // value={val}
        name={name}
        {...props}
        id={name}
        // onChange={handleOptionChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options?.map((option: EncryptionNames) => (
          <option key={option._id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default TableSelect;
