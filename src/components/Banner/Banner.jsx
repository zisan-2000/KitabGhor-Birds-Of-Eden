// Banner.js

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import bannerImage1 from "../../assets/banner.jpg";
import bannerImage2 from "../../assets/banner01.jpg";
import bannerImage3 from "../../assets/banner02.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      image: bannerImage1,
      title: "বার্ডস অফ ইডেন বুকস্টোরে স্বাগতম",
      subtitle: "জ্ঞান জগতের প্রবেশদ্বার",
      description:
        "বিভিন্ন ঘরানা এবং বিভাগের হাজার হাজার বই আবিষ্কার করুন। কল্পনা থেকে অ-কল্পনা, প্রতিটি পাঠকের জন্য কিছু না কিছু আছে।",
      buttons: [
        {
          text: "এখনই কিনুন",
          link: "islamic-products",
          style: "bg-orange-500 hover:bg-orange-600",
        },
        {
          text: "আরও জানুন",
          link: "/",
          style: "bg-green-500 hover:bg-gray-200 text-black",
        },
      ],
    },
    {
      image: bannerImage2,
      title: "আমাদের বাছাইকৃত সংগ্রহগুলি অন্বেষণ করুন",
      subtitle: "আমাদের হ্যান্ডপিকড নির্বাচনগুলিতে ডুব দিন",
      description:
        "আপনি সর্বশেষ বেস্টসেলার বা সময়হীন ক্লাসিক খুঁজছেন কিনা, আমাদের সংগ্রহগুলি মুগ্ধ এবং অনুপ্রাণিত করার জন্য ডিজাইন করা হয়েছে।",
      buttons: [
        {
          text: "সংগ্রহগুলি ব্রাউজ করুন",
          link: "category",
          style: "bg-orange-500 hover:bg-orange-600",
        },
        {
          text: "আমাদের সম্প্রদায়ে যোগ দিন",
          link: "blogList",
          style: "bg-green-500 hover:bg-gray-200 text-black",
        },
      ],
    },
    {
      image: bannerImage3,
      title: "আপনার পরবর্তী দুর্দান্ত পাঠটি খুঁজুন",
      subtitle: "বই যা আলোকিত এবং বিনোদন দেয়",
      description:
        "আমাদের বিস্তৃত ক্যাটালগ এমন বই অফার করে যা প্রতিটি স্বাদের জন্য উপযুক্ত। আপনি থ্রিলার, রোম্যান্স, বা স্ব-উন্নতি মধ্যে থাকুন না কেন, বার্ডস অফ ইডেন আপনার জন্য নিখুঁত বই রয়েছে।",
      buttons: [
        {
          text: "আরো আবিষ্কার কর",
          link: "#discover",
          style: "bg-orange-500 hover:bg-orange-600",
        },
        {
          text: "যোগাযোগ করুন",
          link: "#contact",
          style: "bg-green-500 hover:bg-gray-200 text-black",
        },
      ],
    },
  ];

  return (
    <div className="relative h-[90vh] w-full">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
