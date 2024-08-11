import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io"; // Import the icon
import { Link } from "react-router-dom";

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
    <div className="bg-slate-300 py-8">
      <div className=" mx-auto max-w-7xl p-4 ">
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((product) => product.category === category.id)
                .map((product) => (
                  <div
                    key={product.id}
                    className="categoryCard transform rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-60 w-full object-cover"
                        />
                        {product.discount > 0 && (
                          <span className="absolute left-2 top-2 rounded-lg bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                            {product.discount}% ছাড়
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="mt-2 flex items-center">
                        <p className="text-lg font-bold text-red-500">
                          ৳ {product.price}
                        </p>
                        {product.original_price > product.price && (
                          <p className="ml-2 text-sm text-gray-500 line-through">
                            ৳ {product.original_price}
                          </p>
                        )}
                      </div>
                      <div className="mt-4 flex justify-center">
                        <Link
                          to={`/product/${product.id}`}
                          className="flex items-center justify-center space-x-2 rounded bg-green-400 px-3 py-1 text-sm font-semibold text-white transition duration-300 hover:bg-red-600"
                        >
                          <span>বিস্তারিত</span>
                          <IoMdArrowForward className="text-lg" />
                        </Link>
                      </div>
                    </div>
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
