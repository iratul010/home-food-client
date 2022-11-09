import React from "react";
import imgOne from "../../../assets/show/1.jpg";
import imgTwo from "../../../assets/show/2.jpg";
import imgThree from "../../../assets/show/3.jpg";
const SectionOne = () => {
  return (
    <div className="my-5">
      <div className="text-center">
        <p className="mb-5 text-1xl font-bold text-orange-300">How it Works</p>
        <h2 className="mb-5 text-2xl lg:text-5xl p-4">Your daily dose of health in 3 simple steps</h2>
      </div>
      <div className="flex flex-col w-4/5 mx-auto gap-10 p-5">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-2/5   p-5 my-auto" style={{ height: "270px" }}>
            <img src={imgOne} style={{ width: "100%", height: "100%" }} className="rounded" alt="Album" />
          </figure>
          <div className="card-body  w-3/5">
            <p className="text-5xl text-zinc-400 font-bold">01</p>
            <h2 className="card-title">Tell us what you like</h2>
            <p>
              Never again waste time thinking about what to eat! HOMEFOOD AI will create a 100% personalized weekly meal plan just
              for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!
            </p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body w-3/5">
            <p className="text-5xl text-zinc-400 font-bold">02</p>
            <h2 className="card-title">Approve your weekly meal plan</h2>
            <p>
              Once per week, approve the meal plan generated for you by HOMEFOOD AI. You can change ingredients, swap entire
              meals, or even add your own recipes.
            </p>
          </div>
          <figure className="lg:w-2/5   p-5 my-auto" style={{ height: "270px" }}>
            <img src={imgTwo} style={{ width: "100%", height: "100%" }} className="rounded" alt="Album" />
          </figure>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-2/5   p-5 my-auto" style={{ height: "270px" }}>
            <img src={imgThree} style={{ width: "100%", height: "100%" }} className="rounded" alt="Album" />
          </figure>
          <div className="card-body  w-3/5">
            <p className="text-5xl text-zinc-400 font-bold">03</p>
            <h2 className="card-title">Receive meals at convenient time</h2>
            <p>
              Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best
              for you. You can change delivery schedule and address daily!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
