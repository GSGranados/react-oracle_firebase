const controller = {}
var Issue = require('../src/model/Issue');
var OwnerIssue = require('../src/model/OwnerIssue');
var IssueProduct = require('../src/model/IssueProduct');
var sequelize = require('../src/model/database');

//Migrar las tablas por si aun no existen en la DB
sequelize.sync();

controller.test = (req,res) => {

  const data = {
    Issue: "Cannot Join Meet in ChromeBook CN65",
    priority: 'P1',
    owner: 'Gcruz'
  }

  console.log("Send data from controller Issue");
  res.json(data);

};

module.exports = controller;