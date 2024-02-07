const { User } = require('../models');

const userController = {
  getUserPosts: async (req, res) => {
    try {
      const user = await User.findByPk(req.session.user.id, { include: Post });
      res.render('dashboard', { user, user: req.session.user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Implement other controller methods as needed
};

module.exports = userController;
