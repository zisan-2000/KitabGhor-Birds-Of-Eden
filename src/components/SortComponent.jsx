import React, { useState } from "react";

const SortComponent = () => {
  const [selectedOption, setSelectedOption] = useState("নতুন প্রকাশিত");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-pink flex items-center justify-between p-4 shadow-md">
      <div className="text-lg font-semibold">মোট ৩০ টি পণ্য</div>
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
