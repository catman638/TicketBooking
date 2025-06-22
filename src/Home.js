import React from "react";
import NavBar from './NavBar'; // adjust path if needed

function Home() {
  return (
    <div>
      <NavBar />
      <main style={{ paddingTop: '100px', padding: '2rem' }}>
      <div className="heading">
        <h1>Browse the latest movies</h1>
        <p>This is where your main content goes.</p>
      </div>
      </main>
    </div>
  );
}

export default Home;
