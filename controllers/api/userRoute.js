const router = require('express') .Router();
const { User } = require('../../models');
//Referenced from the Stu_Mini_Project >>userRoutes.js
//We need to create a user pathway.
router.post('/', async (req, res) => {
    try {
    const userData = await User.create(req.body);

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.status(200).json(userData);
    });
    } catch (err) {
    res.status(400).json(err);
    }
});


//User route for login/out pathways
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', username, password);
    try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
        res.status(400).json({ message: 'Try again or you walk the plank' });
        return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        res.status(400).json({ message: 'careful matey, try again' });
        return;
    }
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'Yer water-logged in!' });
    });

    } catch (err) {
    res.status(400).json(err);
    }
});
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
    req.session.destroy(() => {
        res.status(204).end();
    });
    } else {
    res.status(404).end();
    }
});

module.exports = router;
