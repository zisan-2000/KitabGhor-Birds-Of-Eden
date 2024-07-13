import React from "react";
import bannerImage1 from "../assets/banner1.png"; // Replace with your actual image paths
import bannerImage2 from "../assets/banner2.png"; // Replace with your actual image paths
import bannerImage3 from "../assets/banner3.png"; // Replace with your actual image paths

const Banner = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="relative">
            <img
              src={bannerImage1}
              alt="Banner 1"
              className="h-auto w-full rounded-md"
            />
            <div className="absolute bottom-4 left-4 rounded-md bg-white bg-opacity-75 p-2">
              <h2 className="text-xl font-bold">ভাষা ও অভিধান</h2>
              <p className="text-sm">বিষয়ক সকল বইয়ে সর্বোচ্চ 45% OFF</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <img
              src={bannerImage2}
              alt="Banner 2"
              className="h-auto w-full rounded-md"
            />
            <div className="absolute bottom-4 left-4 rounded-md bg-white bg-opacity-75 p-2">
              <h2 className="text-xl font-bold">আত্মশুদ্ধি প্রোগ্রাম</h2>
              <p className="text-sm">৩০% নিশ্চিত ছাড়</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={bannerImage3}
              alt="Banner 3"
              className="h-auto w-full rounded-md"
            />
            <div className="absolute bottom-4 left-4 rounded-md bg-white bg-opacity-75 p-2">
              <h2 className="text-xl font-bold">ইজারা চুক্তি</h2>
              <p className="text-sm">মুসলিম আইন এবং তার বাস্তব প্রয়োগ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
