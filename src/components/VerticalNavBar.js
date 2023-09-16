import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNavBar.css'; // Import your CSS file for styling

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
      <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
        </li>
    
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;

