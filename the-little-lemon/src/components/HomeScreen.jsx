// src/components/Home.jsx
import React from 'react';
import homeImage from '../assets/photo.jpg';
const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h2 className="text-center mb-4">Welcome to Little Lemon</h2>
      <p>This is the Home page of Little Lemon. Enjoy our delicious offerings!</p>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <img
          src={homeImage}
          alt="Little Lemon"
          className="img-fluid"
          style={{
            maxWidth: '500px', 
            borderRadius: '10px', 
          }}
        />
      </div>
    </div>
  );
};

export default Home;
