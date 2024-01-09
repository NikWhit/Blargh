const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    title: {
      type: DataTypes.STRING,
    },
    post: {
      type: DataTypes.TEXT,
    },

  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;

// Credit goes to the person who made the code to the 28-MiniProject for MVC