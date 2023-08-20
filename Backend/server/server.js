const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Import nodemailer

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,     // Your Gmail email
    pass: process.env.EMAIL_PASSWORD // Your Gmail password
  }
});

// Handle incoming messages
app.post('/api/messages', async (req, res) => {
  const message = req.body.message;
  console.log('Received message:', message);

  const mailOptions = {
    from: process.env.EMAIL_USER,     // Sender's email
    to: 'steampowered.designs@gmail.com', // Your email address
    subject: 'New Customer Message',
    text: `New customer message received: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions); // Send email
    console.log('Email sent successfully');
    res.json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false, message: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
