const {date} = require('../../lib/utils')
const db = require('../../inc/db')

module.exports = {
    create(data,cb){
        const query = `
            INSERT INTO tb_newsstory(
                type_id,
                title,
                date,
                author_id,
                text
            ) VALUES ($1,$2,$3,$4,$5)
            RETURNING id
        `
        const values = [
            data.type_id,
            data.title,
            date(Date,now()).iso,
            data.author_id,
            data.text
        ]
        return db.query(query,values)
    }
}