import React, { useState } from "react";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TwoFactorAuthForm = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("2FA Code:", code);
    // Process the 2FA verification here
    navigate("/dashboard"); // Navigate to dashboard after successful 2FA verification
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          width: "100%",
          maxWidth: 360,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          CiiVSOFT
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Two Factor Authentication
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="code"
            label="Enter the code received on your email"
            name="code"
            autoComplete="off"
            autoFocus
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => navigate(-1)}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TwoFactorAuthForm;
