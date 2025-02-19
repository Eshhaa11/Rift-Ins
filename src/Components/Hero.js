import React from "react";
import "./Hero.css"; 
import heroImage from '../images/i8.png';// Import CSS for Hero component

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Shield in Uncertain Times </h1> 
        <h2> RIFT NAKURU </h2>
        <p>At Rift Insurance, we believe in securing what matters most. <br /> 
        Trust us to safeguard your future with reliability and care.</p>
        <button className="quote-button">Get a Quote</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Section" />
      </div>
    </section>
  );
};

export default Hero;
