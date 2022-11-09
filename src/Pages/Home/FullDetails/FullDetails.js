import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ServiceReview from "../Services/ServiceReview";

const FullDetails = () => {
  const service = useLoaderData();
  const { img, ServiceName, price, ratings, details, discount } = service;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl  ">
        <div className="lg:w-3/5    p-5 my-auto">
          <figure className="" style={{ width: "100%", height: "100%" }}>
            <img src={img} style={{ width: "100%", height: "100%" }} className="rounded" alt="Album" />
          </figure>
        </div>
        <div className="card-body lg:w-2/5 ">
          <div>
            <h2 className="card-title text-black">{ServiceName}</h2>
            <p className="  flex flex-row my-2">
              <FaCheck className="text-1xl text-yellow-400 mx-2"></FaCheck>
              <small>Price: </small>
              <small className="  font-bold mx-2"> {price}</small>
              <small>Discount: {discount}</small>
            </p>
            <p className=" flex flex-row my-2 ">
              <FaStar className="text-1xl text-yellow-400 mx-2"></FaStar>
              <small>Ratings: </small> <small className="  font-bold mx-2">{ratings + 0.3}</small>
            </p>
            <p>{details}</p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="mb-10 text-1xl font-bold text-orange-300 text-center underline">
          <h2> Reviews Here!</h2>
        </div>
        <ServiceReview></ServiceReview>
      </div>
    </div>
  );
};

export default FullDetails;
