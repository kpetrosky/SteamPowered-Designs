import React from 'react';
import './Home.css'; // Import your CSS file for styling
import image1 from '../images/360_F_77987357_tPP7deHAIp9RjE078fs7Dva8OevgtR7d.jpg'; // Import your profile image


const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2>Welcome to Steamliowered Butterfly Web Designs</h2>
        <p>Your Designer in Crafting Beautiful and Functional Websites</p>
        <p>
          At Steampowered Butterfly Web Designs, we specialize in creating stunning and functional websites that cater to your unique needs. Whether you're an individual looking for a personal portfolio site or a business seeking to establish a strong online presence, we're here to bring your vision to life.
        </p>
        <p>
          Our team of passionate designers and developers is dedicated to delivering top-notch web solutions. With expertise in technologies such as React, HTML/CSS, and more, we ensure that your website not only looks great but also performs seamlessly across devices.
        </p>
        <p>
          We understand that every project is unique, and that's why we collaborate closely with our clients to understand their goals and requirements. From design concepts to the final product, we prioritize creativity, functionality, and user experience.
        </p>
        <p>
          Take a look at our portfolio to see some of our recent projects, and feel free to reach out to us to discuss your project ideas or inquire about our services. Let's work together to create a captivating online presence that reflects your identity and engages your audience.
        </p>
      </div>
      <div className="image-container">
        <img src={image1} alt="Web Design" className="image" />
      </div>
    </div>
  );
};

export default Home;
