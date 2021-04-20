var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/:style_file', (req, res)=>{
    res.send(path.join(__dirname, "../public/stylesheets/" + req.params.style_file) );
});

module.exports = router;