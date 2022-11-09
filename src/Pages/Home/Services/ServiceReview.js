import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import img from "../../../assets/show/1.jpg";
const ServiceReview = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="card lg:card-side bg-base-100 shadow-xl w-4/5  mx-auto flex lg:flex-row">
        <figure className="lg:w-1/3   p-5 my-auto" style={{ width: "140px", height: "140px" }}>
          <img src={img} style={{ width: "100%", height: "100%" }} className="rounded-full" alt="Album" />
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
          <p> "Click the button to listen on Spotiwhy app."</p>
          <h2 className=" text-zinc-400 card-title">By Ratul Islam</h2>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-4/5  mx-auto flex lg:flex-row">
        <figure className="lg:w-1/3   p-5 my-auto" style={{ width: "140px", height: "140px" }}>
          <img src={img} style={{ width: "100%", height: "100%" }} className="rounded-full" alt="Album" />
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
          <p> "Click the button to listen on Spotiwhy app."</p>
          <h2 className=" text-zinc-400 card-title">By Ratul Islam</h2>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-4/5  mx-auto flex lg:flex-row">
        <figure className="lg:w-1/3   p-5 my-auto" style={{ width: "140px", height: "140px" }}>
          <img src={img} style={{ width: "100%", height: "100%" }} className="rounded-full" alt="Album" />
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
          <p> "Click the button to listen on Spotiwhy app."</p>
          <h2 className=" text-zinc-400 card-title">By Ratul Islam</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceReview;
