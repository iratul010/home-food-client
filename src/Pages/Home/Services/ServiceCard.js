import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, ServiceName, price, ratings, details } = service;
  return (
    <div className="card lg:card-side bg-base-100 drop-shadow-md ">
      <figure className="lg:w-1/3   p-5 my-auto" style={{ height: "250px" }}>
        <img src={img} style={{ width: "100%", height: "100%" }} className="rounded" alt="Album" />
      </figure>
      <div className="card-body lg:w-2/3 ">
        <div>
          <h2 className="card-title text-black">{ServiceName}</h2>
          <p className="  flex flex-row my-2">
            <FaCheck className="text-1xl text-yellow-400 mx-2"></FaCheck>
            <small>Price: </small>
            <small className="  font-bold mx-2"> {price}</small>
          </p>
          <p className=" flex flex-row my-2 ">
            <FaStar className="text-1xl text-yellow-400 mx-2"></FaStar>
            <small>Ratings: </small> <small className="  font-bold mx-2">{ratings + 0.3}</small>
          </p>
          <p>{details.slice(0, 100)}...</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
