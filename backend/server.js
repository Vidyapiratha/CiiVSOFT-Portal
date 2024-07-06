const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const filePath = path.join(__dirname, "data", "userDetails.json");

// Function to save user details
const saveUserDetails = (user) => {
  let users = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    users = JSON.parse(fileData);
  }

  const userExists = users.some(
    (existingUser) => existingUser.email === user.email
  );

  if (!userExists) {
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return { status: "success", message: "User added successfully!" };
  } else {
    return { status: "error", message: "User already exists!" };
  }
};
const getUser = (email) => {
  let user = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    users = JSON.parse(fileData);
  }

  const userExists = users.filter(
    (existingUser) => existingUser.email === user.email
  );

  if (!userExists) {
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return { status: "success", message: "User added successfully!" };
  } else {
    return { status: "error", message: "User already exists!" };
  }
};

// API endpoint to handle user registration
app.post("/api/register", (req, res) => {
  const user = req.body;
  user.token = Math.random().toString().substr(2, 6);
  const result = saveUserDetails(user);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
