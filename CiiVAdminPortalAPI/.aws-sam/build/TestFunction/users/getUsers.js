const express = require("express");
const router = express.Router();
const { db } = require("../db");

// Example CRUD Operation: GET Users
router.get("/users", async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});
router.post("/users", async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

module.exports = router;
