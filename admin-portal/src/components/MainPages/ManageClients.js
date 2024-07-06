import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArchiveIcon from "@mui/icons-material/Archive";
import WarningIcon from "@mui/icons-material/Warning";
import { visuallyHidden } from "@mui/utils";
import { useNavigate } from "react-router-dom";
import Layout from "../utils/Layout";

const initialClients = [
  {
    id: 1,
    companyName: "Company Name 1",
    ats: "SAP SuccessFactors",
    primaryContact: "Jessica Hanson",
    email: "jessica.hanson@example.com",
    role: "Project Manager",
  },
  {
    id: 2,
    companyName: "Company Name 2",
    ats: "Greenhouse",
    primaryContact: "Curtis Weaver",
    email: "curtis.weaver@example.com",
    role: "Hiring Manager",
  },
  {
    id: 3,
    companyName: "Company Name 3",
    ats: "Lever",
    primaryContact: "Debra Holt",
    email: "debra.holt@example.com",
    role: "Hiring Manager",
  },
  // Add more clients as needed
];

function ManageClientsComponent() {
  const [clients, setClients] = useState(initialClients);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    return () => {
      // Return a function that will be called on click
      const filteredClients = clients.filter((client) => client.id !== id);
      setClients(filteredClients);
    };
  };
  return (
    <Layout page={"Manage Clients"}>
      <Box sx={{ margin: 4 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: 5 }}
          gutterBottom
          component="div"
        >
          Manage Clients
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="clients table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#003366" }}>
                {[
                  "Company Name",
                  "ATS",
                  "Primary Contact Name",
                  "Email Address",
                  "Role",
                  "Action",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id} hover>
                  <TableCell
                    onClick={() =>
                      navigate(`/client/${client.id}`, { state: client })
                    }
                  >
                    {client.companyName}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate(`/client/${client.id}`, { state: client })
                    }
                  >
                    {client.ats}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate(`/client/${client.id}`, { state: client })
                    }
                  >
                    {client.primaryContact}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate(`/client/${client.id}`, { state: client })
                    }
                  >
                    {client.email}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate(`/client/${client.id}`, { state: client })
                    }
                  >
                    <Chip
                      label={client.role}
                      color="primary"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() =>
                        navigate(`/client/${client.id}`, { state: client })
                      }
                      aria-label="view"
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleDelete(client.id)}
                      aria-label="archive"
                    >
                      <ArchiveIcon />
                    </IconButton>
                    <IconButton aria-label="warning">
                      <WarningIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default ManageClientsComponent;
