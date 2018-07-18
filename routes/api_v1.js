var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://mongo:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    //client.close();



    /* GET users listing. */
    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

router.get('/profile',function (req, res, next) {
    db.collection('profiles').findOne({Age:"23"},function (err,data) {
        console.log(">>>>>>>>>>>>> "+err);
       res.send(data);
    });
    //res.send({"Name":"Ram"});
});

router.post('/profile',function (req,res,next) {

   console.log('Post Data Recived :: '+JSON.stringify(req.body));
    db.collection('profiles').insert(req.body,function (err,data) {

        if(err){
            res.render('error',{ message:'db not connected', error:err});
        }else {
            res.send({"Name":req.body.Name});
        }

    });


});


router.get('/not-found',function (req, res, next) {
    res.render('error',{ message:'api invalid v1', error:{ status:'400',stack:''} });
});


});

module.exports = router;
