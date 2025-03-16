import React from "react";

const Contact = ({ location }) => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-4">
        Visit us at: <strong>{location}</strong>
      </p>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border rounded-md" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
