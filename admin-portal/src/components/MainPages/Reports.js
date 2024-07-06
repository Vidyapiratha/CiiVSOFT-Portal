import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  Grid,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Layout from "../utils/Layout";

// Dummy company data and reports
const companies = [
  { id: 1, name: "Company Name 1" },
  { id: 2, name: "Company Name 2" },
];

// Example data that might come from a JSON file
const reports = [
  { companyId: 1, date: "2024-06-01", details: "Details of report 1" },
  { companyId: 1, date: "2024-06-05", details: "Details of report 2" },
  { companyId: 2, date: "2024-06-02", details: "Details of report 3" },
];

export default function Reports() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleDateChange = (newValue, type) => {
    if (type === "start") {
      setStartDate(newValue);
    } else {
      setEndDate(newValue);
    }
  };

  const handleRunReport = () => {
    setOpenDialog(true);
  };

  const handleDownload = () => {
    // Filter data based on selected company and date range
    const filteredData = reports.filter(
      (report) =>
        report.companyId === selectedCompany &&
        new Date(report.date) >= startDate &&
        new Date(report.date) <= endDate
    );

    // Create a Blob from the JSON data
    const blob = new Blob([JSON.stringify(filteredData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    // Create a link and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = `report-${selectedCompany}-${startDate.toISOString()}-${endDate.toISOString()}.json`;
    link.click();

    // Clean up and reset form
    URL.revokeObjectURL(url);
    setSelectedCompany("");
    setStartDate(null);
    setEndDate(null);
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const canRunReport = selectedCompany && startDate && endDate;

  return (
    <Layout page={"Reports"}>
      <Container maxWidth="sm">
        <Box sx={{ marginTop: 4 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ marginBottom: 5 }}
            gutterBottom
          >
            Reports
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel id="company-select-label">Company / Client</InputLabel>
            <Select
              labelId="company-select-label"
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <DesktopDatePicker
                  label="Start date"
                  inputFormat="MM/dd/yyyy"
                  value={startDate}
                  onChange={(newValue) => handleDateChange(newValue, "start")}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <DateRangeIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <DesktopDatePicker
                  label="End date"
                  inputFormat="MM/dd/yyyy"
                  value={endDate}
                  onChange={(newValue) => handleDateChange(newValue, "end")}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <DateRangeIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
          <Button
            variant="contained"
            onClick={handleRunReport}
            disabled={!canRunReport}
            sx={{ mt: 3 }}
          >
            Run
          </Button>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Download Report"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you want to download the report?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>No</Button>
              <Button onClick={handleDownload} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </Layout>
  );
}
