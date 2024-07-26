// Features.js
import React from "react";

const features = [
  {
    icon: "৳", // Use the appropriate icon here
    title: "সঠিক মূল্য",
    description:
      "সকল পণ্য তুলনামূলকভাবে বাজারের সমমূল্যে বা এর চেয়ে কম মূল্যে বিক্রয় করা হয়",
  },
  {
    icon: "🚚", // Use the appropriate icon here
    title: "ডেলিভারি",
    description:
      "বাংলাদেশের যে-কোন প্রান্তে ২-৫ দিনের মধ্যে পণ্য পৌঁছে দেওয়া হয়",
  },
  {
    icon: "💳", // Use the appropriate icon here
    title: "নিরাপদ পেমেন্ট",
    description:
      "বাংলাদেশের সবচেয়ে জনপ্রিয় ও নিরাপদ পেমেন্ট পদ্ধতি মাধ্যমে পেমেন্টের সুযোগ",
  },
  {
    icon: "👥", // Use the appropriate icon here
    title: "২৪/৭ কাস্টমার কেয়ার",
    description: "সর্বক্ষনিক কেয়ারটেকার জন্য সার্বক্ষণিক সহযোগিতা",
  },
];

const Features = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <div className="mb-4 text-4xl">{feature.icon}</div>
          <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
