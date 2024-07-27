import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button1 from "../components/Button/Button1";
import Button2 from "../components/Button/Button2";
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
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-3xl font-bold">সকল প্রকাশক</h1>
          <div className="">
            <Search />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {publishers.map((publisher) => (
            <div key={publisher.id} className="rounded bg-white p-4 shadow">
              {publisher.image ? (
                <img
                  src={publisher.image}
                  alt={publisher.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-300"></div>
              )}
              <h2 className="mt-4 text-center text-xl font-semibold">
                {publisher.name}
              </h2>
              <div className="mt-4 flex justify-center space-x-4">
                <Link to={`/publisher/${publisher.id}`}>
                  <Button1>সকল বই</Button1>
                </Link>
                <Button2>{publisher.books_count} টি বই</Button2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublishersPage;
