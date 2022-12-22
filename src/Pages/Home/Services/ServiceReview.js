import React from "react";
import { FaStar, FaStarHalfAlt, FaUserCircle } from "react-icons/fa";

import { useQuery } from "@tanstack/react-query";
import LoadingData from "../../Shared/LoadingData/LoadingData";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Declaration } from "postcss";
import { toast } from "react-toastify";
const ServiceReview = ({ ServiceName }) => {
  const { user } = useContext(AuthContext);
  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reviews", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      });
      const storeData = await res.json();
      const data = storeData.filter((data) => data.serviceName.includes(ServiceName));

      return data;
    },
  });
  const commentDelete = (deleteAccount) => {
    console.log(deleteAccount);
    fetch(`http://localhost:5000/reviews/${deleteAccount?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  if (isLoading) {
    refetch();
    return <LoadingData></LoadingData>;
  }

  return (
    <div className="flex flex-col gap-10">
      {reviews.map((review) => (
        <div key={review._id} className="card lg:card-side bg-base-100 border-b rounded-none  w-4/5  mx-auto flex lg:flex-row">
          <figure className=" lg:w-1/3   p-5 my-auto" style={{ width: "140px", height: "140px" }}>
            {review?.photoUrl ? (
              <img src={review.photoUrl} style={{ width: "100%", height: "100%" }} className="rounded-full" alt="Album" />
            ) : (
              <FaUserCircle style={{ width: "100%", height: "100%" }} />
            )}
          </figure>

          <div className=" card p-4 w-2/3 flex flex-col justify-center  m-4">
            <div className=" flex  flex-row my-2 p-0 m-0">
              <small className="font-semibold">Ratings: </small>
              <FaStar className=" text-1xl   text-lg-1xl text-yellow-400 mx-1"></FaStar>
              <FaStar className="text-1xl text-yellow-400 mx-1"></FaStar>
              <FaStar className="text-1xl text-yellow-400 mx-1"></FaStar>
              <FaStar className="text-1xl text-yellow-400 mx-1"></FaStar>
              <FaStarHalfAlt className="text-1xl text-yellow-400 mx-2"></FaStarHalfAlt>
              <small className="font-bold mx-2"> (5)</small>
            </div>
            <p>{review.message}.</p>
            <h2 className=" text-zinc-400 card-title">By {review?.customer}</h2>
            <p className="text-zinc-400">{review.time}</p>
          </div>
          {review?.email === user?.email && (
            <div className="w-100 max-auto flex justify-end items-end">
              <button onClick={() => commentDelete(review)} className=" btn  btn-ghost w-15  ">
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceReview;
