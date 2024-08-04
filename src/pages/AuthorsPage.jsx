// src/pages/AuthorsPage.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import AuthorCard from "./../components/Card/AuthorCard";
import Search from "./../components/SearchBox/Search";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/writers/")
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  return (
    <div className="bg-slate-300 py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-3xl font-bold">সকল লেখক</h1>
          <div>
            <Search />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorsPage;
