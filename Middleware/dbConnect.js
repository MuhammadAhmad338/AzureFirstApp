// database.js
const dotenv = require("dotenv");
const mysql2 = require("mysql2");

dotenv.config();

const pool = mysql2.createPool(process.env.DATABASE_URL);

module.exports = pool;

