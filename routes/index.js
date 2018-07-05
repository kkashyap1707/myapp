var express = require('express');
var router = express.Router();
var api_v0 = require('./api_v0');
var api_v1 = require('./api_v1');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloWorld',function (req,res,next) {
  res.send('Hello World');
});

router.get('/about',function (req,res,next) {

  res.render('about', {a:'apple', c:'cat'});
});

router.use('/api/v0',api_v0);
router.use('/api/v1',api_v1);


module.exports = router;
