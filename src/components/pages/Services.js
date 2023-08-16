import React from 'react';
import './Services.css'; // Import your CSS file for styling

const Services = () => {
  return (
    <section className="services">
      <div className="services-content">
        <h2>My Services</h2>
        <p>I offer a range of web design services tailored to your needs:</p>
        <div className="service">
          <h3>Responsive Website Design</h3>
          <p>I specialize in creating responsive websites that look and function great on all devices, from desktops to smartphones.</p>
        </div>
        <div className="service">
          <h3>UI/UX Design</h3>
          <p>I am skilled at creating create user-centered interfaces with a focus on delivering exceptional user experiences.</p>
        </div>
        <div className="service">
          <h3>E-commerce Solutions</h3>
          <p>I can help you set up an e-commerce platform to sell your products or services online, making it easy for customers to shop.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
