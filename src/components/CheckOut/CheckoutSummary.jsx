// src/components/CheckoutSummary.jsx
import React from "react";

const CheckoutSummary = ({ totalPrice, shippingCost, finalTotal }) => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Checkout Summary</h2>
      <div className="mb-4 flex justify-between">
        <span>মূল্য</span>
        <span>৳ {totalPrice.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <span>পরিবহন ব্যয়</span>
        <span>৳ {shippingCost.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-t pt-4">
        <span className="font-semibold">সর্বমোট</span>
        <span className="font-semibold">৳ {finalTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
