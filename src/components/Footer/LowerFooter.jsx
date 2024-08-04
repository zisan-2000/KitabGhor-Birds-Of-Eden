// LowerFooter.jsx
import React from "react";
import bkashImage from "../../assets/bkash.png"; // Replace with your actual image path
import masterCardImage from "../../assets/mastercard.png"; // Replace with your actual image path
import nogodImage from "../../assets/nogod.png"; // Replace with your actual image path
import payIcon from "../../assets/pay-with.png"; // Replace with your actual image path
import visaImage from "../../assets/visa.png"; // Replace with your actual image path

const LowerFooter = () => {
  return (
    <div className="mt-12 border-t border-gray-700 pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="text-sm text-gray-300">
          <p>&copy; 2024 YourCompanyName</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="mr-2 text-gray-300">Accepted Payments</span>
          <img src={payIcon} alt="Pay Icon" className="h-8" />
          <img src={nogodImage} alt="Nogod" className="h-8" />
          <img src={bkashImage} alt="Bkash" className="h-8" />
          <img src={masterCardImage} alt="MasterCard" className="h-8" />
          <img src={visaImage} alt="Visa" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
