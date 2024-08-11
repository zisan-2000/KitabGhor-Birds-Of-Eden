import React, { useEffect, useState } from "react";

const SortComponent = () => {
  const [selectedOption, setSelectedOption] = useState("নতুন প্রকাশিত");
  const [productCount, setProductCount] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Fetch products and count them
    fetch("http://127.0.0.1:8000/products/")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of products
        setProductCount(data.length);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bgThemeColor flex items-center justify-between p-4 shadow-md">
      <div className="text-lg font-semibold">মোট {productCount} টি পণ্য</div>
      <div className="flex items-center">
        <span className="mr-2 font-semibold">সেট করুন:</span>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="rounded border p-2"
        >
          <option value="নতুন প্রকাশিত">নতুন প্রকাশিত</option>
          <option value="বইয়ের নাম - A-Z">বইয়ের নাম - A-Z</option>
          <option value="বইয়ের নাম - Z-A">বইয়ের নাম - Z-A</option>
          <option value="মূল্য - কম হতে বেশি">মূল্য - কম হতে বেশি</option>
          <option value="মূল্য - বেশি হতে কম">মূল্য - বেশি হতে কম</option>
          <option value="ছাড় - কম হতে বেশি">ছাড় - কম হতে বেশি</option>
          <option value="ছাড় - বেশি হতে কম">ছাড় - বেশি হতে কম</option>
        </select>
      </div>
    </div>
  );
};

export default SortComponent;
