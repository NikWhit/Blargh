// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//Post owned by user
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
//User has many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//Comments belonging to the user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//User many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//comments to posts
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});
//post to many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };







// const Category = require('./Category');
// const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');

// // Products belongsTo Category

// // Categories have many Products

// // Products belongToMany Tags (through ProductTag)

// // Tags belongToMany Products (through ProductTag)

// module.exports = {
//   Product,
//   Category,
//   Tag,
//   ProductTag,
// };
