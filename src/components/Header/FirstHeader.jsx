// src/components/FirstHeader.jsx
import React from "react";
import { FaSignInAlt } from "react-icons/fa"; // Import the sign-in icon from react-icons
import { Link } from "react-router-dom";
import logo from "../../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder
import SearchFirstHeader from "../SearchBox/SearchFirstHeader";
import CartLink from "../cart/CartLink";

const FirstHeader = () => {
  return (
    <div className="header flex items-center justify-between bg-white p-4 shadow-md">
      <Link
        to="/"
        className="flex items-center  bg-gray-100 p-2 shadow transition hover:bg-gray-200"
      >
        <img src={logo} alt="Kitab Ghor" className="h-16 w-auto rounded-full" />
      </Link>

      <SearchFirstHeader />
      <div className="flex items-center space-x-4">
        <CartLink />
        <Link to="/signin" className="flex items-center text-red-500">
          <FaSignInAlt className="h-6 w-6" />
          <span className="ml-1">সাইন ইন </span>
        </Link>
      </div>
    </div>
  );
};

export default FirstHeader;
