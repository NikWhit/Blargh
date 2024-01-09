const router = require('express').Router();
const { Post, User, Comments } = require('../../models');

//Post yer post
router.post('/:id', async (req, res) => {
try {
    const post = await Post.findByPk(req.params.id,{
        include: [{ model: User }, {model: Comments }]});
        const postData = post.get({plain:true});
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

//Make post
router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
    const post = await Post.create(req.body);

    res.status(200).json(post);
    } catch (err) {
    res.status(400).json(err);
    }
});

//Change it up a bit
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.update(req.body, {
        where: {
            id: req.params.id,
        },
        }); (post[0]) ? res.status(200).json({id:req.params.id, message: 'swapped up successfully'})
        : res.status(400).json({message: 'must have done sommit wrong matey'});
    } catch (err) {
        res.status(500).json(err);
    }
    });


router.delete('/:id', async (req, res) => {
try {
    const post = await Post.destroy({
    where: {
        id: req.params.id,
    }
    });
    (post) ? res.status(200).json({message: 'target acquired... FIRE! BOOM!'})
: res.status(400).json({message: 'Someone has sunk that battleship.'});
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;
