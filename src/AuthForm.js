import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./Home";
// import { useNavigate } from "react-router-dom";


function AuthForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token && token !== 'null' && token !== '') {
      navigate('/home'); // Redirect to home
    }
  }, [navigate]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };    

  const handleSubmit = async (e) => {

    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:8089/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        const data = await response.json(); // Parse response body as JSON
        const token = data.token; // Access the token field
        localStorage.setItem('authToken', token);
        //setData(response.data);
        
        // Navigate to another page (e.g., '/dashboard')
        navigate("/home");
      }

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // const result = await response.json();
      alert('Form submitted successfully!');
      // Navigate();
      //navigate("/home");
      // console.log(result); // Response from the backend
    } catch (error) {
      console.error('Error:', error); 
      
      alert('Failed to submit the form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button>Login</button>
                </div>
                <div className='form'>
                <h2>Login Form</h2>
                    <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange}
                    ></input>

                    <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange}
                    ></input>
                    
                    <button>Login</button>     
                </div>
            </div>
        </div>
    </form>
  );
}

// function Navigate() {
//   // return (
//   //   <Router>
//   //     <nav>
//   //       <Link to="/">Home</Link>
//   //     </nav>
//   //     <Routes>
//   //       <Route path="/" element={<Home />} />
//   //       {/* <Route path="/about" element={<About />} /> */}
//   //     </Routes>
//   //   </Router>
//   // );

//   const navigate = useNavigate();

//     const handleClick = () => {
//         navigate("/");
//     }

//     return (
//         <div>
//             <button onClick={handleClick} type="button" />
//         </div>
//     );
// }

export default AuthForm;
