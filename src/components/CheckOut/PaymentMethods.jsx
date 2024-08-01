import React, { useState } from "react";
import {
  FaCcVisa,
  FaMoneyBillAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import Button from "../Button/Button";

const PaymentMethods = ({ formData, total, discount, shippingCost }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      name: formData.name,
      email: formData.email || null,
      phone_number: formData.phoneNumber,
      alt_phone_number: formData.altPhoneNumber || null,
      country: formData.country,
      district: formData.district,
      area: formData.area,
      address_details: formData.addressDetails,
      total: parseFloat(total),
      discount: parseFloat(discount),
      shipping_cost: parseFloat(shippingCost),
      grand_total:
        parseFloat(total) + parseFloat(shippingCost) - parseFloat(discount),
      payment_method: paymentMethod,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Network response was not ok: ${response.status} - ${errorText}`,
        );
      }

      const result = await response.json();
      console.log("Order submitted successfully:", result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        পেমেন্ট মেথড (Payment Methods)
      </h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="cash_on_delivery"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <span>ক্যাশ-অন ডেলিভারি</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="bKash"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <FaMoneyBillAlt className="mr-2" />
          <span>bKash</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="rocket"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <FaCcVisa className="mr-2" />
          <span>Rocket</span>
        </label>
      </div>
      <div className="mt-4 flex justify-between">
        <Button className="buttonRed mr-[350px]" to="/cart">
          <FaStepBackward className="mr-2" />
          কার্টে ফেরত যান
        </Button>
        <Button className="buttonRed" onClick={handleSubmit}>
          অর্ডার সম্পন্ন করুন
          <FaStepForward className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
