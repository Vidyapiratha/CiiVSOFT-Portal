import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import ProgressIndicator from "../utils/ProgressIndicator";
import { useNavigate } from "react-router-dom";
import FirstStepComponent from "../SubPages/add_client_steps/FirstStepComponent";
import SecondStepComponent from "../SubPages/add_client_steps/SecondStepComponent";
import ThirdStepComponent from "../SubPages/add_client_steps/ThirdStepComponent";
import FourthStepComponent from "../SubPages/add_client_steps/FourthStepComponent";
import Layout from "../utils/Layout";

const Add_Clients = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [clientData, setClientData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const [nextButton, setNextButton] = useState("Next");
  const [completed, setCompleted] = useState({});
  const [isStepValid, setIsStepValid] = useState(false);
  const handleNext = () => {
    const newCompleted = { ...completed };
    if (currentStep >= 4) {
      setOpenDialog(true);
    } else {
      console.log(isStepValid);
      // console.log(validationFunction(currentStep));
      if (isStepValid) {
        setCurrentStep(currentStep + 1);
        newCompleted[currentStep - 1] = true;
        setCompleted(newCompleted);
        setIsStepValid(false);
      }
    }
    console.log(completed);
  };
  const handleBack = () => {
    const newCompleted = { ...completed };
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      newCompleted[currentStep - 1] = false;
    }
    setCompleted(newCompleted);
    console.log(completed);
  };

  const saveData = (newData) => {
    setClientData({ ...clientData, ...newData });
  };

  const handleCloseDialog = (confirm) => {
    if (confirm) {
      console.log("Saving data", clientData);
      const commonProps = { clientData, saveData, isStepValid, setIsStepValid };
      // Here you would typically handle the API submission or further form processing
      // navigate("/dashboard"); // Navigate to dashboard after saving
      return <FirstStepComponent {...commonProps} />;
    }
    setOpenDialog(false);
  };
  // const handlePreviousStep = () => {
  //   const newCompleted = { ...completed };
  //   // newCompleted[currentStep - 2] = false;
  //   currentStep <= 4
  //     ? (newCompleted[currentStep - 1] = false)
  //     : (newCompleted[currentStep - 2] = false);
  //   setCompleted(newCompleted);
  //   console.log(currentStep, "currentStep");

  //   if (currentStep > 1) setCurrentStep(currentStep - 1);
  //   setNextButton("Next");
  // };

  const renderStepContent = () => {
    const commonProps = { clientData, saveData, isStepValid, setIsStepValid };
    switch (currentStep) {
      case 1:
        return <FirstStepComponent {...commonProps} />;
      case 2:
        return <SecondStepComponent {...commonProps} />;
      case 3:
        return <ThirdStepComponent {...commonProps} />;
      case 4:
        return <FourthStepComponent {...commonProps} />;
      default:
        return <FirstStepComponent {...commonProps} />;
    }
  };

  return (
    <>
      <Layout page={"Add Clients"}>
        <div style={{ display: "flex", width: "100%" }}>
          <Container component="main" sx={{ mt: 4, mb: 4 }}>
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
              Add Clients
            </Button>
          </Typography> */}

            <Typography
              variant="h4"
              align="center"
              sx={{ marginBottom: 10 }}
              gutterBottom
            >
              Add Clients
            </Typography>

            <ProgressIndicator
              currentStep={currentStep}
              stepsCompleted={completed}
            />

            <Box component="form" sx={{ marginTop: 15 }}>
              {renderStepContent()}
            </Box>
            {clientData.alertMessage && clientData.alertMessage !== "" && (
              <Alert severity="error">{clientData.alertMessage}</Alert>
            )}
            <Box
              // component="form"
              sx={{
                mt: 2,
                mx: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleBack}
                disabled={currentStep === 1}
                sx={{
                  mt: 2,
                  mb: 2,
                  backgroundColor: "#A8ADB4",
                  color: "white",
                  marginRight: 2,
                  ":hover": {
                    backgroundColor: "#A8ADB4", // Same as normal state
                    "@media (hover: none)": {
                      backgroundColor: "#A8ADB4", // Ensures consistent color even on devices that can't hover
                    },
                  },
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                // color="primary"
                onClick={handleNext}
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
                disabled={!isStepValid}
              >
                {currentStep === 4 ? "Save Client" : "Next"}
              </Button>
            </Box>

            <Dialog open={openDialog} onClose={() => handleCloseDialog(false)}>
              <DialogTitle>Confirm</DialogTitle>
              <DialogContent>
                Are you sure you want to save these details?
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleCloseDialog(false)}>No</Button>
                <Button onClick={() => handleCloseDialog(true)}>Yes</Button>
              </DialogActions>
            </Dialog>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Add_Clients;
