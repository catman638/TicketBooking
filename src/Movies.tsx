import React, { useEffect, useState } from 'react';
import './Movies.css';
import { useNavigate } from 'react-router-dom'; // For navigation


function MoviesTable() {

interface Movie {
  movie_id: number;
  movie_name: string;
  price: number;
  location: string; // optional if not all movies have it
}
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8089/movies/' , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      })
      // .then(response => response.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error('Failed to fetch movies:', err));
  }, []);

  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCheckout = () => {
    if (selectedMovie) {
      // You can use navigate with state or query params
      navigate('/payment', { state: { movie: selectedMovie } });
    }
  };

  return (
    <div>
      <br />
      <h2>Movies List</h2>
      <table border={1} cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (Rs)</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.movie_id} 
            onClick={() => handleSelect(movie)}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedMovie?.movie_id === movie.movie_id ? '#c0e2ff' : 'white',
              }}>
              <td>{movie.movie_name}</td>
              <td>{movie.price}</td>
              <td>{movie.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedMovie && (
        <div style={{ marginTop: '20px', marginLeft: '800px' }}>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default MoviesTable;
