var express = require('express');
var router = express.Router();
// var knex = require('../../../db/knex');


router.get('/', function(req, res, next) {
  console.log(req.user);
  res.render('index', { title: 'LinkedIn & Passport', profile: req.user })
});

module.exports = router;
