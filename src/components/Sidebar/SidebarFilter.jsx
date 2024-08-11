import React, { useEffect, useState } from "react";
import AuthorFilter from "./SidebarAuthorFilter";

const SidebarFilter = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/publishers/")
      .then((response) => response.json())
      .then((data) => setPublishers(data))
      .catch((error) => console.error("Error fetching publishers:", error));
  }, []);

  return (
    <div className="bgThemeColor p-4">
      <div className="w-full rounded bg-white p-4 shadow-md ">
        <h2 className="mb-4 text-xl font-bold">অনুসন্ধান</h2>

        <div>
          <h3 className="mb-2 font-semibold">প্রকাশক:</h3>
          <div className="mb-4 h-64 overflow-y-auto">
            {publishers.length > 0 ? (
              publishers.map((publisher) => (
                <label className="block" key={publisher.id}>
                  <input type="checkbox" className="mr-2" />
                  {publisher.name}
                </label>
              ))
            ) : (
              <p>Loading publishers...</p>
            )}
          </div>
          <AuthorFilter />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
