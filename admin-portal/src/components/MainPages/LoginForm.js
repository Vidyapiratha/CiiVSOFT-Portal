import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", { userName, password });
    if (userName === "abc" && password === "12345678") {
      onLogin(true);
      //   navigate("/dashboard"); // Assuming you have a route setup for '/dashboard'
    } else {
      onLogin(false);
      setMessage("Please Enter a valid Username and Password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#D7EDFF", // Assuming this is the background color you want
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          //   width: 586, // Fixed width as specified
          height: "auto", // Height set to auto to fit content
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 3,
          padding: 4, // Added padding for inner spacing
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: 3,
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography component="h1" variant="h5">
            CiiVSOFT
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              fullWidth
              required
              id="username"
              label="User name"
              name="userName"
              margin="normal"
              autoComplete="username"
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              margin="normal"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Log in
            </Button>
            {message && (
              <Typography textAlign="center" variant="body2" color="error">
                {message}
              </Typography>
            )}
          </Box>
          <Typography sx={{ mt: 1, fontSize: "0.875rem" }}>
            New user?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Sign up
            </Link>{" "}
            &nbsp;
            <Link
              to="/forgot-password"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Forgot Password?
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginForm;
