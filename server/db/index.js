const Sequelize = require('sequelize');
require('dotenv').config();
const db = new Sequelize(process.env.NAME, process.env.USERNAME, process.env.PASSWORD, {
  dialect: 'postgres',
  host: process.env.HOST,
  port: process.env.PORT,
});

const Songs = db.define('Songs', {
  name: Sequelize.STRING,
  artist: Sequelize.STRING,
  album: Sequelize.STRING,
  uri: Sequelize.STRING,
},{
  timestamps: false
})

module.exports = {Songs};