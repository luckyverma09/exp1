import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <label className="logo">My Portfolio</label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Protfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
