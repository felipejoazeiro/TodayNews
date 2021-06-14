const db = require('../../inc/db')

module.exports = {
    all(callback){
        db.query(`SELECT * FROM tb_type ORDER BY id`,(err,results)=>{
            if(err) throw 'Database error'
            callback(results)
        })
    },
    selectCategories(callback){
        db.query(`SELECT id, name FROM tb_type`, (err,results)=>{
            if(err) throw 'Database Error'
            callback(results)
        })
    }
}