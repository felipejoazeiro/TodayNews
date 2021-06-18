var conn = require('./../inc/db')

var express = require('express');
var router = express.Router();

const categories = require('../app/controllers/category')

/* GET home page. */


router.get('/', categories.index);

router.get('/createnews', categories.create)


router.get('/brazil-news',(req,res)=>{
  res.render('category-news')
})




module.exports = router;
