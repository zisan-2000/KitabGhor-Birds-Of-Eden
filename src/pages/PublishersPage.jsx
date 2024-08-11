// src/pages/PublishersPage.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import PublisherCard from "../components/Card/PublisherCard";
import Search from "../components/SearchBox/Search";

const PublishersPage = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/publishers/")
      .then((response) => setPublishers(response.data))
      .catch((error) => console.error("Error fetching publishers:", error));
  }, []);

  return (
    <div className="bgMain py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-3xl font-bold">সকল প্রকাশক</h1>
          <div>
            <Search />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {publishers.map((publisher) => (
            <PublisherCard key={publisher.id} publisher={publisher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublishersPage;
