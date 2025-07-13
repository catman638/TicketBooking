import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token
    localStorage.removeItem('authToken');

    // Optional: clear other session info
    // sessionStorage.clear();
    // localStorage.clear();

    // Navigate to home (or login)
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
  
};

export default Logout;
