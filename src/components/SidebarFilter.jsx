import React from "react";

const SidebarFilter = () => {
  return (
    <div className="w-full rounded bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-bold">অনুসন্ধান</h2>
      <div>
        <h3 className="mb-2 font-semibold">প্রকাশক:</h3>
        <div className="mb-4 h-64 overflow-y-auto">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            আদর্শ প্রকাশনী
          </label>
          {/* Add more filters similarly */}
        </div>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">লেখক:</h3>
        <div className="mb-4 h-64 overflow-y-auto">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            ইমাম গাজ্জালী
          </label>
          {/* Add more filters similarly */}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
