const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Here you would typically save to MongoDB or send an email
    // For now, let's just log it and return success
    console.log('Received message:', { name, email, message });
    
    // Optional: Send email using Nodemailer (requires valid credentials in .env)
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);
    */

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
