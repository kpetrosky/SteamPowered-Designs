import React from 'react';
import './Services.css'; // Import your CSS file for styling

const Services = () => {
  return (
    <section className="services">
      <div className="services-content">
        <h2>Our Services</h2>
        <p>We offer a range of web design services tailored to your needs:</p>
        <ul>
          <li>Responsive Website Design</li>
          <li>UI/UX Design</li>
          <li>E-commerce Solutions</li>
          {/* Add more services */}
        </ul>
      </div>
    </section>
  );
};

export default Services;
