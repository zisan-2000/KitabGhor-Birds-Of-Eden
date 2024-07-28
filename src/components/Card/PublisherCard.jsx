// src/components/PublisherCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const PublisherCard = ({ publisher }) => {
  return (
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
          <Button className="buttonRed">সকল বই</Button>
        </Link>
        <Button className="buttonGray">{publisher.books_count} টি বই</Button>
      </div>
    </div>
  );
};

export default PublisherCard;
