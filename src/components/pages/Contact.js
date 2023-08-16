import React from 'react';
import MessageBoard from './MessageBoard'; // Import the MessageBoard component
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you.</p> 
          <p>
          Reach out: SteamPowered.Designs@gmail.com</p>
      </div>
      <MessageBoard /> {/* Add the MessageBoard component */}
    </section>
  );
};

export default Contact;
