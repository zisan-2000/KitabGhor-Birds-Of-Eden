// src/components/FooterLinks.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-4 font-bold text-gray-800">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path} className="hover:underline">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
