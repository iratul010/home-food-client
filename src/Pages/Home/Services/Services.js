import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [seaALL, setSeaAll] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-10 rounded   overflow:hidden px-1">
      <div className="  mx-auto text-center">
        <p className="mb-5 text-1xl font-bold text-orange-300"> Meals</p>
        <h2 className="mb-5 text-2xl lg:text-4xl ">HomeFood All chooses from best recipes!</h2>
      </div>

      <div className="w-4/5  flex flex-col mx-auto gap-10">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center m-10 ">
        <Link
          to="/allservices"
          className="p-3 rounded  btn-ghost text-red-400  bg-black  hover:no-underline  hover:text-black  font-semibold text-1xl text-center  underline"
        >
          Sea More ➡
        </Link>
      </div>
    </div>
  );
};

export default Services;
