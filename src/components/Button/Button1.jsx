// src/components/Button1.jsx
import React from "react";

const Button1 = ({ children, onClick }) => {
  return (
    <button
      className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button1;
