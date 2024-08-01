import React, { useEffect, useState } from "react";

const CheckoutForm = ({ setFormData }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    altPhoneNumber: "",
    country: "bangladesh",
    district: "bogura",
    area: "wer",
    addressDetails: "",
  });

  useEffect(() => {
    setFormData(formValues);
  }, [formValues, setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Checkout Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">আপনার নাম (Your Name)*</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ইমেইল (Email)</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ফোন নং (Phone Number)*</label>
          <input
            type="text"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
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
            name="altPhoneNumber"
            value={formValues.altPhoneNumber}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Alt Phone Number"
          />
        </div>
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">দেশ (Country)*</label>
            <select
              name="country"
              value={formValues.country}
              onChange={handleChange}
              className="w-full rounded border p-2"
            >
              <option value="bangladesh">বাংলাদেশ</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">জেলা (District)</label>
            <select
              name="district"
              value={formValues.district}
              onChange={handleChange}
              className="w-full rounded border p-2"
            >
              <option value="bogura">বগুড়া</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              এলাকা/থানা (Area/Thana)
            </label>
            <select
              name="area"
              value={formValues.area}
              onChange={handleChange}
              className="w-full rounded border p-2"
            >
              <option value="wer">ওয়ার</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            বিস্তারিত ঠিকানা (Address Details)*
          </label>
          <textarea
            name="addressDetails"
            value={formValues.addressDetails}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Address Details"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
