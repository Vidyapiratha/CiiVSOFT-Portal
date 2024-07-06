// Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import {
  AddBoxOutlined,
  Settings,
  Person,
  ExitToApp,
  NoteAltOutlined,
  SystemUpdateAltOutlined,
  FileCopyOutlined,
} from "@mui/icons-material";
import "../../styles/sidebar.css";
import Logo from "../../assets/logo.svg"; // Assuming the logo is saved in your assets folder
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/sideBarIcons/homeIcon.svg";
import AddIcon from "../../assets/sideBarIcons/addIcon.svg";
import EditIcon from "../../assets/sideBarIcons/editIcon.svg";
import UsersIcon from "../../assets/sideBarIcons/usersIcon.svg";
import DownloadIcon from "../../assets/sideBarIcons/downloadIcon.svg";
import SettingsIcon from "../../assets/sideBarIcons/settingsIcon.svg";
import LogoutIcon from "../../assets/sideBarIcons/logoutIcon.svg";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // event.preventDefault();
    onLogout();
    navigate("/login");
  };
  return (
    <Drawer variant="permanent" className="sidebar">
      {/* Logo Section */}
      <Button sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
        <img
          src={Logo}
          alt="Company Logo"
          style={{ maxWidth: "100%" }}
          onClick={() => {
            navigate("/dashboard");
          }}
        />
      </Button>
      <Box sx={{ flexGrow: 1, marginTop: 0.5 }} />

      <List>
        {[
          { label: "Dashboard", icon: HomeIcon, path: "/dashboard" },
          { label: "Add Clients", icon: AddIcon, path: "/addClients" },
          { label: "Manage Clients", icon: EditIcon, path: "/manage-clients" },
          { label: "Reports", icon: DownloadIcon, path: "/reports" },
          {
            label: "Manage Client Jobs",
            icon: UsersIcon,
            path: "/manage-clients-jobs",
          },
        ].map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              marginBottom: 3,
              "&:hover": {
                backgroundColor: "#0B59C6", // Background color on hover
                color: "white", // Text color on hover
              },
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "#0B59C6", // Keep background color when selected (if applicable)
                color: "white",
              },
            }}
          >
            <ListItemIcon>
              <img
                src={item.icon}
                alt={item.label}
                style={{ maxWidth: "100%" }}
              />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      {/* <Divider /> */}

      {/* Spacing Element - Adjust marginBottom as needed */}
      <Box sx={{ flexGrow: 1, marginBottom: 1 }} />

      {/* <List>
        {[
          { label: "Settings", icon: SettingsIcon, path: "/dashboard", },
          { label: "Logout", icon: LogoutIcon, path: "/addClients" },
        ].map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              "&:hover": {
                backgroundColor: "#0B59C6", // Background color on hover
                color: "white", // Text color on hover
              },
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "#0B59C6", // Keep background color when selected (if applicable)
                color: "white",
              },
            }}
          >
            <ListItemIcon>
              <img
                src={item.icon}
                alt={item.label}
                style={{ maxWidth: "100%" }}
              />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List> */}

      <List>
        {/* Bottom Menu Items */}
        <ListItem
          button
          sx={{
            marginBottom: 3,
            "&:hover": {
              backgroundColor: "#0B59C6", // Background color on hover
              color: "white", // Text color on hover
            },
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "#0B59C6", // Keep background color when selected (if applicable)
              color: "white",
            },
          }}
        >
          <ListItemIcon>
            <img
              src={SettingsIcon}
              alt="Settings"
              style={{ maxWidth: "100%" }}
            />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem
          button
          sx={{
            marginBottom: 3,
            "&:hover": {
              backgroundColor: "#0B59C6", // Background color on hover
              color: "white", // Text color on hover
            },
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "#0B59C6", // Keep background color when selected (if applicable)
              color: "white",
            },
          }}
          onClick={handleLogout}
        >
          <ListItemIcon>
            <img
              src={LogoutIcon}
              alt="Logout"
              style={{ maxWidth: "100%", marginBottom: 3 }}
            />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
