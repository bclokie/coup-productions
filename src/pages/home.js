// Home.js

import React from 'react';
import './Home.css'; // Import the corresponding CSS file

const Home = () => {
  return (
    <div className="home-container">
      <img src="path_to_your_vector_image.svg" alt="Vector Image" className="vector-image" />
      <div className="divider"></div>
      <div className="brand">
        <h2>coup.productions</h2>
      </div>
      <div className="divider"></div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-messenger"></i>
        </a>
        <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-soundcloud"></i>
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-spotify"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
