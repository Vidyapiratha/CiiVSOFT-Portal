import React from "react";
import { useLocation } from "react-router-dom";
import { Box, TextField, Typography, Paper, Divider } from "@mui/material";
import Layout from "../../utils/Layout";

function ClientProfile() {
  const location = useLocation();
  const { companyName, ats, primaryContact, email, role } = location.state;

  return (
    <Layout
      page={"Manage Client Jobs"}
      mainPageLink={"/manage-clients"}
      subpage={`${companyName} Profile`}
    >
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom component="div">
          {companyName} Profile
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Company Info
          </Typography>
          <TextField
            fullWidth
            label="Company Name"
            margin="normal"
            defaultValue={companyName}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            label="Key Contact"
            margin="normal"
            defaultValue={primaryContact}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Paper>

        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Client Provisioning
          </Typography>
          <TextField
            fullWidth
            label="ATS"
            margin="normal"
            defaultValue={ats}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            label="API Username"
            margin="normal"
            defaultValue="Filled/focus" // Replace with actual data if available
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            label="API Password"
            margin="normal"
            defaultValue="********" // Simulated password
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Paper>

        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Estimated Job Applications
          </Typography>
          <TextField
            fullWidth
            label="Per month"
            margin="normal"
            defaultValue="160000" // Replace with actual data if available
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            label="Actual per month"
            margin="normal"
            defaultValue="8000" // Replace with actual data if available
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Paper>
      </Box>
    </Layout>
  );
}

export default ClientProfile;
