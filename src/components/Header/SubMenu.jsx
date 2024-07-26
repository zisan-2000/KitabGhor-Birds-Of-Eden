import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center hover:text-red-500"
      >
        <span>কওমী পাঠ্য কিতাব</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <div
          className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          style={{ zIndex: 50 }}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              দাওরায়ে হাদীস
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              মাদানী নেসাব
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              মকতব বিভাগ
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              হিফজ বিভাগ
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              তাকমীল বিভাগ
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              ফতওয়া বিভাগ
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে তাফসীর
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে ক্বিরাত
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে নাহবে
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে হায়াদুলুনা
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে শফী
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে কাশফিয়া
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে শরহে জামী
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে শরহে বেকায়া
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে দোরা-জালালাইন
            </Link>
            <Link
              to="/path1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              জামাতে মেশকাত
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMenu;
