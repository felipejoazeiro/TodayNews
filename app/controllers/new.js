const { post } = require("../../routes");
const News = require('../models/new');
const File = require('../models/file')
const NewsImage = require('../models/news_image')

module.exports={
    async post(req,res){
        const keys = Object.keys(req.body)

        for(key of keys){
            if(req.body[key]==""){
                return res.send('Please, fill all fields')
            }
        }

        if(req.files.lenght == 0) return res.send('Please, send at least one image')

        let results = await News.create(req.body)

        const newId = results.rows[0].id

        const fileResults = req.files.map(file=>File.create({...file}))

        for(file of req.file){
            NewsImage.create({})
        }
    }
}