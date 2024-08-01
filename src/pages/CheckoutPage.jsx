import React, { useState } from "react";
import CheckoutForm from "../components/CheckOut/CheckoutForm";
import CheckoutSummary from "../components/CheckOut/CheckoutSummary";
import PaymentMethods from "../components/CheckOut/PaymentMethods";
import { useCart } from "../contexts/CartContext";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({});
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    return cart.items.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  };

  const totalPrice = calculateTotalPrice();
  const shippingCost = 60.0; // Example shipping cost
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <CheckoutForm setFormData={setFormData} />
        </div>
        <div className="md:col-span-1">
          <CheckoutSummary
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            finalTotal={finalTotal}
          />
        </div>
        <div className="mt-6 md:col-span-2">
          <PaymentMethods
            formData={formData}
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            finalTotal={finalTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
