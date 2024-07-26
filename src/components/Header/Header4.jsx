import React from "react";
import { NavLink } from "react-router-dom";

const Header4 = () => {
  return (
    <div className="bg-pink p-4">
      <div className="mb-2 text-2xl font-semibold text-gray-700">সকল বই</div>
      <div className="text-lg text-gray-600">
        <NavLink to="/" className="hover:underline">
          হোম
        </NavLink>{" "}
        &gt;
        <NavLink to="/categories" className="hover:underline">
          বিষয় সমূহ
        </NavLink>{" "}
        &gt;
      </div>
    </div>
  );
};

export default Header4;
