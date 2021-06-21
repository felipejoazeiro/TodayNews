var conn = require('./../inc/db')

var express = require('express');
var router = express.Router();

const categories = require('../app/controllers/category')

const multer = require('../app/middlewares/multer')

/* GET home page. */


router.get('/', categories.index);

router.get('/createnews', categories.create)
router.post('/createnews', multer.array("photos,5"), )


router.get('/brazil-news',(req,res)=>{
  res.render('category-news')
})




module.exports = router;
