// src/pages/About.js
import React from 'react';
import './Services.css';
import NavBar from './NavBar';

function Services() {
  return (
    <div>
      <NavBar />
      <div className="services-container">
        <h1>Services</h1>
        <p>As of now, only booking tickets and viewing them. Book at your risk cuz I haven't implemented the refunds feature yet xD</p>
      </div>
      </div>
  );
}

export default Services;
