import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="bgMain">
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-3xl font-bold">বিষয়সমূহ</h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className="mb-10 rounded-md bg-white p-4 text-center shadow-md"
            >
              <p className="p-10 text-xl">{category.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
