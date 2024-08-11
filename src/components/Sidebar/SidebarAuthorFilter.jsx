import React, { useEffect, useState } from "react";

const AuthorFilter = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/writers/")
      .then((response) => response.json())
      .then((data) => setAuthors(data))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  return (
    <div>
      <h3 className="mb-2 font-semibold">লেখক:</h3>
      <div className="mb-4 h-64 overflow-y-auto">
        {authors.length > 0 ? (
          authors.map((author) => (
            <label className="block" key={author.id}>
              <input type="checkbox" className="mr-2" />
              {author.name}
            </label>
          ))
        ) : (
          <p>Loading authors...</p>
        )}
      </div>
    </div>
  );
};

export default AuthorFilter;
