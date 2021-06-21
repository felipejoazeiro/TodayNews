const { text } = require('express')
const db = require('../../inc/db')

module.exports={
    create({data,filename,path}){
        const query = `
            INSERT INTO tb_newsimages(
                news_id,
                image-title,
                image-text,
                path
            ) VALUES ($1,$2,$3,$4)
            RETURNING id
        `
        const values = [
            data.news_id,
            data.image_text,
            data.image_title,
            path
        ]
        return db.query(query,values)
    }
}