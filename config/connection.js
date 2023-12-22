const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
Sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );


module.exports = sequelize;

// C:\Users\Owner\Desktop\UofUBootcamp\Code Camp Clone\OneThruTwelve\14-MVC\01-Activities\28-Stu_Mini-Project\Main\config\connection.js