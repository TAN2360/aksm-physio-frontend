import React from "react";

const Home = ({ doctor }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to AKSM Physiotherapy Clinic
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Your health and well-being are our priority. Our expert, <strong>{doctor}</strong>,
        provides specialized physiotherapy services to help you recover and stay active.
      </p>
      <a href="/services" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full text-lg shadow-md hover:bg-blue-500 transition">
        View Our Services
      </a>
    </div>
  );
};

export default Home;
