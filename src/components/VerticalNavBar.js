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
          <NavLink to="/portfolio" activeClassName="active"> {/* Use lowercase "portfolio" here */}
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName='active'>
            Contact Me
          </NavLink>
        </li> {/* Close the <li> tag here */}
      </ul>
    </nav>
  );
};


export default VerticalNavBar;
