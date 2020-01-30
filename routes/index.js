var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/find', function(req, res, next) {
  res.render('post', {});
});



router.post('/find', function(req, res, next) {
  let text = req.body.text3;
  let find = req.body.findWord;
  let ar = text.split(' ');
  let answer = '';
  if (ar.indexOf(find) >= 0)
  {
    answer = ar.indexOf(find);
  } else
  {
    answer = 'Word wasnt found!';
  }
  
  //  using the text from the page break text3 into an array of words
  //  find findWord in the array of words
  //  return findResult to the browser
  res.render('post', {text3: text,
                      findWord: find,
                      findResult: answer });
});

module.exports = router;
