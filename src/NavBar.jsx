import React from 'react';
import './NavBar.css'; // Make sure to create this CSS file
// import {logout} from './Logout'
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import CreditBalance from './CreditBalance';



// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Remove the token
//     localStorage.removeItem('authToken');

//     // Optional: clear other session info
//     // sessionStorage.clear();
//     // localStorage.clear();

//     // Navigate to home (or login)
//     navigate('/');
//   };

//   return (
//     <button onClick={handleLogout}>
//       Logout
//     </button>
//   );
  
// };

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TicketBooking.com</div>
      <ul className="nav-links">
        <CreditBalance />
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/logout" >Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
