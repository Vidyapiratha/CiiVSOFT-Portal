import React, { useEffect, useState } from "react";
import "../../styles/dashboard.css";
import Sidebar from "../utils/Sidebar";
import ProgressIndicator from "../utils/ProgressIndicator";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import {
  AddBoxOutlined,
  Description,
  Settings,
  Person,
} from "@mui/icons-material";
import DashboardCard from "../utils/DashboardCard";
import AddClientsIcon from "../../assets/addClientsIcon.svg";
import ManageClientsIcon from "../../assets/manageClientsIcon.svg";
import ManageClientsJobIcon from "../../assets/manageClientsJobIcon.svg";
import ReportsIcon from "../../assets/reportsIcon.svg";

const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        {/* <Sidebar /> */}
        <div
          className="main-content"
          style={{ marginLeft: "240px", marginRight: "240px" }}
        >
          {/* <ProgressIndicator currentStep={1} /> */}
          <Typography variant="h4" align="left" gutterBottom>
            Dashboard
          </Typography>
          <div>
            <Grid style={{ marginTop: 10 }} container spacing={7}>
              {[
                {
                  title: "Add Clients",
                  icon: AddClientsIcon,
                  page: "addClients",
                },
                {
                  title: "Manage Clients",
                  icon: ManageClientsIcon,
                  page: "manage-clients",
                },
                {
                  title: "Manage Client Jobs",
                  icon: ManageClientsJobIcon,
                  page: "manage-clients-jobs",
                },
                {
                  title: "Reports",
                  icon: ReportsIcon,
                  page: "reports",
                },
              ].map((item, index) => (
                <Grid item xs={2} sm={6} md={6} key={index}>
                  <DashboardCard
                    title={item.title}
                    icon={item.icon}
                    page={item.page}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
