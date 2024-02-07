const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id/posts', userController.getUserPosts);

// Implement other user routes as needed

module.exports = router;
