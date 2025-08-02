import React, { useEffect, useState } from 'react';
import './Movies.css';

function MoviesTable() {

interface Movie {
  movie_id: number;
  movie_name: string;
  price: number;
  location: string; // optional if not all movies have it
}
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('http://localhost:8089/movies/' , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }) // Adjust the endpoint as needed
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      })
      // .then(response => response.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error('Failed to fetch movies:', err));
  }, []);

  return (
    <div>
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
            <tr key={movie.movie_id}>
              <td>{movie.movie_name}</td>
              <td>{movie.price}</td>
              <td>{movie.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MoviesTable;
