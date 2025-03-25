import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <hr className="custom-hr" />
      <h1 className="contact-heading">CONTACT US</h1>
      <p>Reach Out For Any Queries</p>
      <p className="help">We are here to help you with any concerns </p>
      <p className="contact-info">
        <div class="contact-container">
          <div class="contact-info">
            <p>
              <i class="fas fa-phone"></i> Phone:{" "}
              <a href="tel:+254712345678">+254 712 345 678</a>
            </p>
            <p>
              <i class="fas fa-envelope"></i> Email:{" "}
              <a href="mailto:info@riftinsurance.com">info@riftinsurance.com</a>
            </p>
            
          </div>
        </div>
      </p>
      <form className="contact-form">
        <p className="messagee">
          Fill in the form below and we will get back to you soon.
        </p>

        <label>
          <input
            type="text"
            name="fullName"
            className="input"
            placeholder="Full Name"
          />
        </label>

        <label>
          <input
            type="text"
            name="email"
            className="input"
            placeholder="Email"
          />
        </label>

        <label>
          <input
            type="telephone"
            name="telephone"
            className="input"
            placeholder="Phone Number"
          />
        </label>

        <label>
          <textarea name="message" className="input" placeholder="Message" />
        </label>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
