const Categories = require('../models/category.js')

module.exports = {
    index(req,res){
        Categories.all((tb_type)=>{
            console.log(tb_type)
            return res.render('index',{tb_type})
        })
    },
    create(req,res){
        Categories.selectCategories((options)=>{
            return res.render('create-news', {categoriesOptions: options})
        })
    }
}