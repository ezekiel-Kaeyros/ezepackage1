'use client'
import React from 'react';
import BookSearch from './book-search/BookSearch';

const SearchBar:React.FC<{placeholder:string,btn:string}> = ({placeholder,btn}) => {

  return (
    <form>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <BookSearch btn={btn} placeholder={placeholder}/>
    </form>
  );
};

export default SearchBar;
