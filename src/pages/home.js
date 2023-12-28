// Home.js

import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [letters, setLetters] = useState([]);
  const currentIndexRef = useRef(0);

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
    }, 20);

    const revealLetters = () => {
      clearInterval(intervalId);
      currentIndexRef.current = 0;

      const revealIntervalId = setInterval(() => {
        setLetters((prevLetters) => {
          const newLetters = [...prevLetters];
          newLetters[currentIndexRef.current] = originalLetters[currentIndexRef.current];
          currentIndexRef.current++;

          if (currentIndexRef.current === originalLetters.length) {
            clearInterval(revealIntervalId);
          }
          return newLetters;
        });
      }, 100);
    };

    setTimeout(revealLetters, 3000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(intervalId);
    };
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
        <a href="https://www.facebook.com/MarkOliverMusic/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/markoliverofficial/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@markoliver4707" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://soundcloud.com/markolivermusic/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-soundcloud"></i>
        </a>
        <a href="https://www.mixcloud.com/MOMusic/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-mixcloud"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
