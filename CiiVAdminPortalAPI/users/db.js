const pgp = require("pg-promise")();

const dbConfig = {
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db = pgp(dbConfig);

module.exports = db;
