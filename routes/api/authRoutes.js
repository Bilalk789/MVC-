
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const { User, Post } = require('../models');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    // If user is not found, return an error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords match, the user is authenticated
    if (passwordMatch) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // If passwords don't match, return an error
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
