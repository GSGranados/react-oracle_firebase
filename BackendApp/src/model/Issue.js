//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./database');
// import model for FK issueProductID
//import model for FK ownerIssueID
var OwnerIssue = require('./OwnerIssue');
var IssueProduct = require('./IssueProduct');

var Issue = sequelize.define('issue', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    takenTroubleshooting: Sequelize.STRING,
    supportArticles: Sequelize.STRING,
    consult: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    bug: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
   
    ownerIssueID: {
      type: Sequelize.INTEGER,
      // This is a reference to another model
      references: {
        model: OwnerIssue,
        key: 'id_owner'
      }
    
    },
    issueProductID: {
        type: Sequelize.INTEGER,
        // This is a reference to another model
        references: {
          model: IssueProduct,
          key: 'id_product'
        }
    }
  },
  {
       timestamps: true,
  });
  
  Issue.belongsTo(OwnerIssue);
  Issue.belongsTo(IssueProduct);
  
  module.exports = Issue