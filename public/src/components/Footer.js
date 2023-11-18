import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  // Don't render footer on the login page
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <div className="footer">
      {/* Content goes here */}
    </div>
  );
}

export default Footer;

