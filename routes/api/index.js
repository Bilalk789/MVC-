const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/', authRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
