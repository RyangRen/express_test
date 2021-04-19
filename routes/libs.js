var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/:lib_name', (req, res) => {
    res.sendFile(path.join(__dirname, "../lib/" + req.params.lib_name));
});


module.exports = router;
