const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'User',
    database: 'todaynews',
    password: 'password'
})

module.exports = connection