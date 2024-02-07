const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:yourpassword@localhost:3306/yourdatabase');

const User = require('./user')(sequelize, Sequelize);
const Post = require('./post')(sequelize, Sequelize);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  User,
  Post,
  sequelize,
  Sequelize,
};
