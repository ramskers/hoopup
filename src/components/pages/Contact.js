import React, { useState, useEffect } from "react";
import "../Contact.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function Contact() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    await setDoc(doc(db, "Contact", details.name), {
      name: details.name,
      email: details.email,
      message: details.message,
    });
    alert(
      "Your message has been submitted! Someone will be in touch shortly👍"
    );
    setDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-img">
      <form className="contact-form">
        <h1 className="contact-header">Contact Us 🤳</h1>
        <label className="contact-label">Name</label>
        <input
          id="name"
          name="name"
          className="contact-input"
          placeholder="Name"
          value={details.name}
          onChange={handleChange}
        />

        <label className="contact-label">Email</label>
        <input
          id="email"
          name="email"
          className="contact-input"
          placeholder="Email"
          value={details.email}
          onChange={handleChange}
        />

        <label className="contact-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="contact-text-area"
          placeholder="Message"
          value={details.message}
          onChange={handleChange}
        ></textarea>

        <button className="contact-btn" onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
