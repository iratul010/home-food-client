import React, { useContext } from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import AddComments from "../AddComments/AddComments";
import ServiceReview from "../Services/ServiceReview";

const FullDetails = () => {
  const { _id, img, ServiceName, price, ratings, details, discount } = useLoaderData();

  const { user } = useContext(AuthContext);

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
      <div className="my-10 py-10">
        <div className="mb-10 text-1xl font-bold text-orange-300 text-center underline">
          <h2 className="text-3xl">Food Reviews!</h2>
        </div>
        <ServiceReview></ServiceReview>
      </div>
      {user?.uid ? (
        <div className=" p-10 w-2/3 mx-auto">
          <p className="text-start mx-0">Add to Comments:</p>
          <AddComments id={_id} serviceName={ServiceName}></AddComments>
        </div>
      ) : (
        <>
          <Link to="/login">Please login to add a review</Link>
        </>
      )}
    </div>
  );
};

export default FullDetails;
