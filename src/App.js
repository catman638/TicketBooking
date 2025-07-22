// import logo from './logo.svg';
import './App.css';
import AuthForm from './AuthForm';
import Home from './Home';
import About from './About';
import Logout from './Logout';
import Services from './Services.js';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';



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
        <Route path="/home" element={
          <ProtectedRoute>
        <Home />
      </ProtectedRoute>} />
        <Route path="/about" element={
          <ProtectedRoute>
        <About />
      </ProtectedRoute>} />
        <Route path="/services" element={<ProtectedRoute>
        <Services />
      </ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute>
        <Contact />
      </ProtectedRoute>} />
        <Route path="/logout" element={<ProtectedRoute>
        <Logout />
      </ProtectedRoute>} />

      </Routes>
    </Router>
  );
}

export default App;
