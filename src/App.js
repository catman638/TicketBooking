// import logo from './logo.svg';
import './App.css';
import AuthForm from './AuthForm';
import Home from './Home';
import About from './About';
import Services from './Services.js';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  // return (
  //   <div>
  //     <AuthForm/>

  //     </div>
  // );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
