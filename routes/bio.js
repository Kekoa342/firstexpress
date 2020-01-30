var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bio', function(req, res, next) {
    let me = {  Name: 'Peyton Petschow',
                Age: 28,
                HomeCity: 'Sachse'};
  res.render('bio', { title: 'Express', me: me });
});

module.exports = router;