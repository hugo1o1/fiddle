var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.json({
    data:{
      name:'hugo',
      age:18,
    }
  })
});

module.exports = router;
