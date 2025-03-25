import React from "react";
import  "./Contact.css";

const Contact = () => { 
  return (
    <div className="contact">
      <hr className="custom-hr" />
      <h1 className="contact-heading">CONTACT US</h1>
      <p>Reach Out For Any Queries</p>
      <p className="help">We are here to help you with any concerns </p>
      <p className="contact-info">
      <i className="fa fa-phone" aria-hidden="true"></i> 
       Phone: +254 722 200 000
     </p>
     <form className="form">
     <p className="title">Get a Quote</p>
     <p className="message">
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
        type= "text"
        name="email"
        className="input"
        placeholder="Email"
        />
      </label>


      <label>
        <input
        type= "telephone"
        name= "telephone"	
        className="input"
        placeholder="Phone Number"
        />
      </label>

      <label>
        <text area 
        name="message"

      </label>
      </form>
    </div>
  );
};

export default Contact;  
