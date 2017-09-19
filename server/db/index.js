const Sequelize = require('sequelize');
const url = 'postgres://reszmjpn:Ar6FP05yYkHztFq6jZl44EhWynT8qSQI@elmer.db.elephantsql.com:5432/reszmjpn';
const db = new Sequelize(url, {
  dialect: 'pg'
});

const Songs = db.define('Songs', {
  name: sequelize.STRING
})

module.exports = {Songs};