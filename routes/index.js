var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { user: 'Guest'});
});

router.get('/favicon.ico', (req, res)=>{
    res.send('');
});

router.get('/:msg', (req, res)=>{
    res.send(req.params.msg);
});

module.exports = router;
