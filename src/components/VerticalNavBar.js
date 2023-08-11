import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNavBar.css'; // Import your CSS file for styling

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
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
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
