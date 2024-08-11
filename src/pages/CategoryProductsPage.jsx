import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryProductsPage = () => {
  const { categoryId } = useParams(); // Get the category ID from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryId]);

  return (
    <div className="bgMain">
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-3xl font-bold">Products</h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="mb-10 rounded-md bg-white p-4 text-center shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 h-40 w-full object-cover"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-bold">{product.price} ৳</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsPage;
