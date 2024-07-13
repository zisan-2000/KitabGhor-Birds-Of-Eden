import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios
      .get("http://127.0.0.1:8000/categories/")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));

    // Fetch products
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bg-gray-100 py-4">
      <div className="mx-auto max-w-7xl p-4">
        {categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">{category.name}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((product) => product.category === category.id)
                .map((product) => (
                  <div
                    key={product.id}
                    className="rounded border bg-white p-4 shadow"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-48 w-full rounded object-cover"
                      />
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="mt-2 text-lg font-semibold">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="mt-2 font-bold text-red-500">
                      ৳ {product.price}{" "}
                      <span className="text-gray-500 line-through">
                        ৳ {product.original_price}
                      </span>{" "}
                      <span className="text-green-500">
                        {product.discount}% ছাড়
                      </span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
