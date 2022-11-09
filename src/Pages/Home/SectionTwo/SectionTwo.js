import React from "react";

const SectionTwo = () => {
  return (
    <div className="w-full p-5 my-10 text-center">
      <h2 className="mb-5 text-2xl lg:text-5xl p-4">If You Try, Never Go Back! </h2>
      <div className="w-3/5 mx-auto ">
        <div className="stats stats-vertical lg:stats-horizontal shadow  w-4/5 mx-auto">
          <div className="stat">
            <div className="stat-title">Service Liked</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
