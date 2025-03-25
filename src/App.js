import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "./images/Logo.png";
import "./App.css";
import NavbarComp from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();  

 
  const backgroundColor = location.pathname === "/" ? "rgb(0, 102, 165)" : "white";

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: "100vh" }}>
      
      <div className="app-header">
        <img src={Logo} alt="Company Logo" className="app-logo" />
        <h1 className="app-heading">
          RIFT NAKURU <br />
          INSURANCE AGENCIES LTD <br />
          SECURING YOUR FUTURE
        </h1>
      </div>

      
      <NavbarComp />

 
      <div className="page-container">
        <Routes>
          <Route path="/" element={<div className="home"><Hero /><Features /></div>} />
          <Route path="/about" element={<div className="about-page"><About /></div>} />
          <Route path="/services" element={<div className="services-page"><Services /></div>} />
          <Route path="/contact" element={<div className="contact-page"><Contact /></div>} />
        </Routes>
      </div>
    </div>
  );
}


function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
