import React from "react";
import mix from "../../../assets/show/mix.png";

import { FaArrowDown } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <section>
        <div className="   her bg-base-200">
          <div className="hero-content flex-col lg:flex-row  ">
            <div className="w-1/2  relative">
              <img src={mix} alt="" />
            </div>
            <div className="w-1/2">
              <h1 className="text-5xl font-bold">
                Deliver healthy food <br /> to your door every day!
              </h1>
              <p className="py-3">
                I always try to provide healthy food sending, and for good health. Support me so that i can present more
                beautifully.
              </p>
              <button className="btn text-slate-100  bg-black rounded m-2">Eat Good Food</button>
              <button className="btn   text-red-400  bg-black rounded m-2 ">
                Learn More Details <FaArrowDown className="ml-2"></FaArrowDown>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
