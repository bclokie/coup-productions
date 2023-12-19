// Navbar.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useMusicContext } from './MusicContext';

const Navbar = () => {
  const location = useLocation();
  const { isMusicPlaying } = useMusicContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className={`logo-container ${isMusicPlaying ? 'spinning-logo' : ''}`}>
          <Link to="/">
            {location.pathname !== '/' && <img src={'logo.svg'} alt="Logo" />}
          </Link>
        </div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/archive">Archive</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
