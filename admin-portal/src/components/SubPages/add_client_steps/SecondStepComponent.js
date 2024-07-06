import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const SecondStepComponent = ({ clientData, saveData, setIsStepValid }) => {
  const [ats, setAts] = useState(clientData.ats || "");
  const [titleDetails, setTitleDetails] = useState(
    clientData.titleDetails || {
      apikey: "",
      username: "",
      password: "",
    }
  );
  const [apiDetails, setApiDetails] = useState(
    clientData.apiDetails || {
      candidateEndpoint: "",
      jobEndpoint: "",
      applicationEndpoint: "",
      candidateJobEndpoint: "",
      advanceApplicationEndpoint: "",
    }
  );

  useEffect(() => {
    // Combine all data updates into a single call to saveData to ensure they are all set together
    saveData({
      ats,
      titleDetails,
      apiDetails,
    });

    // Validate step completion
    const isValid =
      ats &&
      Object.values(titleDetails).every((value) => value !== "") &&
      Object.values(apiDetails).every((value) => value !== "");
    setIsStepValid(isValid);
  }, [ats, titleDetails, apiDetails]);

  const handleChange = (event) => {
    setAts(event.target.value);
  };

  const handleTitleChange = (event) => {
    const { name, value } = event.target;
    setTitleDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApiChange = (event) => {
    const { name, value } = event.target;
    setApiDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <FormControl fullWidth margin="normal">
        <Typography variant="subtitle1" gutterBottom>
          Choose an ATS
        </Typography>
        <Select
          labelId="ats-label"
          id="ats-select"
          value={ats}
          onChange={handleChange}
        >
          <MenuItem value="Greenhouse">Greenhouse</MenuItem>
          <MenuItem value="Lever">Lever</MenuItem>
          <MenuItem value="SAP SuccessFactors">SAP SuccessFactors</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="subtitle1" sx={{ marginTop: 5 }} gutterBottom>
        Title
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="API Key"
        name="apikey"
        value={titleDetails.apikey}
        onChange={handleTitleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        name="username"
        value={titleDetails.username}
        onChange={handleTitleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        name="password"
        type="password"
        value={titleDetails.password}
        onChange={handleTitleChange}
      />
      <Typography variant="subtitle1" sx={{ marginTop: 5 }} gutterBottom>
        API Endpoints
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Candidate Endpoint"
        name="candidateEndpoint"
        value={apiDetails.candidateEndpoint}
        onChange={handleApiChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Job Endpoint"
        name="jobEndpoint"
        value={apiDetails.jobEndpoint}
        onChange={handleApiChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Application Endpoint"
        name="applicationEndpoint"
        value={apiDetails.applicationEndpoint}
        onChange={handleApiChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Candidate Job Endpoint"
        name="candidateJobEndpoint"
        value={apiDetails.candidateJobEndpoint}
        onChange={handleApiChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Advance / Update Candidate Application Endpoint"
        name="advanceApplicationEndpoint"
        value={apiDetails.advanceApplicationEndpoint}
        onChange={handleApiChange}
      />
    </Container>
  );
};

export default SecondStepComponent;
