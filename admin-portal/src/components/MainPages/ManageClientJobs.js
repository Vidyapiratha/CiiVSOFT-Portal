import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Layout from "../utils/Layout";

// Dummy data for demonstration
const companies = [
  { id: 1, name: "Company Name 1" },
  { id: 2, name: "Company Name 2" },
];

const jobs = {
  1: [{ id: "123", prompt: "Description for Job 123" }],
  2: [{ id: "456", prompt: "Description for Job 456" }],
};

function ManageClientJobs() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedJobId, setSelectedJobId] = useState("");
  const [jobPrompt, setJobPrompt] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    setSelectedJobId(""); // Reset job ID when company changes
    setJobPrompt(""); // Clear previous job prompt
  };

  const handleJobChange = (event) => {
    const job = jobs[selectedCompany].find(
      (job) => job.id === event.target.value
    );
    setSelectedJobId(event.target.value);
    setJobPrompt(job ? job.prompt : "");
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    // Here you would typically handle the save to backend
    console.log("Saved data", { selectedCompany, selectedJobId, jobPrompt });
    setIsEditable(false); // Turn off edit mode on save
    if (selectedCompany !== "" && selectedJobId !== "" && jobPrompt !== "") {
      resetForm();
    }
  };
  const resetForm = () => {
    setSelectedCompany("");
    setSelectedJobId("");
    setJobPrompt("");
  };

  return (
    <div>
      <Layout page={"Manage Client Jobs"}>
        {/* <Typography
          sx={{ marginBottom: 5, marginLeft: 0 }}
          color="textSecondary"
          gutterBottom
        >
          <Button
            className="navigationButton"
            variant="text"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>{" "}
          /
          <Button className="navigationButton" variant="text">
            Manage Clients Jobs
          </Button>
        </Typography> */}
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            mt: 4,
            mb: 4,
            marginTop: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ marginBottom: 5 }}
            gutterBottom
          >
            Manage Client Jobs
          </Typography>
          <Box sx={{ my: 2, marginTop: 5 }}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="company-label">Company / Client</InputLabel>
              <Select
                labelId="company-label"
                value={selectedCompany}
                label="Company / Client"
                onChange={handleCompanyChange}
              >
                {companies.map((company) => (
                  <MenuItem key={company.id} value={company.id}>
                    {company.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="job-id-label">Job ID</InputLabel>
              <Select
                labelId="job-id-label"
                value={selectedJobId}
                label="Job ID"
                onChange={handleJobChange}
                disabled={!selectedCompany}
              >
                {selectedCompany &&
                  jobs[selectedCompany].map((job) => (
                    <MenuItem key={job.id} value={job.id}>
                      {job.id}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            {selectedJobId && (
              <Box sx={{ mt: 2 }}>
                <TextField
                  label="Job Prompt"
                  fullWidth
                  multiline
                  minRows={5}
                  value={jobPrompt}
                  onChange={(e) => setJobPrompt(e.target.value)}
                  InputProps={{
                    readOnly: !isEditable,
                    endAdornment: (
                      <IconButton onClick={handleEditClick}>
                        <EditIcon />
                      </IconButton>
                    ),
                  }}
                />
              </Box>
            )}
          </Box>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: "#FFBD59",
              color: "white",
              ":hover": {
                backgroundColor: "#FFBD59", // Same as normal state
                "@media (hover: none)": {
                  backgroundColor: "#FFBD59", // Ensures consistent color even on devices that can't hover
                },
              },
            }}
          >
            Save
          </Button>
        </Container>
      </Layout>
    </div>
  );
}

export default ManageClientJobs;
