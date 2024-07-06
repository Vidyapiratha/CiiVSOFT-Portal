// AddClients.js
import React from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import "../styles/addClients.css";
import ProgressIndicator from "./utils/ProgressIndicator";

const Add_Clients = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Typography
        color="textSecondary"
        sx={{ marginTop: 5, marginLeft: 5 }}
        gutterBottom
      >
        Dashboard / Add Clients
      </Typography>
      <div className="main-content">
        <Box className="add-clients-container">
          <Typography
            variant="h4"
            align="center"
            sx={{ marginBottom: 5 }}
            gutterBottom
          >
            Add Clients
          </Typography>
          <ProgressIndicator currentStep={1} />
          <Container
            component="main"
            maxWidth="sm"
            sx={{ mt: 4, mb: 4, marginTop: 10 }}
          >
            {/* Form for adding clients */}
            <Box component="form" sx={{ mt: 2 }}>
              <TextField label="Company Name" fullWidth margin="normal" />
              <Typography variant="h6" gutterBottom>
                Key Client Contacts
              </Typography>
              <TextField label="Name" fullWidth margin="normal" />
              <TextField label="Email Address" fullWidth margin="normal" />
              <TextField label="Job Title" fullWidth margin="normal" />
              <Button variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
                Next
              </Button>
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Add_Clients;
