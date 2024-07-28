// src/components/CheckoutPage.jsx
import React from "react";
import CheckoutForm from "./../components/CheckOut/CheckoutForm";
import CheckoutSummary from "./../components/CheckOut/CheckoutSummary";
import PaymentMethods from "./../components/CheckOut/PaymentMethods";

const CheckoutPage = () => {
  const total = 120; // Example total
  const discount = 0; // Example discount
  const shippingCost = 52; // Example shipping cost

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <CheckoutForm />
        </div>
        <div className="md:col-span-1">
          <CheckoutSummary
            total={total}
            discount={discount}
            shippingCost={shippingCost}
          />
        </div>
        <div className="mt-6 md:col-span-2">
          <PaymentMethods />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
