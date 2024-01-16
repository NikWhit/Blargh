const router = require('express').Router();
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');
const commentRoute = require('./commentRoute');

router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/comment', commentRoute)

module.exports = router;
// Ripped and edited from the stu_mini_project