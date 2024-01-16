const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT
    }
  );


module.exports = sequelize;

// C:\Users\Owner\Desktop\UofUBootcamp\Code Camp Clone\OneThruTwelve\14-MVC\01-Activities\28-Stu_Mini-Project\Main\config\connection.js