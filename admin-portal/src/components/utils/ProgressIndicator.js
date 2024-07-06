// ProgressIndicator.js
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  styled,
  stepLabelClasses,
} from "@mui/material";
import "../../styles/progressIndicator.css";

const CustomStepLabel = styled(StepLabel)(({ theme, ownerState }) => ({
  [`& .${stepLabelClasses.completed}`]: {
    color: ownerState.completed ? "#47B881" : theme.palette.text.primary, // Green color for completed steps
  },
}));

const ProgressIndicator = ({ currentStep, stepsCompleted }) => {
  const steps = [
    "Company Info",
    "Client Provisioning",
    "Estimated Job Applications",
    "Default AI Prompts",
  ];

  return (
    <Stepper
      activeStep={currentStep - 1}
      alternativeLabel
      className="progress-indicator"
      sx={{ color: "beige" }}
    >
      {steps.map((label, index) => (
        <Step key={label} completed={!!stepsCompleted[index]}>
          <CustomStepLabel ownerState={{ completed: !!stepsCompleted[index] }}>
            {label}
          </CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ProgressIndicator;
