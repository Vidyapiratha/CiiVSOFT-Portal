import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  Grid,
  Alert,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function CompanyProfile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate loading data from a local file or an API
    fetch("/data.json") // Assuming you have `data.json` in your public directory
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Failed to load data", error));
  }, []);

  if (!data) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Company Name 4 Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Company Name"
            defaultValue={data.companyName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="ATS"
            defaultValue={data.ats}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="API Username"
            defaultValue={data.apiUsername}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="password"
            label="API Password"
            defaultValue={data.apiPassword}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Estimated Job Applications per month"
            defaultValue={data.perMonthEstimate}
            variant="outlined"
            InputProps={{
              endAdornment: <ArrowRightIcon color="error" />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Actual per month"
            defaultValue={data.actualPerMonth}
            variant="outlined"
            InputProps={{
              endAdornment: <ArrowRightIcon color="error" />,
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Container>
  );
}

export default CompanyProfile;
