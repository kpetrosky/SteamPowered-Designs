import React, { useState } from 'react';
import './MessageBoard.css'; // Import your CSS file for styling

const MessageBoard = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && message) {
      setMessages([...messages, { name, message }]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="message-board">
      <h2>Message Board</h2>
      <div className="message-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Post Message</button>
        </form>
      </div>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <h3>{msg.name}</h3>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
