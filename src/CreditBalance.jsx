import React, { useEffect, useState } from 'react';


const CreditBalance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) return;
    const credit = localStorage.getItem('credit');
    if (credit){
      // balance = localStorage.getItem('credit');
      setBalance(localStorage.getItem('credit'));
      return;
    }
    fetch(`http://localhost:8089/credit/balance?_=${Date.now()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => res.json())
      // .then(res => console.log('response iz:', res))
      // // .then(data => setBalance(data.credit_balance))
      // .then(res => setBalance(res.getItem('credit_balance')))
      .then(data => {
      console.log('Parsed response:', data);
      setBalance(data.credit_balance);
      localStorage.setItem('credit', data.credit_balance);       
    })
      .catch(err => console.error(err));
  });

  return <div>Your Credit Balance: ${balance ?? 'Loading...'}</div>;
};

export default CreditBalance;
