var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { user: 'Guest' , ip: req.ip});
});
router.get('/controller.js', (req, res)=>{
    // console.log(path.join(__dirname, '../views/index.ejs'));
    res.sendFile(path.join(__dirname, '../lib/controller.js'));
});

router.get('/favicon.ico', (req, res)=>{
    res.send('');
});

module.exports = router;
