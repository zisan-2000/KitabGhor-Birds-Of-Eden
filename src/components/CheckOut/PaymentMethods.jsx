// src/components/PaymentMethods.jsx
import React from "react";
import {
  FaCcVisa,
  FaMoneyBillAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import Button from "../Button/Button";

const PaymentMethods = () => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        পেমেন্ট মেথড (Payment Methods)
      </h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input type="radio" name="paymentMethod" className="mr-2" />
          <span>ক্যাশ-অন ডেলিভারি</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input type="radio" name="paymentMethod" className="mr-2" />
          <FaMoneyBillAlt className="mr-2" />
          <span>bKash</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input type="radio" name="paymentMethod" className="mr-2" />
          <FaCcVisa className="mr-2" />
          <span>Rocket</span>
        </label>
      </div>
      <div className="mt-4 flex justify-between">
        <Button className="buttonRed mr-[350px]" to="/cart">
          <FaStepBackward className="mr-2" />
          কার্টে ফেরত যান
        </Button>
        <Button className="buttonRed" to="/cart">
          অর্ডার সম্পন্ন করুন
          <FaStepForward className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
