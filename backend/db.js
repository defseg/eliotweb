const { Pool } = require("pg");

// The secret connection string you copied earlier
const dbURL = process.env.DATABASE_URL;

const pool = new Pool({
    dbURL,
});

module.exports = pool;