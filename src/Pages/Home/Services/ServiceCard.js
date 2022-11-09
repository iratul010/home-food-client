import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ServiceCard = ({ service }) => {
  const notify = () => toast("Added your Service successfully!");
  const { _id, img, ServiceName, price, ratings, details } = service;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl  ">
      <figure className="lg:w-1/3   p-5 my-auto" style={{ height: "270px" }}>
        <PhotoProvider
          speed={() => 800}
          easing={(type) => (type === 2 ? "cubic-bezier(0.36, 0, 0.66, -0.56)" : "cubic-bezier(0.34, 1.56, 0.64, 1)")}
        >
          <PhotoView src={img}>
            <img src={img} style={{ width: "100%", height: "100%" }} className="rounded" alt="Album" />
          </PhotoView>
        </PhotoProvider>
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
          <Link className="btn btn-primary" to={`/fulldetails/${_id}`}>
            Details
          </Link>
          <Link className="btn btn-primary" onClick={notify} to="">
            Order Now!
          </Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
