// src/components/Button.jsx
import React from "react";

const Button2 = ({ children }) => {
  return (
    <button className="w-90 mt-4 rounded bg-gray-200 px-4 py-2 text-black">
      {children}
    </button>
  );
};

export default Button2;
