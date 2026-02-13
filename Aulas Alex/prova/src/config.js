import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    database: 'empresa_limpeza',
    port: 3306
})

export {pool}