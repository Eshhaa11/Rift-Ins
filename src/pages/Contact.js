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
            <p>
              <i class="fas fa-map-marker-alt"></i> Location: Rift Nakuru Insurance Agencies Ltd < br/> 
               Section 58 < br/>
               Nakuru, Kenya
            </p>
          </div>

          <div class="map-container">
            <iframe
              title="Rift Nakuru Insurance Agencies Ltd Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7682655124263!2d36.08213537447766!3d-0.2870017353492995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298deb92b6d563%3A0x1db7e4e2fb554957!2sRift%20Nakuru%20Insurance%20Agencies%20Ltd!5e0!3m2!1sen!2ske!4v1742904595965!5m2!1sen!2ske"
               width="600"
               height="450"
               style={{ border: 0 }}
               allowfullscreen="" 
               loading="lazy"
               referrerpolicy="no-referrer-when-downgrade">
              </iframe>

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
