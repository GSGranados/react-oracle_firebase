var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'oracle_db',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;