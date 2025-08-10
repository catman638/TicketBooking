import React from "react";
import NavBar from './NavBar'; // adjust path if needed
// @ts-expect-error needs migration
import MoviesTable from './Movies.tsx';

function Home() {
  return (
    <div>
      <NavBar />
      <main style={{ paddingTop: '100px', padding: '2rem' }}>
      <div className="heading" >
        <h1 style={{ marginLeft: '700px' }}>Browse the latest movies </h1>
        <MoviesTable />
      </div>
      </main>
    </div>
  );
}

export default Home;
