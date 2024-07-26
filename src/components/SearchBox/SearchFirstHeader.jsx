import React from "react";

const SearchFirstHeader = () => {
  return (
    <div className="flex items-center">
      <div className="relative flex w-[600px]">
        <input
          type="text"
          placeholder="Search by books (ex. কুরআন সুরাহর আলোকে)"
          className="flex-grow rounded-l-full border border-gray-300 bg-white py-2 pl-4 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
        />
        <button className="flex items-center justify-center rounded-r-full bg-red-500 p-2">
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.486-3.365A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 017.5 7.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchFirstHeader;
