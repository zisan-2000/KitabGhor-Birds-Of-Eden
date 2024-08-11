import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Button from "../Button/Button";

const ProductDetail = () => {
  const { addToCart } = useCart();

  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/products/${productId}/`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 py-4">
      <div className="mx-auto max-w-7xl p-4">
        <div className="rounded bg-white p-4 shadow">
          <div className="flex flex-col gap-20 md:flex-row">
            <img
              src={product.image}
              alt={product.name}
              className="h-auto w-full rounded border  border-slate-950 object-cover md:w-1/3"
            />
            <div className="mt-4 md:ml-8 md:mt-0">
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="mt-2">
                <strong>লেখক:</strong> {product.writer}
              </p>
              <p>
                <strong>প্রকাশনী:</strong> {product.publication}
              </p>
              <p>
                <strong>বিষয়:</strong> {product.category_name}{" "}
                {/* Assuming category_name is available */}
              </p>
              <p className="mt-4 text-xl text-red-500">
                ৳ {product.price}{" "}
                <span className="text-gray-500 line-through">
                  ৳ {product.original_price}
                </span>{" "}
                <span className="text-green-500">{product.discount}% ছাড়</span>
              </p>
              <div className="mt-4 flex items-center">
                <label className="mr-2" htmlFor="quantity">
                  পরিমাণ:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-16 rounded border px-2 py-1"
                />
              </div>
              <Button onClick={handleAddToCart} className="buttonRed mt-4">
                এখনই কিনুন
              </Button>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold">বিস্তারিত</h3>
            <p className="mt-2">{product.description}</p>
            <div className="mt-4">
              <p>
                <strong>প্রকাশনী:</strong> {product.publication}
              </p>
              <p>
                <strong>পৃষ্ঠা সংখ্যা:</strong> 160
              </p>{" "}
              {/* Add relevant field if exists */}
              <p>
                <strong>ভাষা:</strong> Bangla
              </p>{" "}
              {/* Add relevant field if exists */}
              <p>
                <strong>বাঁধাই:</strong> Hard cover
              </p>{" "}
              {/* Add relevant field if exists */}
              <p>
                <strong>ISBN:</strong> 9789845326168
              </p>{" "}
              {/* Add relevant field if exists */}
              <p>
                <strong>প্রথম প্রকাশ:</strong> 2024
              </p>{" "}
              {/* Add relevant field if exists */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
