var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/profile',function (req, res, next) {
    res.send({"Name":"Ram"});
});

router.post('/profile',function (req,res,next) {

   console.log('Post Data Recived :: '+JSON.stringify(req.body));
    res.send({"Name":req.body.Name});

});

router.get('/not-found',function (req, res, next) {
    res.render('error',{ message:'api invalid', error:{ status:'400',stack:''} });
});

module.exports = router;
