// ConfirmationPage.jsx
import React from 'react';
import NavBar from './NavBar';

const ConfirmationPage = () => {
  return (
    <div>
        <NavBar></NavBar>
      <h2>Order Successful!</h2>
      <p>Thank you for your purchase. An email will be sent out to you shortly</p>
    </div>
  );
};

export default ConfirmationPage;
