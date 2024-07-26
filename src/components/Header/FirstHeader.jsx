import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder
import SearchFirstHeader from "../SearchBox/SearchFirstHeader";

const FirstHeader = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
      <Link to="/">
        <img src={logo} alt="Kitab Ghor" className="h-16 w-auto" />
      </Link>

      <SearchFirstHeader />
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
  );
};

export default FirstHeader;
