// Home.js

import React from 'react';
// import { useState, useEffect, useRef } from 'react';
import './Home.css';
import 'typeface-work-sans';

const Home = () => {
  // const [letters, setLetters] = useState([]);
  // const currentIndexRef = useRef(0);

  // useEffect(() => {
  //   const originalLetters = 'Mark Oliver'.split('');
  //   const randomLetters = originalLetters.map(() => getRandomLetter());

  //   setLetters(randomLetters);

  //   const intervalId = setInterval(() => {
  //     setLetters((prevLetters) => {
  //       const newLetters = prevLetters.map((letter, index) =>
  //         letter === originalLetters[index] ? letter : getRandomLetter()
  //       );
  //       return newLetters;
  //     });
  //   }, 20);

  //   const revealLetters = () => {
  //     clearInterval(intervalId);
  //     currentIndexRef.current = 0;

  //     const revealIntervalId = setInterval(() => {
  //       setLetters((prevLetters) => {
  //         const newLetters = [...prevLetters];
  //         newLetters[currentIndexRef.current] = originalLetters[currentIndexRef.current];
  //         currentIndexRef.current++;

  //         if (currentIndexRef.current === originalLetters.length) {
  //           clearInterval(revealIntervalId);
  //         }
  //         return newLetters;
  //       });
  //     }, 200);
  //   };

  //   setTimeout(revealLetters, 3000);

    // Cleanup intervals on component unmount
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // const getRandomLetter = () => {
  //   const characters = 'aefghijklMnOpqvr ';
  //   const randomIndex = Math.floor(Math.random() * characters.length);
  //   return characters.charAt(randomIndex);
  // };

  const handleDeepLink = (url) => {
    window.location.href = url;
  };

  return (
    <div className="home-container">
      <img src="logo.png" alt="Logo" className="vector-image" />
      <div className="divider"></div>
      <div className="brand">
        <h2>coup productions</h2>
      </div>
      <div className="divider"></div>
      <div className="social-icons">
        <button
          onClick={() =>
            handleDeepLink('https://www.facebook.com/MarkOliverMusic/')
          }
        >
          <i className="fab fa-facebook"></i>
        </button>
        <button
          onClick={() =>
            handleDeepLink('https://www.instagram.com/markoliverofficial/')
          }
        >
          <i className="fab fa-instagram"></i>
        </button>
        <button
          onClick={() =>
            handleDeepLink('https://www.youtube.com/@markoliver4707')
          }
        >
          <i className="fab fa-youtube"></i>
        </button>
        <button
          onClick={() =>
            handleDeepLink('https://soundcloud.com/markolivermusic/')
          }
        >
          <i className="fab fa-soundcloud"></i>
        </button>
        <button
          onClick={() =>
            handleDeepLink('https://www.mixcloud.com/MOMusic/')
          }
        >
          <i className="fab fa-mixcloud"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;