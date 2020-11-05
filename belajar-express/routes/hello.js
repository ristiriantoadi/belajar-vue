var express = require('express');
var router = express.Router();

/* GET hello page. */
router.get('/hello', function(req, res, next) {
  res.send('hello world')
});

module.exports = router;
