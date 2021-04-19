var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { user: 'Guest' , ip: req.ip});
});

router.get('/favicon.ico', (req, res)=>{
    res.send('');
});

module.exports = router;
