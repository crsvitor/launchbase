const { Pool } = require("pg");

module.exports = new Pool({
    user: "postgres",
    password: "79100744",
    host:"localhost",
    port: 5432,
    database: "gymmanager"
});