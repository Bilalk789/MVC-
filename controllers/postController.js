const { Post, User } = require('../models');

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: User,
        order: [['createdAt', 'DESC']]
      });
      res.render('homepage', { posts, user: req.session.user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id, { include: User });
      res.render('post', { post, user: req.session.user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

};

module.exports = postController;
