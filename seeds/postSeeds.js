const { Post } = require('../models');
const postData = [
    {
        user_id: 1,
        title: 'How to make a raft out of sea-turtles',
        post: 'Wade out into the water for 3 days and nights, until all manner of sea life becomes aware of your presence'
    },
    {
        user_id: 1,
        title: 'How to make rope from a survival situation.',
        post: 'use human hair... from your own back'
    },
    {
        user_id: 2,
        title: 'Finding reasons to act like Jack Sparrow',
        post: 'Reason... has got nothing to do with it lad.'
    },
];

const postSeeds = () => Post.bulkCreate(postData);
module.exports = postSeeds;