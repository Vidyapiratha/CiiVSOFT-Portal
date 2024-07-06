let response;
const serverless = require("serverless-http");
const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json({ limit: "10mb" }));

console.log("Inside THE lMBDA Out");

if (event.httpMethod === "GET" && event.resource === "/users") {
  async (req, res) => {
    console.log("Inside THE lMBDA");
    console.log("Headers:", req.headers);
    console.log("Body size:", Buffer.byteLength(JSON.stringify(req.body)));
    const { id, username, lastName, password } = req.body;
    console.log("AFTER BODY PARSING");
    try {
      const result = await db.query(
        "INSERT INTO users(id, first_name, last_name, password) VALUES($1, $2, $3, $4) RETURNING *",
        [id, username, lastName, password]
      );
      res.status(201).send(result.rows[0]);
      console.log("AFTER RESULTS");
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
}

module.exports = serverless(app);
