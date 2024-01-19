const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
  "postgresql://postgres:bGf23DCFaBcF21aDdB1A425Gf5Df3a5d@monorail.proxy.rlwy.net:21586/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;