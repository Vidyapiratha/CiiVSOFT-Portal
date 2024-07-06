import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ThirdStepComponent = ({ clientData, saveData, setIsStepValid }) => {
  const [estimatedJobs, setEstimatedJobs] = useState(
    clientData.estimatedJobs || 0
  );
  const [actualJobs, setActualJobs] = useState(clientData.actualJobs || 0);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(clientData);
    if (actualJobs !== 0 && estimatedJobs !== 0) {
      saveData({ actualJobs, estimatedJobs });
      setIsStepValid(true);
    } else {
      setIsStepValid(false);
    }
  }, [actualJobs, estimatedJobs]);

  const handleChangeEstimated = (event) => {
    const value = event.target.value;
    // Using a regex to ensure validation for any decimal values
    if (/\D/g.test(value) && !/^\d+$/.test(value)) {
      // This regex checks for non-digit characters and ensures only whole numbers are allowed
      setError("Decimal values cannot be taken");
    } else {
      setError("");
    }
    setEstimatedJobs(value.replace(/\D/g, "")); // This will automatically remove non-digit characters
  };

  const incrementActual = () => {
    setActualJobs((prevState) => prevState + 1);
  };

  const decrementActual = () => {
    if (actualJobs > 0) {
      setActualJobs((prevState) => prevState - 1);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="subtitle1" gutterBottom>
        Estimated Job Applications Per Month
      </Typography>
      <TextField
        fullWidth
        // label="Estimated Job Applications Per Month"
        value={clientData.estimatedJobs || estimatedJobs}
        onChange={handleChangeEstimated}
        placeholder="Enter a value"
        margin="normal"
        type="number"
        error={!!error}
        helperText={error}
      />
      <Typography variant="subtitle1" sx={{ marginTop: 5 }} gutterBottom>
        Actual Job Applications Per Month
      </Typography>
      <TextField
        fullWidth
        // label="Actual Job Applications Per Month"
        margin="normal"
        type="number"
        placeholder="Enter a value"
        value={clientData.actualJobs || actualJobs}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={incrementActual}>
                <AddIcon />
              </IconButton>
              <IconButton onClick={decrementActual} disabled={actualJobs <= 0}>
                <RemoveIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default ThirdStepComponent;
