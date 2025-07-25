import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (!token || token === 'null' || token === '') {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;