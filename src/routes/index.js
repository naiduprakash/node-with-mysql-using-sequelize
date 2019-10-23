var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'welcome to node-starter' });
});

router.get('/api', function(req, res, next) {
  res.json({ message: 'welcome to node-starter api' });
});

module.exports = router;
