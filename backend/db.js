const { Pool } = require("pg");


const pool = new Pool(dbURL)

module.exports = pool;