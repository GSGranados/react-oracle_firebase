var Sequelize = require('sequelize');
var sequelize = require('../model/database');

var OwnerIssue = sequelize.define('ownerissue', {

    id_owner: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    
    ownerissue: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = OwnerIssue