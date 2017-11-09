const Sequelize = require('sequelize');
require('dotenv').config();
const db = new Sequelize(process.env.NAME);

const Songs = db.define('Songs', {
  name: Sequelize.STRING,
  artist: Sequelize.STRING,
  album: Sequelize.STRING,
  uri: Sequelize.STRING,
},{
  timestamps: false
})

module.exports = {Songs};