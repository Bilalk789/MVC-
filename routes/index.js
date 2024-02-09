const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

const authRoutes = require('./api/authRoutes');
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;