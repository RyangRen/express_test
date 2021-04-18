var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { user: 'Guest' , ip: req.ip});
});

router.get('/favicon.ico', (req, res)=>{
    res.send('');
});

module.exports = router;
