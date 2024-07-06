import React, { useEffect, useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FourthStepComponent = ({ clientData, saveData, setIsStepValid }) => {
  const navigate = useNavigate();
  const [aiPrompt, setAiPrompt] = useState(clientData.aiPrompt || "");

  useEffect(() => {
    if (aiPrompt !== "") {
      saveData({ aiPrompt });
      setIsStepValid(true);
    } else {
      setIsStepValid(false);
    }
  }, [aiPrompt]);

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Client AI Prompt
      </Typography>
      <TextField
        fullWidth
        label="Enter AI Prompt"
        value={aiPrompt}
        onChange={(e) => setAiPrompt(e.target.value)}
        margin="normal"
        multiline
        rows={10}
        variant="outlined"
        helperText={`${aiPrompt.length}/1000`} // Shows character count; adjust according to your limit
        inputProps={{ maxLength: 1000 }} // Prevents user from exceeding character limit
      />
    </Container>
  );
};

export default FourthStepComponent;
