import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../assets/sideBarIcons/profileIcon.svg";

const Layout = ({ children, page, subpage, mainPageLink }) => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" sx={{ boxShadow: "none" }} color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Dashboard / Manage Clients */}
            <Button
              className="navigationButton"
              variant="text"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Button>{" "}
            /
            <Button
              className="navigationButton"
              variant="text"
              onClick={() => mainPageLink && navigate(mainPageLink)}
            >
              {page}
            </Button>
            {subpage && (
              <Button className="navigationButton" variant="text">
                / {subpage}
              </Button>
            )}
          </Typography>
          <Button
            sx={{ padding: 2, display: "flex", justifyContent: "center" }}
          >
            <img src={ProfileIcon} alt="Profile" style={{ maxWidth: "100%" }} />
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
    </>
  );
};

export default Layout;
