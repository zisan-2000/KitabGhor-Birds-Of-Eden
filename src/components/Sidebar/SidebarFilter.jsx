import React from "react";
import AuthorFilter from "./SidebarAuthorFilter";

const SidebarFilter = () => {
  return (
    <div className="w-full rounded bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-bold">অনুসন্ধান</h2>

      <div>
        <h3 className="mb-2 font-semibold">প্রকাশক:</h3>
        <div className="mb-4 h-64 overflow-y-auto">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            অতিক্রম
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            অবসর প্রকাশনা সংস্থা
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            ওয়াফি পাবলিকেশন
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            কেন্দ্রবিন্দু
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            চর্চা গ্রন্থ প্রকাশ
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            বর্ধমানপুর
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            বাছাইচর বুকস
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            বিজ্ঞান আইটি
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            সরলরেখা প্রকাশন
          </label>
          {/* Add more filters similarly */}
          {/* <div>
            
          </div> */}
        </div>
        <AuthorFilter />
      </div>
    </div>
  );
};

export default SidebarFilter;
