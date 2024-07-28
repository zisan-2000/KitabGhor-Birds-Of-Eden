// src/components/AuthorCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const AuthorCard = ({ author }) => {
  return (
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
      <h2 className="mt-4 text-center text-xl font-semibold">{author.name}</h2>
      <div className="mt-4 flex justify-center space-x-4">
        <Link to={`/author/${author.id}`}>
          <Button className="buttonRed">সকল বই</Button>
        </Link>
        <Button className="buttonGray">{author.books_count} টি বই</Button>
      </div>
    </div>
  );
};

export default AuthorCard;
