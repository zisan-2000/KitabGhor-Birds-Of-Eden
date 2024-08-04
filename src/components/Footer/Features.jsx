// Features.js
import React from "react";

const features = [
  {
    icon: "🛒",
    title: "প্রতিযোগিতামূলক মূল্য",
    description:
      "আমাদের পণ্যগুলি প্রতিযোগিতামূলক মূল্যে উপলব্ধ যাতে আপনি সেরা ডিল পান।",
  },
  {
    icon: "🌐",
    title: "সারাদেশে শিপিং",
    description:
      "৩-৭ কার্যদিবসের মধ্যে সারা দেশে দ্রুত এবং নির্ভরযোগ্য ডেলিভারি।",
  },
  {
    icon: "🔒",
    title: "নিরাপদ পেমেন্ট",
    description:
      "সবচেয়ে জনপ্রিয় এবং বিশ্বাসযোগ্য পেমেন্ট পদ্ধতি ব্যবহার করে নিরাপদে পরিশোধ করুন।",
  },
  {
    icon: "📞",
    title: "২৪/৭ গ্রাহক সেবা",
    description:
      "আমাদের ২৪ ঘন্টা গ্রাহক পরিষেবা দিয়ে যে কোনো সময় সহায়তা পান।",
  },
];

const Features = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-lg bg-white p-6 text-center shadow-lg"
        >
          <div className="mb-4 text-5xl">{feature.icon}</div>
          <h3 className="mb-3 text-2xl font-bold text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
