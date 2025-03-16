import React from "react";

const Services = ({ services, doctor }) => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Our Services</h1>
      <p className="text-lg text-gray-700 text-center mb-4">
        All treatments are provided by our specialist <strong>{doctor.name}</strong>,
        an expert in <strong>{doctor.specialization}</strong>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{service}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
