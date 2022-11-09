import React from "react";

const ServiceCard = ({ service }) => {
  const { serviceName, price, ratings, details } = service;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{price}</p>
        <p>{ratings}</p>
        <p>{details.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To list</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
