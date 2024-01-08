const seedPosts = require('./postSeeds');
const seedUser = require('./userSeeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
await sequelize.sync({ force: true });
console.log('\n----- DATABASE SYNCED -----\n');
await seedUser();
console.log('\n----- USER SEEDED -----\n');

await seedPosts();
console.log('\n----- POSTS SEEDED -----\n');

process.exit(0);
};

seedAll();
