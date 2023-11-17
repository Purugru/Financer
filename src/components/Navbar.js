import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-teal">
      <Link className="navbar-brand" to="/home">
        Financer
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/transactions">
            Transactions
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/goals">
            Goals
          </Link>
        </li>
        <li className="nav-item dropdown">
          <button
            className="btn teal-button dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faUser} className="faUser" /> Sampleuser22
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="dropdown-item" to="/profile">
                <FontAwesomeIcon icon={faUser} className="blue-icon" /> Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/login">
                <FontAwesomeIcon icon={faSignOutAlt} className="red-icon" /> Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
