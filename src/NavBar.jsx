import React from 'react';
import './NavBar.css'; // Make sure to create this CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TicketBooking</div>
      <ul className="nav-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
