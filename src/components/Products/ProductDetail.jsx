import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Button from "../Button/Button";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [writer, setWriter] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [category, setCategory] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleImageClick = () => {
    if (product.pdf) {
      window.open(product.pdf, "_blank");
    } else {
      alert("No PDF available for this product.");
    }
  };

  useEffect(() => {
    // Fetch product details
    axios
      .get(`http://127.0.0.1:8000/products/${productId}/`)
      .then((response) => {
        setProduct(response.data);
        // Fetch writer details
        axios
          .get(`http://127.0.0.1:8000/writers/${response.data.writer}/`)
          .then((writerResponse) => setWriter(writerResponse.data))
          .catch((error) => console.error("Error fetching writer:", error));
        // Fetch publisher details
        axios
          .get(`http://127.0.0.1:8000/publishers/${response.data.publisher}/`)
          .then((publisherResponse) => setPublisher(publisherResponse.data))
          .catch((error) => console.error("Error fetching publisher:", error));
        // Fetch category details
        axios
          .get(`http://127.0.0.1:8000/categories/${response.data.category}/`)
          .then((categoryResponse) => setCategory(categoryResponse.data))
          .catch((error) => console.error("Error fetching category:", error));
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product || !writer || !publisher || !category) {
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
              className="h-auto w-full cursor-pointer rounded border border-slate-950 object-cover md:w-1/3"
              onClick={handleImageClick}
              title="Please click to view the PDF"
            />
            <div className="mt-4 md:ml-8 md:mt-0">
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="mt-2">
                <strong>লেখক:</strong> {writer.name}
              </p>
              <p>
                <strong>প্রকাশনী:</strong> {publisher.name}
              </p>
              <p>
                <strong>বিষয়:</strong> {category.name}
              </p>
              <p className="mt-4 text-xl text-red-500">
                ৳ {product.price}{" "}
                <span className="text-gray-500 line-through">
                  ৳ {product.original_price}
                </span>{" "}
                <span className="text-green-500">{product.discount}% ছাড়</span>
              </p>
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
                <strong>প্রকাশনী:</strong> {publisher.name}
              </p>
              <p>
                <strong>পৃষ্ঠা সংখ্যা:</strong> 160
              </p>{" "}
              <p>
                <strong>ভাষা:</strong> Bangla
              </p>{" "}
              <p>
                <strong>বাঁধাই:</strong> Hard cover
              </p>{" "}
              <p>
                <strong>ISBN:</strong> 9789845326168
              </p>{" "}
              <p>
                <strong>প্রথম প্রকাশ:</strong> 2024
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
