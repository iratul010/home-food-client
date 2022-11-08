import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>services {services.length} </h2>
      <div>
        {services.map((service) => (
          <p key={service._id} className="text-red-300">
            {service.serviceName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Services;
