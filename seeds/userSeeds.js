const { User } = require('../models');
const userData =[
    {
        username: 'NickNack',
        password: 'pattywhack1'
    },
    {
        username: 'Chester',
        password: 'Cheeser1'
    },
];
const userSeeds = () => User.bulkCreate(userData, {
    individualHooks: true,
    return: true,
});
module.exports = userSeeds;