import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesAll = () => {
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
        <h2 className="text-2xl font-bold">ALL FOODHOME Services Here!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil quis fugit magni temporibus fugiat repellat
          labore, harum dolorem pariatur.
        </p>
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
