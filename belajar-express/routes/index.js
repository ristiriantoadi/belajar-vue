var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('hello',(req,res)=>{
  res.send('hello')
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
