// routes/api.js
const express = require('express');
const router = express.Router();
const Message = require('../api/message');

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new message
router.post('/messages', async (req, res) => {
  try {
    const { content } = req.body;
    const newMessage = new Message({ content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

module.exports = router;
