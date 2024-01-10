const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

  },
  {
    sequelize,
    timestamps: false,
    modelName: 'post',
  }
);

module.exports = Post;

// Credit goes to the person who made the code to the 28-MiniProject for MVC