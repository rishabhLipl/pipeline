var express = require('express');
// const connection = require('../config/config');
var router = express.Router();

/* GET home page. */
router.get('/user', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;