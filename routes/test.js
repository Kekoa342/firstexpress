var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('test', { title: 'Express' });
  });



  router.post('/math', function(req, res, next) {
    let num1 = req.body.number1 | 0;
    let num2 = req.body.number2 | 0;
    let op = req.body.operator;
    let result;
    switch (op) {
      case '+': result = num1+num2;
      break;
  
      case '-': result = num1-num2;
      break;
  
      case '*': result = num1*num2;
      break;
  
      case '/': result = num1/num2;
      break;
  
      case '%': result = num1 % num2;
      break;
  
      case '^': result = num1 ** num2;
      break;
  
      case '!': let fact = num1;
       for (i=num1-1, i > 1; i--;)
      {
        fact *= i;
      }
      result = fact;
      break;
    }

    
     //  using the text from the page break text3 into an array of words
  //  find findWord in the array of words
  //  return findResult to the browser
  res.render('test', {number1: num1,
    number2: num2,
    operator: op,
    mathResult: result });
});
router.get('/find', function(req, res, next) {
    res.render('test', {});
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
  res.render('test', {text3: text,
    findWord: find,
    findResult: answer });
});
module.exports = router;
