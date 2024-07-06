const express = require("express");
const AWS = require("aws-sdk");
const serverless = require("aws-serverless-express/middleware");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(serverless.eventContext());

// Create User
app.post("/users", async (req, res) => {
  console.log("usinf the end point");
  try {
    const { username, email } = req.body;
    const results = await db.query(
      "INSERT INTO client (username, email) VALUES (?, ?)",
      [username, email]
    );
    res.json({ message: "User created", userId: results.insertId });
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

// Read User
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const results = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

// Update User
app.put("/users/:id", async (req, res) => {
  try {
    const { username, email } = req.body;
    const { id } = req.params;
    await db.query("UPDATE users SET username = ?, email = ? WHERE id = ?", [
      username,
      email,
      id,
    ]);
    res.json({ message: "User updated" });
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

// Delete User
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

module.exports = app;
