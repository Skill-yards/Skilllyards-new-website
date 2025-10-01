import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      {/* Let Hero stretch full width */}
      <Hero />

      {/* Constrain only the rest of the content */}
      <div className="container mx-auto px-6 py-8 pt-28">
        <h1 className="text-3xl font-bold text-blue-950">Welcome to Home</h1>
        <p>This is the home page.</p>
      </div>
    </>
  );
};

export default Home;