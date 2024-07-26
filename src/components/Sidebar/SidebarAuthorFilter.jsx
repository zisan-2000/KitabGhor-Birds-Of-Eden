import React from "react";

const AuthorFilter = () => {
  return (
    <div>
      <h3 className="mb-2 font-semibold">লেখক:</h3>
      <div className="mb-4 h-64 overflow-y-auto">
        <label className="block">
          <input type="checkbox" className="mr-2" />
          আয়মান সাইয়িদ আব্দুল ফাত্তাহ মাইন
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          আসওয়াত ডামোরান
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          ইসমাত আরা জলি
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          কামরুজ্জামান রনি
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          চেমসায়়েট নিঊষ
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          জাইয়া ফেরদৌস নিয়া
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          টিম বিজ়ন ক্লাস
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          নাডিয়া হেইডেন
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          নিয়াজ মাসুদ রাহাত
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          বিজ্ঞান আইটি
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          মাসুদ আনোয়ার
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          মুফতি শরিফুল ইসলাম নাসিম
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          মোঃ শাকিল মূষা
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          মোহাম্মদ নসরত হোসেন
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          আয়নান মিফলিস
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          সাইফোল ইসলাম নাসিম
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          হাসান খুরশীদ রুমি
        </label>
        {/* Add more filters similarly */}
      </div>
    </div>
  );
};

export default AuthorFilter;
