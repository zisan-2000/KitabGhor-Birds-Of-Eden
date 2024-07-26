import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/SearchBox/Search";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/writers/")
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-3xl font-bold">সকল লেখক</h1>
          <div className="">
            <Search />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => (
            <div key={author.id} className="rounded bg-white p-4 shadow">
              {author.image ? (
                <img
                  src={author.image}
                  alt={author.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-300"></div>
              )}
              <h2 className="mt-4 text-center text-xl font-semibold">
                {author.name}
              </h2>
              <div className="mt-4 flex justify-center space-x-4">
                <Link to={`/author/${author.id}`}>
                  <button className="rounded bg-red-500 px-4 py-2 text-white">
                    সকল বই
                  </button>
                </Link>
                <span className="rounded bg-gray-200 px-4 py-2">
                  {author.books_count} টি বই
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorsPage;
