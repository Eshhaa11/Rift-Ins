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
      <p className="message">
        Fill in the form below and we will get back to you with a quote.
      </p>

      <label>
        <input
          type="text"
          name="fullName"
          className="input"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        <input
          type="tel"
          name="phone"
          className="input"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        <select
          name="insuranceType"
          className="input"
          placeholder="Select"
          value={formData.insuranceType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Insurance Type
          </option>
          <option value="General Insurance">General Insurance</option>
          <option value="Life Insurance">Life Insurance</option>
          <option value="Medical Insurance">Medical Insurance</option>
        </select>
      </label>

      <button type="submit" className="submit">
        Request Quote <span className="icon">🛡️</span>
      </button>
    </form>
  );
};

export default GetAQuote;
