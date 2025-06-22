// src/pages/Contact.js
import React from 'react';
import './Contact.css';
import NavBar from './NavBar';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>This is the contact page of our application.</p>
      </div>
      </div>
  );
}

export default Contact;
