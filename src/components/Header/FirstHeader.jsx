// src/components/FirstHeader.jsx
import React from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Import the sign-in and user plus icons from react-icons
import { Link } from "react-router-dom";
import logo from "../../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder
import SearchFirstHeader from "../SearchBox/SearchFirstHeader";
import CartLink from "../cart/CartLink";

const FirstHeader = () => {
  return (
    <div className="header flex items-center justify-between bg-gray-800 p-4 text-white shadow-lg ">
      <div className="flex items-center">
        <Link to="/" className="flex items-center p-2">
          <img
            src={logo}
            alt="Kitab Ghor"
            className="h-16 w-auto rounded-full shadow-lg"
          />
          <span className="ml-3 text-2xl font-bold">বইঘর </span>
        </Link>
      </div>

      <SearchFirstHeader />

      <div className="flex items-center space-x-4">
        <CartLink />

        <Link to="/signup" className="flex items-center hover:text-yellow-300">
          <FaUserPlus className="h-6 w-6" />
          <span className="ml-1">সাইন আপ</span>
        </Link>

        <Link to="/signin" className="flex items-center hover:text-yellow-300">
          <FaSignInAlt className="h-6 w-6" />
          <span className="ml-1">সাইন ইন</span>
        </Link>
      </div>
    </div>
  );
};

export default FirstHeader;
