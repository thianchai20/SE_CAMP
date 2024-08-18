const mysql = require("mysql2")

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud_node'
}).promise();

module.exports = pool;