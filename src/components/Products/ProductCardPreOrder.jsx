import React from "react";
import Button from "../Button/Button";

const ProductCardPreOrder = ({ product }) => {
  return (
    <div className="rounded bg-white p-4 shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full rounded object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
      <p className="mt-2 font-bold text-red-500">
        ৳ {product.price}{" "}
        {product.discount && (
          <span className="text-gray-500 line-through">
            ৳ {product.originalPrice}
          </span>
        )}
      </p>
      {product.discount && (
        <span className="mt-2 inline-block rounded bg-green-500 px-2 py-1 text-sm text-white">
          {product.discount}% ছাড়
        </span>
      )}
      <Button className="buttonRed">প্রি অর্ডার</Button>
    </div>
  );
};

export default ProductCardPreOrder;
