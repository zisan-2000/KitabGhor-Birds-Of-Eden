import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder
import SearchFirstHeader from "../SearchBox/SearchFirstHeader";
import CartLink from "../cart/CartLink";

const FirstHeader = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Kitab Ghor" className="h-16 w-auto" />
      </Link>

      <SearchFirstHeader />
      <div className="flex items-center space-x-4">
        <CartLink />
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
