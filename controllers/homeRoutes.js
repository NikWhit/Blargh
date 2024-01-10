const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res, next) => {
    // Get all projects and JOIN with user data
    const posts = await Post.findAll({
      include: [{model: Comment},{model: User}]})
          let postData = [];
          if (posts === undefined || posts === null || posts.length === 0 ) {
            postData = [];
          } else {
            postData = posts.map((post) => post.get ({ plain: true}));
          }
          res.render('home', {postData, loggedIn: req.session.logged_in});
        //   attributes: ['name'],
        });
    //   ],
    // });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       projects, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/dash', withAuth, async (req, res, next) => {
    const posts = await Post.findAll ({
      include: [
        {model: User}, {model: Comment}],
        where:{user_id:req.session.user_id}});
        let postData = [];
        if (posts === undefined || posts.length === 0) {
            postData = [];
        } else {
            postData = posts.map((post) => post.get({plain:true}));
        }
    res.render('dash', {postData, loggedIn: req.session.logged_in});
    });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dash');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dash');
      return;
    }
  
    res.render('signup');
  });

//post Route
router.get('')
router.get('/post/:id', async (req, res, next) => {
    const posts = await Post.findByPk(req.params.id, {include: [{ model: User }]});
    let postData = [];
    if (posts === undefined || posts === null || posts.length === 0 ) {
      postData = [];
    } else {
      postData = posts.get({ plain: true });;
    }
    const comments = await Comment.findAll({include: [{ model: User }], where:{post_id:req.params.id}});
    let commentsData = [];
    if (comments === undefined || comments === null || comments.length === 0 ) {
      commentsData = [];
    } else {
      commentsData = comments.map((comment) => comment.get({ plain: true }));
    }
    res.render('post', {postData, commentsData, loggedIn: req.session.logged_in});
  });
  
  // Post Route
  router.get('/post-update/:id', withAuth, async (req, res, next) => {
    const posts = await Post.findByPk(req.params.id, {include: [{ model: Comment }, { model: User }]});
    let postData = [];
    if (posts === undefined || posts === null || posts.length === 0 ) {
      postData = [];
    } else {
      postData = posts.get({ plain: true });;
    }
    res.render('updatePost', {postData, loggedIn: req.session.logged_in});
  });
  
  // New Post Route
  router.get('/post-new', withAuth, async (req, res, next) => {
    res.render('newPost', {loggedIn: req.session.logged_in});
  });
  
    module.exports = router;