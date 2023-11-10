import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
      <li className='navbar-item'>
          <Link to='/' exact className='navbar-link' activeClassName='active'>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to='/contact-us' className='navbar-link' activeClassName='active'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;