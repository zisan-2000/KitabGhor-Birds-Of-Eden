// src/components/CartLink.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const CartLink = () => {
  const { cart } = useCart();
  const cartItemCount = cart.items.reduce(
    (count, item) => count + item.quantity,
    0,
  );

  return (
    <Link to="/cart" className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L3.6 5M7 13l1.35 4.35M17 13l-1.35 4.35M5.4 5H21m0 0l-3 6M3 3l3.6 8M5.4 5L4 3M9 21h6m-6 0a1.5 1.5 0 01-1.5-1.5H16.5A1.5 1.5 0 0115 21h-6z"
        />
      </svg>
      <span className="ml-1">Cart {cartItemCount}</span>
    </Link>
  );
};

export default CartLink;
