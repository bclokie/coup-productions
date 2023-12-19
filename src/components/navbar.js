// Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useMusicContext } from './MusicContext';

const Navbar = () => {
  const location = useLocation();
  const { isMusicPlaying } = useMusicContext();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <div className={`logo-container ${isMusicPlaying ? 'spinning-logo' : ''}`}>
              {location.pathname !== '/' && <img src={'logo.svg'} alt="Logo" />}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
