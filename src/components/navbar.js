// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the corresponding CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
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
