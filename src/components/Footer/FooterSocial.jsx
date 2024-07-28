// src/components/FooterSocial.jsx
import React from "react";

const FooterSocial = () => {
  return (
    <div className="ml-[1050px] w-max">
      <h3 className="-mt-20 mb-4 font-bold text-gray-800">
        STAY CONNECTED WITH US
      </h3>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
