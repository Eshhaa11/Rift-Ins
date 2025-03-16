import React, { useState } from "react";
import "./Services.css"; // Importing CSS
import ShieldIcon from "../images/shield.png";
import LifeInsuranceIcon from "../images/life-insurance.png";
import HealthCareIcon from "../images/healthcare.png";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleProducts = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const insuranceData = [
    {
      icon: ShieldIcon,
      title: "General Insurance",
      description:
        "Wide-ranging coverage for property, business, vehicles, travel, and personal assets.",
      products: [
        {
          name: "Fire Insurance",
          details: "Covers losses due to fire and related perils.",
        },
        {
          name: "Burglary Insurance",
          details: "Protection against theft and burglary incidents.",
        },
        {
          name: "Terrorism and Political Risks",
          details: "Covers losses from terrorism or political violence.",
        },
        {
          name: "Public Liability",
          details:
            "Protects against third-party injury or property damage claims.",
        },
        {
          name: "WIBA/Employers Liability",
          details: "Covers employee work-related injuries and illnesses.",
        },
        {
          name: "Electronic Equipment",
          details: "Covers accidental damage to electronics.",
        },
        {
          name: "All Risks Insurance",
          details: "Comprehensive protection for movable assets.",
        },
        {
          name: "Machinery Breakdown",
          details: "Covers sudden breakdown of machinery",
        },
        {
          name: "Fidelity Guarantee",
          details: "Protection against employee dishonesty or fraud.",
        },
        {
          name: "Money Insurance",
          details: "Covers loss of money during transit or in premises.",
        },
        {
          name: "Goods in Transit",
          details: "Covers goods against damage while being transported.",
        },
        {
          name: "Marine Cover",
          details: "Insurance for cargo, hull, and marine liability.",
        },
        {
          name: "Crop Insurance",
          details: "Protects farmers from crop failure or damage.",
        },
        {
          name: "Livestock Insurance",
          details: "Covers losses due to livestock death or diseases.",
        },
        {
          name: "Personal Accident",
          details: "Covers accidental injuries, disability, or death.",
        },
        {
          name: "Domestic Package",
          details: "Comprehensive home coverage including household contents.",
        },
        {
          name: "Travel Insurance",
          details: "Protection during international and domestic travel.",
        },
        {
          name: "Motor Vehicle - Private",
          details:
            "Covers personal vehicles against damage, theft, and liability.",
        },
        {
          name: "Motor Vehicle - Commercial",
          details: "Covers commercial vehicles against risks.",
        },
        {
          name: "Aviation Insurance",
          details: "Protection for aircraft and aviation-related risks.",
        },
      ],
    },
    {
      icon: LifeInsuranceIcon,
      title: "Life Insurance",
      description:
        "Financial security solutions for individuals, families, and businesses for the long term.",
      products: [
        {
          name: "Group Life",
          details: "Employee group coverage for life protection.",
        },
        {
          name: "Whole Life",
          details: "Lifelong coverage with benefits for family security.",
        },
        {
          name: "Endowment Assurance",
          details: "Savings plan with life coverage and lump sum payout.",
        },
        {
          name: "Education Plan",
          details: "Savings plan for children's future education.",
        },
        {
          name: "Mortgage Protection",
          details: "Pays off mortgage in case of death or disability.",
        },
        {
          name: "Special Last Expense",
          details: "Covers funeral and related expenses.",
        },
        {
          name: "Pension Schemes",
          details:
            "Retirement savings plan with regular income after retirement.",
        },
      ],
    },
    {
      icon: HealthCareIcon,
      title: "Medical Insurance",
      description:
        "Comprehensive healthcare solutions for individuals, families, and organizations.",
      products: [
        {
          name: "Individual Health Cover",
          details: "Tailored medical cover for individuals.",
        },
        {
          name: "Group Health Cover",
          details: "Health coverage for employees under one plan.",
        },
      ],
    },
  ];

  return (
    <>
      <hr className="service-hr" />
      <div className="services-container">
        <h1>Insurance Services</h1>
        {insuranceData.map((insurance, index) => (
          <div
            key={index}
            className={`service-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleProducts(index)}
          >
            {insurance.icon && (
              <img
                src={insurance.icon}
                className="service-icon"
                alt={`${insurance.title} Icon`}
              />
            )}

            <h2>{insurance.title}</h2>
            <p>{insurance.description}</p>
            <p className="card-hint">Click to view products ↓</p>

            {activeIndex === index && (
              <div className="products">
                {insurance.products.map((product, i) => (
                  <div key={i} className="product-card">
                    <h4>{product.name}</h4>
                    <p>{product.details}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
