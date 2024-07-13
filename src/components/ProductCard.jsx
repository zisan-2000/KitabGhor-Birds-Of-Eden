import React from "react";

const ProductCard = ({ product }) => {
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
      <button className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-white">
        এখনই কিনুন
      </button>
    </div>
  );
};

export default ProductCard;
