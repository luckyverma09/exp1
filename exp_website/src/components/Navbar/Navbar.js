import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/'>           <li>   Home       </li> </Link>
      <Link to='/about'>      <li>   About      </li> </Link>
      <Link to='/protfolio'>  <li>   Protfolio  </li> </Link>
      <Link to='/contact'>    <li>   Contact    </li> </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
