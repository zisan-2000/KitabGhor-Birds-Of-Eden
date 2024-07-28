// src/components/CheckoutForm.jsx
import React from "react";

const CheckoutForm = () => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Checkout Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">আপনার নাম (Your Name)*</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ইমেইল (Email)</label>
          <input
            type="email"
            className="w-full rounded border p-2"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ফোন নং (Phone Number)*</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="+88"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            বিকল্প ফোন নং (Alt Phone Number)
          </label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Alt Phone Number"
          />
        </div>
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">দেশ (Country)*</label>
            <select className="w-full rounded border p-2">
              <option>বাংলাদেশ</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">জেলা (District)</label>
            <select className="w-full rounded border p-2">
              <option>ঢাকা</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              এলাকা/থানা (Area/Thana)
            </label>
            <select className="w-full rounded border p-2">
              <option>আশকোনা</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            বিস্তারিত ঠিকানা (Address Details)*
          </label>
          <textarea
            className="w-full rounded border p-2"
            placeholder="Address Details"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
