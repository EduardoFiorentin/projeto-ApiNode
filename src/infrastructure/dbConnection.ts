const mysql = require('mysql2/promise')

require('dotenv').config()

console.log(process.env.DB_HOST)

const connection = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

export { connection }

// DB_HOST=localhost
// DB_USER=root
// DB_PASS=admin
// DB_NAME=node_solid