var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/users', { title: 'USERS' });
});

module.exports = router;
