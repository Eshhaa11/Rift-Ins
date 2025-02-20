import React, { useState } from "react";
import "./GetAQuote.css"; // Ensure this file exists

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    insuranceType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quote request submitted for ${formData.insuranceType}!`);
    setFormData({ fullName: "", phone: "", email: "", insuranceType: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Get a Quote</p>
      <p className="message">Fill in the form below and we’ll get back to you with a quote.</p>

      <label>
        <input type="text" name="fullName" className="input" placeholder="" value={formData.fullName} onChange={handleChange} required />
        <span>Full Name</span>
      </label>

      <label>
        <input type="tel" name="phone" className="input" placeholder="" value={formData.phone} onChange={handleChange} required />
        <span>Phone Number</span>
      </label>

      <label>
        <input type="email" name="email" className="input" placeholder="" value={formData.email} onChange={handleChange} required />
        <span>Email</span>
      </label>

      <label>
        <select name="insuranceType" className="input" value={formData.insuranceType} onChange={handleChange} required>
          <option value="" disabled>Select Insurance Type</option>
          <option value="General Insurance">General Insurance</option>
          <option value="Life Insurance">Life Insurance</option>
          <option value="Medical Insurance">Medical Insurance</option>
        </select>
        <span>Insurance Type</span>
      </label>

      <button type="submit" className="submit">Request Quote</button>
    </form>
  );
};

export default GetAQuote;
