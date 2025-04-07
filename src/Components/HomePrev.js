import React from "react";
import { Link } from "react-router-dom";
import "./HomePrev.css";

const HomePrev = () => {
  return (
    <section className="section-preview">
      <div className="preview-item">
        <h3>About Us</h3>
        <p>
          We are a reliable and trusted insurance provider. Our mission is to
          help you secure your future with flexible insurance options tailored
          to your needs.
        </p>
        <Link to="/about" className="read-more-link">Read More</Link>
      </div>

      <div className="preview-item">
        <h3>Insurance Services</h3>
        <p>
          Explore our wide range of insurance plans. From life to medical and
          general coverage, we’ve got you covered for all your needs.
        </p>
        <Link to="/services" className="read-more-link">Read More</Link>
      </div>

      <div className="preview-item">
        <h3>Contact Us</h3>
        <p>
          Have questions? Reach out to us, and we'll be happy to assist you
          with your insurance needs. Our team is here for you.
        </p>
        <Link to="/contact" className="read-more-link">Read More</Link>
      </div>
    </section>
  );
};

export default HomePrev;
