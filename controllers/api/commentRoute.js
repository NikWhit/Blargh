const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

//Post yer Comment (Sorry again for the pirate lingo... I'm wicked tired)
router.get('/:id', async (req, res) => {
try {
    const comment = await Comment.findByPk(req.params.id,{
        include: [{ model: User }, {model: Post }]});
        const commentData = comment.get({plain:true});
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
    });
// Okay... so this is kind of funny. I've directly copied my own "postRoute.js" file to 
//copy over to this one... I'm listening to "Post Malone (fea.RANI) by Sam Feldt"
// and there are a lot of times when she's singing "Post Malone" while I'm erasing
// "post" and replacing it with "comments". Its just ironic and if anyone ever
// reads this, I just wanted to express the irony. 

//Make comment
router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
    const post = await Post.create(req.body);

    res.status(200).json(post);
    } catch (err) {
    res.status(500).json(err);
    }
});

//Change it up a bit
router.post('/:id', async (req, res) => {
    try {
            req.body.post_id = req.params.id;
            req.body.user_id = req.session.user_id;
            const comment = await Comment.create(req.body);
            res.status(200).json(comment);
                } catch (err) {
            res.status(500).json(err);
    }
    });

module.exports = router;
