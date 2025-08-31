import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const PaymentPage = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  const ticketId = movie.movie_id;

  const navigate = useNavigate();

const handleBuy = async () => {
  try {
    const response = await fetch('http://localhost:8089/purchase/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(ticketId),
    });

    // If backend sends JSON
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.bought || 'Purchase failed.');
    }

    console.log('Parsed response:', data);

    // If `data` contains the updated credit
    localStorage.setItem('credit', data);

    navigate('/confirmation');

  } catch (err) {
    console.error('Error:', err);
    alert(err.message);
  }
};

  

  return (
    <div style={{ marginBottom: '200px' }}>
        <NavBar />
      <h2>Buying: {movie.movie_name}</h2>
      {movie ? (
        <>  
          <p><strong>Selected Movie:</strong> {movie.movie_name}</p>
          <p><strong>Price:</strong> {movie.price}</p>
          <p><strong>Location:</strong> {movie.location}</p>
          <button onClick={handleBuy}>Buy</button>
        </>
      ) : (
        <p>No movie selected. Please go back and choose a movie.</p>
      )}
    </div>
  );
};

export default PaymentPage;
