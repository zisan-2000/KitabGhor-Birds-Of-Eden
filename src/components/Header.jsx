import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/">
          <img src={logo} alt="Kitab Ghor" className="h-16 w-auto" />{" "}
          {/* Updated size */}
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by books"
            className="rounded-l-md border p-2"
          />
          <button className="rounded-r-md bg-red-500 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m-4 16l4-16m-2 0a8 8 0 118 8c0 1.257-.315 2.442-.875 3.5M13.5 6.5l-1.5 6M16.5 6.5l1.5 6M12 15.5v4m-4-4v4M8 6.5l-1.5 6"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L3.6 5M7 13l1.35 4.35M17 13l-1.35 4.35M5.4 5H21m0 0l-3 6M3 3l3.6 8M5.4 5L4 3M9 21h6m-6 0a1.5 1.5 0 01-1.5-1.5H16.5A1.5 1.5 0 0115 21h-6z"
              />
            </svg>
            <span className="ml-1">Cart 0</span>
          </Link>
          <Link to="/signin" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v1m0 10v1m-4-2h1m6 0h1m-9 3h4m-4-3v3m4 0v-3m4 3h4m-4 0v-3m0 3v3m0-10v-1m0-4v1m-4 2h1m6 0h1m-9 3h4m-4-3v3m4 0v-3m4 3h4m-4 0v-3"
              />
            </svg>
            <span className="ml-1">Sign In</span>
          </Link>
        </div>
      </div>
      <nav className="bg-gray-100">
        <div className="mx-auto flex max-w-7xl space-x-4 p-2">
          <Link to="/" className="hover:text-red-500">
            হোম
          </Link>
          <Link to="/category/:category" className="hover:text-red-500">
            বিষয়সমূহ
          </Link>
          <Link to="/authors" className="hover:text-red-500">
            লেখক
          </Link>
          <Link to="/publishers" className="hover:text-red-500">
            প্রকাশক
          </Link>
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
              <div className="absolute mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
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
                    to="/path2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    মাদানী নেসাব
                  </Link>
                  <Link
                    to="/path3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    মকতব বিভাগ
                  </Link>
                  <Link
                    to="/path4"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    হিফজ বিভাগ
                  </Link>
                  <Link
                    to="/path5"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    তাকমীল বিভাগ
                  </Link>
                  <Link
                    to="/path6"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    ফতওয়া বিভাগ
                  </Link>
                  <Link
                    to="/path7"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    জামাতে তাফসীর
                  </Link>
                  <Link
                    to="/path8"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    জামাতে ক্বিরাত
                  </Link>
                  <Link
                    to="/path9"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    জামাতে নাহবে
                  </Link>
                  <Link
                    to="/path10"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    জামাতে হায়াদুলুনা
                  </Link>
                  <Link
                    to="/path11"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    জামাতে শফী
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/book-fair" className="hover:text-red-500">
            বইমেলা 2024
          </Link>
          <Link to="/pre-order" className="hover:text-red-500">
            প্রি-অর্ডার
          </Link>
          <Link to="/islamic-products" className="hover:text-red-500">
            ইসলামিক পণ্য
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
