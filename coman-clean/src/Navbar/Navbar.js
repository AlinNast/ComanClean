import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoDefault from './logosmall.png'; // Path to the default logo
import logoHover from './logobig.png'; // Path to the hover logo


const Navbar = () => {
  const [logo, setLogo] = useState(logoDefault);

  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <Link to='/'>
          <img 
            src={logo} 
            alt="Company Logo" 
            className='navbar-logo'
            onMouseEnter={() => setLogo(logoHover)}
            onMouseLeave={() => setLogo(logoDefault)}
          />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link to='/services' className='navbar-link'>Services</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contact-us' className='navbar-link'>Contact Us</Link>
          </li>
        </ul>
      </div>
        
    </nav>
  );
};

export default Navbar;