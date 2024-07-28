// src/components/FooterContact.jsx
import React from "react";
import logo from "../../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder

const FooterContact = () => {
  return (
    <div>
      <img src={logo} alt="Kitab Ghor" className="mb-4 h-10" />
      <p className="mb-2 text-gray-700">096 138 29654</p>
      <p className="text-gray-700">(9:00am - 10:00pm)</p>
      <p className="text-gray-700">01786 089316 (Only whatsapp)</p>
      <p className="text-gray-700">support@BirdsOfEden.com</p>
      <p className="text-gray-700">ECB Chattar, Tower-71, Dhaka-1216</p>
    </div>
  );
};

export default FooterContact;
