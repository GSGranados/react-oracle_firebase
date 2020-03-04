const express = require('express');
const router = express.Router();
const IssueController = require('../controllers/IssuesController');

router.get('/save', (req, res) => {

  res.json({status: 'Issue Saved'});

});
//router.get('/testdata',IssueController.testdata );
//router.get('/list',IssueController.list );
router.get('/test', IssueController.test);

module.exports = router;