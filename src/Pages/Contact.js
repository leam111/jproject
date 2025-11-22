import React, { useState } from "react";
import "./FeedbackForm.css";
import Socials from "./Socials";
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your feedback was submitted!");
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (

    <>
    <Socials/>

    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

    </div>
</>

  );
};

export default FeedbackForm;
