import React from 'react';
import { Button } from '../button/Button';

import searchIcon from '../../../../../public/icons/searchIcon.svg';

const SearchBar:React.FC<{placeholder:string,btn:string}> = ({placeholder,btn}) => {
  return (
    <form>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="search"
          className="block w-full p-4 ps-6 text-sm text-secondaryColor focus:outline-none border border-gray-300 rounded-full bg-gray-100 focus:ring-primaryColor focus:border-primaryColor    "
          placeholder={placeholder}
          required
        />
        <div className="absolute h-fit right-0 w-fit top-0">
          <Button
            icon={searchIcon}
            type="submit"
            className="text-white rounded-full  focus:ring-4 focus:outline-none  font-medium  text-sm px-4 lg:px-8 py-3.5 "
          >
            <h1 className="hidden lg:block">{btn}</h1>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
