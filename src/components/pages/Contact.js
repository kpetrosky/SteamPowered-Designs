import React from 'react';
import MessageBoard from './MessageBoard'; // Import the MessageBoard component
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Reach out: SteamPowered.Designs@gmail.com</p>
      </div>
      <MessageBoard /> {/* Add the MessageBoard component */}
    </section>
  );
};

export default Contact;
