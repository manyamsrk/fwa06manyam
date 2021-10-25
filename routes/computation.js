var express = require('express');
var router = express.Router();
var rno;
var acosh;
var log1p;
var tan;
var sqrt;

/* GET users listing. */
router.get('/', function(req, res, next) {
    rno = Math.round(Math.random()*(100-1)+1);
    acosh = Math.acosh(rno);
    log1p = Math.log1p(rno);
    tan = Math.tan(rno);
    sqrt = Math.sqrt(rno);
    res.send(`acosh applied to ${rno} is ${acosh} <br> 
              log1p applied to ${rno} is ${log1p} <br>
              tan applied to ${rno} is ${tan} <br>
              sqrt applied to ${rno} is ${sqrt}`);
});

module.exports = router;
