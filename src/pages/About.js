import React from "react";
import "./About.css";
import purviImg from "../assets/purvi.jpg";
import yashviImg from "../assets/yashvi.jpg";
import amosImg from "../assets/amos.jpg";
import ankitImg from "../assets/ankit.jpg";
import morrisImg from "../assets/morris.jpg";
import kenindiaImg from "../assets/kenindia.png";
import GeminiaImg from "../assets/Geminia.jpg";
import FirstAssuranceImg from "../assets/FIRST-ASSUARANCE-1-1.png";
import MayfairImg from "../assets/Mayfair.png";
import OccidentalImg from "../assets/Occidental.png";
import MUImg from "../assets/MUA-Logo.png";
import APAImg from "../assets/Apa.png";

function About() {
  return (
    <div className="about">
      <hr className="custom-hr" />
      <h1 className="about-heading">OUR AGENCY</h1>
      <p>
        Rift Nakuru Insurance Agencies Limited is a registered Insurance Agency
        managed by <br /> qualified & highly experienced personnel commited to
        providing outstanding level of <br /> international standard service to
        our corporate & individual clientels.
        <br />
        It was founded by Late Niru Shah & Late Haren Shah in 1978
      </p>
      <p>
        Our commitment is to provide quality professional service to our
        clients. <br />
        The Team have a wide experience in providing various insurance policies{" "}
        <br />
        to the agriculture, real estate, education, manufacturing and trading
        sectors.
      </p>
      <p>
        Our Company is duly registered with the Insurance Regulatory Authority{" "}
        <br />
        with license renewed up to December 2025
      </p>

      <div className="section-divider"></div>

      <h2 className="misson-statement">MISSION STATEMENT</h2>
      <p>
        Rift Nakuru Insurance Agencies Ltd is a professional company providing{" "}
        <br /> exceptional insurance solutions through comprehensive risk
        assessments, <br /> dedicated customer service, and a commitment to
        exceeding expectations, <br />
        ensuring clients recieve the right coverage at the most competitive
        rates.
      </p>

      <div className="section-divider"></div>

      <h2 className="vision-statement">VISION STATEMENT</h2>
      <p>
        Our Vision is to be the leading provider of <br />
        insurance solutions in the region, <br />
        with a commitment to <br />
        providing clients with the best possible <br />
        insurance coverage at the most competitive rates.
      </p>

      <div className="section-divider"></div>

      <h2 className="motto">MOTTO</h2>
      <p>
        The company believes in the motto <br />
        "Securing your future" where our rates and services are tough to beat,{" "}
        <br />
        and where security is a priority, not an option.
      </p>

      <div className="section-divider"></div>

      <h2 className="our-team">Our Team</h2>
      <h3 className="team-member">BOARD OF DIRECTORS/SHAREHOLDERS</h3>

      <p>Ms Purvi N. Shah - Director/Shareholder</p>
      <p>Ms Yashvi N. Shah - Director/Shareholder</p>
      <p>Mrs Raksha H. Shah - Director/Shareholder</p>
      <p>Mr Durgesh R. Shah - Shareholder</p>

      <div className="section-divider"></div>

      <h3 className="team-member">SENIOR MANAGEMENT</h3>

      <div className="team-cards">
        <div className="team-card">
          <img src={purviImg} alt="Purvi N. Shah" className="team-img" />
          <p className="name">Purvi N. Shah</p>
          <p className="position">CEO/Managing Director</p>
        </div>

        <div className="team-card">
          <img src={yashviImg} alt="Yashvi N. Shah" className="team-img" />
          <p className="name">Yashvi N. Shah</p>
          <p className="position">COO/Operations Director</p>
        </div>

        <div className="team-card">
          <img src={amosImg} alt="Amos Mirasi" className="team-img" />
          <p className="name">Amos Mirasi</p>
          <p className="position">General Manager</p>
        </div>

        <div className="team-card">
          <img src={morrisImg} alt="Morris M. Kitoo" className="team-img" />
          <p className="name">Morris M. Kitoo</p>
          <p className="position">Financial Controller</p>
        </div>

        <div className="team-card">
          <img src={ankitImg} alt="Ankit Kothari" className="team-img" />
          <p className="name">Ankit Kothari</p>
          <p className="position">CMO/Claims In Charge</p>
        </div>
      </div>

      <div className="section-divider"></div>
      <h2 className="partners-heading">OUR PARTNERS</h2>
<div className="partners-logos">
    <div className="partner">
        <img src={kenindiaImg} alt="Kenindia" className="partner-logo" />
        <p className="partner-name">Kenindia</p>
    </div>

    <div className="partner">
        <img src={GeminiaImg} alt="Geminia" className="partner-logo" />
        <p className="partner-name">Geminia</p>
    </div>

    <div className="partner">
        <img src={FirstAssuranceImg} alt="First Assurance" className="partner-logo" />
        <p className="partner-name">First Assurance</p>
    </div>

    <div className="partner">
        <img src={MayfairImg} alt="Mayfair" className="partner-logo" />
        
    </div>

    <div className="partner">
        <img src={OccidentalImg} alt="Occidental" className="partner-logo logo-5" />
        
    </div>

    <div className="partner">
        <img src={MUImg} alt="MUA" className="partner-logo logo-6" />
        
    </div>

    <div className="partner">
        <img src={APAImg} alt="APA" className="partner-logo logo-7" />
        
    </div>
</div>


    </div>
  );
}

export default About;
