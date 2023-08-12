import React from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Reach out to us:
          steampoweredbutterflydesigns@gmail.com
          Kvpetrosky@gmail.com
        </p>
        <form>
          {/* Add form fields for name, email, message, etc. */}
          {/* Include a submit button */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
