// src/components/SearchFirstHeader.jsx
import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons

const SearchFirstHeader = () => {
  return (
    <div className="flex items-center">
      <div className="relative flex w-[600px]">
        <input
          type="text"
          placeholder="Search by books (ex. কুরআন সুরাহর আলোকে)"
          className="flex-grow  border border-gray-300 bg-white py-2 pl-4 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
        />
        <button className="flex items-center justify-center  bg-red-500 p-2">
          <FaSearch className="h-4 w-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchFirstHeader;
