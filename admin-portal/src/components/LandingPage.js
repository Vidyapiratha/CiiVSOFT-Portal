import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddClients from "./components/AddClients";
import ManageClients from "./components/ManageClients";
import ClientProfile from "./components/ClientProfile";
import Reports from "./components/Reports";
import Add_Clients from "./components/Add-Clients";

function LandingPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-clients" element={<Add_Clients />} />
        <Route path="/addClients" element={<AddClients />} />
        <Route path="/manage-clients" element={<ManageClients />} />
        <Route path="/manage-clients/:clientId" element={<ClientProfile />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default LandingPage;
