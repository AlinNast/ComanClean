import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Cleaning Company</p>
      <ul className="footer-links">
        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        <li><Link href="/terms-of-service">Terms of Service</Link></li>
        {/* Add more links as needed */}
      </ul>
    </footer>
  );
};

export default Footer;
