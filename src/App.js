import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./index.css";

const clinicInfo = {
  name: "AKSM Physiotherapy Clinic",
  location: "J-129, J Block, Sector 10 HBC, Faridabad, Haryana 121004",
  doctor: {
    name: "Dr. KOMAL ADITI KAPOOR (PT)",
    specialization: "Musculoskeletal Physiotherapist",
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
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 p-4 text-white shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">{clinicInfo.name}</h1>
            <div className="space-x-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/services" className="hover:text-gray-300">Services</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </nav>
        <div className="text-center p-4 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-4">
          <h2 className="text-xl font-semibold text-blue-700">{clinicInfo.name}</h2>
          <p><strong>Location:</strong> {clinicInfo.location}</p>
          <p><strong>Doctor:</strong> {clinicInfo.doctor.name}</p>
          <p><strong>Specialization:</strong> {clinicInfo.doctor.specialization}</p>
          <p><strong>Timings:</strong> {clinicInfo.doctor.timings.morning} & {clinicInfo.doctor.timings.evening} ({clinicInfo.doctor.timings.closed})</p>
          <p><strong>Contact:</strong> {clinicInfo.doctor.contact}</p>
        </div>
        <Routes>
          <Route path="/" element={<Home doctor={clinicInfo.doctor.name} />} />
          <Route path="/services" element={<Services services={servicesList} doctor={clinicInfo.doctor} />} />
          <Route path="/contact" element={<Contact location={clinicInfo.location} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;