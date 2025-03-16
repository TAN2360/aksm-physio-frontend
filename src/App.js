import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./index.css";
import logo from "./assets/logo.png";

const clinicInfo = {
  name: "AKSM Physiotherapy Clinic",
  location: "J-129, J Block, Sector 10 HBC, Faridabad, Haryana 121004",
  doctor: {
    name: "Dr. KOMAL ADITI KAPOOR (PT)",
    timings: {
      morning: "9:00 AM – 1:00 PM",
      evening: "5:00 PM – 8:00 PM",
      closed: "Sunday Closed"
    },
    contact: "+91-9582719394"
  }
};

const servicesList = [
  "Short Wave Diathermy",
  "Ultrasonic Therapy",
  "Muscle Stimulation",
  "TENS, IFT",
  "Hydrocollator Packs",
  "Cold Packs",
  "Wax Bath",
  "Cupping Kinetics",
  "Postural Correction",
  "Myofascial Release Techniques",
  "Pranic Healing",
  "Post TKR Rehabilitation",
  "Post THR Rehabilitation",
  "Stroke Rehabilitation",
  "Chest Physiotherapy"
];

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-800 via-teal-600 to-gray-100 text-gray-900 flex flex-col items-center p-4 sm:p-8">
        <nav className="bg-white p-4 shadow-lg w-full max-w-6xl rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Clinic Logo" className="h-12" />
            <span className="text-lg font-bold text-teal-900">{clinicInfo.name}</span>
          </div>
          <div className="space-x-6">
            <Link to="/" className="hover:text-teal-600">Home</Link>
            <Link to="/services" className="hover:text-teal-600">Services</Link>
            <Link to="/contact" className="hover:text-teal-600">Contact</Link>
          </div>
        </nav>
        <div className="text-center max-w-3xl mt-20 bg-transparent p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-gray-100">Welcome to {clinicInfo.name}</h1>
          <p className="text-lg text-white mt-4">
            Your health and well-being are our priority. Our expert, <strong>{clinicInfo.doctor.name}</strong>, provides specialized physiotherapy services to
            help you recover and stay active.
          </p>
          <Link to="/services" className="mt-6 inline-block px-6 py-3 bg-teal-700 text-white rounded-full text-lg shadow-md hover:bg-teal-600 transition">
            View Our Services
          </Link>
        </div>
        <Routes>
          <Route path="/services" element={<Services services={servicesList} doctor={clinicInfo.doctor} />} />
          <Route path="/contact" element={<Contact location={clinicInfo.location} contact={clinicInfo.doctor.contact} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

