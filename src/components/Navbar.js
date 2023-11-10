import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-teal">
        <Link className="navbar-brand" to="/">Financer</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/offers">Offers</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/transactions">Transactions</Link></li> {/* Add this line */}
          <li className="nav-item"><Link className="nav-link" to="/goals">Goals</Link></li> {/* Add this line */}
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <FontAwesomeIcon icon={faUser} /> Sampleuser22
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;
