// Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <div className="logo-container">
          {location.pathname !== '/' && <img src={'logo.png'} alt="Logo" />}
        </div>
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
