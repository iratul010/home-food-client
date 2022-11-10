import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import ServiceCard from "./ServiceCard";

const ServicesAll = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="   ">
      <div className="text-center py-5">
        <p className="mb-5 text-1xl font-bold text-orange-300">Meals</p>
        <h2 className="text-4xl font-bold">All Home Food Services Here!</h2>
        <p>Tasty and affordable meal kit and prepared food options for singles, couples and families.</p>
      </div>

      <div className="w-4/5 mx-auto  flex flex-col gap-10 p-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;
