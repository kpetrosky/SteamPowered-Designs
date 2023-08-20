// backend/routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const Message = require('../api/message'); // Import your Mongoose model

// Create a new message
router.post('/', async (req, res) => {
  try {
    const { content } = req.body;
    const newMessage = new Message({ content });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error creating message' });
  }
});

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Other routes for updating, deleting, etc. can be added similarly

module.exports = router;
