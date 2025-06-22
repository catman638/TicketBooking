// src/pages/About.js
import React from 'react';
import './About.css';
import NavBar from './NavBar';

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>This is the about page of our application.</p>
      </div>
      </div>
  );
}

export default About;
