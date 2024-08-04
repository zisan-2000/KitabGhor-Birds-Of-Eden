// FooterContact.jsx
import React from "react";
import logo from "../../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder

const FooterContact = () => {
  return (
    <div>
      <img src={logo} alt="Company Logo" className="mb-4 h-16 w-auto" />
      <p className="mb-2 text-gray-300">+1 (800) 123-4567</p>
      <p className="text-gray-300">9:00 AM - 10:00 PM, Mon - Sat</p>
      <p className="text-gray-300">support@yourdomain.com</p>
      <p className="text-gray-300">1234 Market St, San Francisco, CA 94103</p>
    </div>
  );
};

export default FooterContact;
