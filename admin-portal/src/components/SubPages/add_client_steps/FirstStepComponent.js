import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Grid,
} from "@mui/material";
import {
  AddCircleRounded,
  Edit,
  CheckCircleOutline,
} from "@mui/icons-material";

const FirstStepComponent = ({ clientData, saveData, setIsStepValid }) => {
  const [clientContacts, setClientContacts] = useState(
    clientData.clientContacts || []
  );
  const [errors, setErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [save, setSave] = useState(false);

  useEffect(() => {
    saveData({ clientContacts });
    setIsStepValid(clientData.companyName && clientContacts.length > 0);
  }, [clientContacts, clientData.companyName, saveData, setIsStepValid]);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
      console.log(validateEmail(value));
      !validateEmail(value) ??
        setErrors((prev) => ({ ...prev, [field]: `Enter a valid mail` }));
    } else if (field === "jobTitle") {
      setJobTitle(value);
    } else if (field === "companyName") {
      saveData({ companyName: value });
    }

    validateField(value, field);
  };

  const validateField = (value, field) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, [field]: `${field} is required` }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    validateField(name, "name");
    validateField(email, "email") && validateEmail(email);
    validateField(jobTitle, "jobTitle");
    return (
      !errors.name &&
      !errors.email &&
      !errors.jobTitle &&
      name &&
      email &&
      jobTitle
    );
  };

  const handleAddClient = () => {
    if (validateForm()) {
      setOpenDialog(true);
    }
  };

  const handleConfirmAddClient = () => {
    setClientContacts([
      ...clientContacts,
      {
        name,
        email,
        jobTitle,
        type: clientContacts.length > 0 ? "secondary" : "primary",
      },
    ]);
    resetForm();
    setOpenDialog(false);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setJobTitle("");
    setErrors({});
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    return emailRegex.test(email);
  };

  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <Container component="main" sx={{ mt: 4, mb: 4 }}>
          <Box
            // component="form"
            sx={{
              mt: 2,
              mx: 25,
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Company Name
            </Typography>
            <TextField
              placeholder="Client/Company Name"
              fullWidth
              margin="normal"
              value={clientData.companyName || ""}
              onChange={(e) => handleInputChange(e, "companyName")}
            />
            {clientContacts.map((contact, index) => (
              <Card
                key={index}
                sx={{
                  mt: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Chip
                    variant="outlined"
                    label={contact.type}
                    color={contact.type === "primary" ? "primary" : "secondary"}
                    sx={{ position: "relative", marginTop: 2, marginLeft: 75 }}
                  />
                  <Grid item xs={12}>
                    <TextField
                      defaultValue={contact.name}
                      disabled={false}
                      fullWidth
                      type="text"
                      sx={{ border: "inherit", transform: "none" }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {" "}
                    <TextField
                      defaultValue={contact.email}
                      disabled
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      defaultValue={contact.jobTitle}
                      disabled
                      fullWidth
                    />
                  </Grid>
                </Grid>
                {!save ? (
                  <IconButton onClick={() => setSave(true)}>
                    <Edit />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setSave(false)}>
                    <CheckCircleOutline color="success" />
                  </IconButton>
                )}
              </Card>
            ))}
            <Typography variant="h6" sx={{ marginTop: 5 }} gutterBottom>
              Key Client Contacts
            </Typography>
            <TextField
              id="name"
              required
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              error={!!errors.name}
              helperText={errors.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
            <TextField
              id="email"
              label="Email Address"
              fullWidth
              margin="normal"
              value={email}
              error={!!errors.email}
              helperText={errors.email}
              onChange={(e) => handleInputChange(e, "email")}
              inputProps={{ type: "email" }}
            />
            <TextField
              id="jobTitle"
              label="Job Title"
              fullWidth
              margin="normal"
              value={jobTitle}
              error={!!errors.jobTitle}
              helperText={errors.jobTitle}
              onChange={(e) => handleInputChange(e, "jobTitle")}
            />
            <IconButton
              // color="primary"
              onClick={handleAddClient}
              sx={{ mt: 2, mb: 2 }}
            >
              <AddCircleRounded fontSize="large" />
            </IconButton>
          </Box>
        </Container>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to add this as your{" "}
            {clientContacts.length > 0 ? "secondary" : "primary"} contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>No</Button>
          <Button
            onClick={() =>
              handleConfirmAddClient(
                clientContacts.length > 0 ? "secondary" : "primary"
              )
            }
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FirstStepComponent;
