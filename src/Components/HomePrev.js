import React from "react";
import { Link } from "react-router-dom";
import "./HomePrev.css";

const HomePrev = () => {
  return (
    <section className="home-prev">
      <h2>Discover Our Services</h2>
      <div className="preview-container">
        <div className="preview-card">
          <h3>About Us</h3>
          <p>
            Learn more about Rift Nakuru and how we prioritize your security.
          </p>
          <Link to="/about">Read More</Link>
        </div>

        <div className="preview-card">
          <h3>Insurance Services</h3>
          <p>
            Explore the wide variety of insurance services we offer to secure
            your future.
          </p>
          <Link to="/services">Read More</Link>
        </div>

        <div className="preview-card">
          <h3>Contact Us</h3>
          <p>Get in touch with us for any queries or assistance.</p>
          <Link to="/contact">Contact Now</Link>
        </div>
      </div>
    </section>
  );
};

export default HomePrev;
