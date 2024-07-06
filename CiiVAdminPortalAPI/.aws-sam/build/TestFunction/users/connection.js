const pgp = require("pg-promise")();
require("dotenv").config();

const dbConfig = {
  host: "localhost", // Localhost here because the SSH tunnel maps the EC2 PostgreSQL to your local port
  port: 5432, // Local port that is forwarded to the PostgreSQL server port on EC2
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

const db = pgp(dbConfig);

module.exports = {
  db,
};
