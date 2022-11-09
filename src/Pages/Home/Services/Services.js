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
    <div className="py-10 rounded bg-slate-50">
      <div className="  mx-auto text-center">
        <p className="mb-5 text-1xl font-bold text-orange-300"> Meals</p>
        <h2 className="mb-5 text-4xl">HomeFood All chooses from best recipes!</h2>
      </div>

      <div className="w-1/2  flex flex-col mx-auto gap-10">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}

        <Link className="w-1/3 mx-auto" to="/serviceall">
          <button className="btn ">Sea All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
