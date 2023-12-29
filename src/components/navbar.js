import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the close (X) icon
import './Navbar.css';
import { useMusicContext } from './MusicContext';

const Navbar = () => {
  const location = useLocation();
  const { isMusicPlaying } = useMusicContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav>
      <div className="nav-container">
        <div className={`logo-container ${isMusicPlaying ? 'spinning-logo' : ''}`}>
          <Link to="/">
            {location.pathname !== '/' && <img src={'logo.svg'} alt="Logo" />}
          </Link>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`overlay ${menuOpen ? 'open' : 'closed'}`} onClick={closeMenu}></div>
        <div className={`nav-links ${menuOpen ? 'open' : 'closed'}`}>
          <div className="close-icon" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <ul>
            <li>
              <Link to="/archive" onClick={closeMenu}>
                archive
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
