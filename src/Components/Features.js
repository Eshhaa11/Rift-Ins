import React from "react";
import "./Features.css";
import GetAQuote from "./GetAQuote";
import customizablePlansIcon from "../images/task.png";
import affordableRatesIcon from "../images/money.png";
import supportIcon from "../images/24-7.png";
import claimsIcon from "../images/claim.png";

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Rift Nakuru Insurance Agency?</h2>
      <div className="features-container">
        <div className="feature-item">
          <img
            src={customizablePlansIcon}
            alt="Customizable Plans Icon"
            className="feature-icon"
          />
          <h3>Customizable Plans</h3>
          <p>
            We offer a range of flexible insurance plans that suit your needs.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={affordableRatesIcon}
            alt="Affordable Rates Icon"
            className="feature-icon"
          />
          <h3>Affordable Rates</h3>
          <p>
            Get the best value with competitive pricing for all our services.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={supportIcon}
            alt="24/7 Support Icon"
            className="feature-icon"
          />
          <h3>24/7 Support</h3>
          <p>
            We're available round-the-clock to assist you with any questions or
            concerns.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={claimsIcon}
            alt="Easy Claims Icon"
            className="feature-icon"
          />
          <h3>Easy Claims</h3>
          <p>Our simple process ensures quick and efficient claims handling.</p>
        </div>
      </div>

      <GetAQuote />
    </section>
  );
};

export default Features;
