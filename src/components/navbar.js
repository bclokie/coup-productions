import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useMusicContext } from './MusicContext';

const Navbar = () => {
  const location = useLocation();
  const { isMusicPlaying } = useMusicContext();

  useEffect(() => {
    const updateIsPlaying = () => {
      console.log("Updating is playing");
    };

    // Attach event listeners
    document.addEventListener('playing', updateIsPlaying);
    document.addEventListener('pause', updateIsPlaying);

    // Cleanup function
    const cleanup = () => {
      // Remove event listeners
      document.removeEventListener('playing', updateIsPlaying);
      document.removeEventListener('pause', updateIsPlaying);
    };

    // Initial check
    updateIsPlaying();

    // Cleanup on component unmount
    return cleanup;
  }, [isMusicPlaying]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <div className={`logo-container ${isMusicPlaying ? 'spinning-logo' : ''}`}>
              {location.pathname !== '/' && <img src={'logo.png'} alt="Logo" />}
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
