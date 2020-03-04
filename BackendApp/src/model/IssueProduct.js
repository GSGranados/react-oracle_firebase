var Sequelize = require('sequelize');
var sequelize = require('../model/database');

var IssueProduct = sequelize.define('issueproduct', {
  
    id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

    issueproduct: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = IssueProduct