// Home.js

import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  //eslint-disable-next-line
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const originalLetters = 'coup.productions'.split('');
    const randomLetters = originalLetters.map(() => getRandomLetter());

    setLetters(randomLetters);

    const intervalId = setInterval(() => {
      setLetters((prevLetters) => {
        const newLetters = prevLetters.map((letter, index) =>
          letter === originalLetters[index] ? letter : getRandomLetter()
        );
        return newLetters;
      });
    }, 50);

    setTimeout(() => {
      clearInterval(intervalId);
      setLetters(originalLetters);
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getRandomLetter = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz.';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  return (
    <div className="home-container">
      <img src="logo.png" alt="Logo" className="vector-image" />
      <div className="divider"></div>
      <div className="brand">
      <h2>{letters.join('')}</h2>
      </div>
      <div className="divider"></div>
      <div className="social-icons">
        <a href="https://www.facebook.com/MarkOliverMusic" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/markoliverofficial/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-messenger"></i>
        </a>
        <a href="https://soundcloud.com/markolivermusic" target="_blank" rel="noopener noreferrer">
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
