import Image from 'next/image';
import React, { ChangeEvent } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  icon?: string;

  title?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  title,
  name,
  icon,
  type,
  placeholder,
}) => {
  return (
    <div className="relative w-full py-3">
      {title && (
        <label
          className="font-medium block mb-1 mt-6 text-gray-700"
          htmlFor={name}
        >
          {title}
        </label>
      )}
      <input
        className="appearance-none relative border rounded-full w-full py-5 px-12 leading-tight border-gray-300 bg-transparent focus:outline-none focus:border-primaryColor pr-16"
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        type={type}
        autoFocus
        {...register}
      />
      {icon && (
        <Image
          className="absolute ml-4 mt-auto mb-auto left-0 right-0 top-0 bottom-0"
          src={icon}
          alt="Icon"
        />
      )}
    </div>
  );
};

export default InputField;
