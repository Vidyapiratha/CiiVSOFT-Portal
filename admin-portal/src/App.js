import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/MainPages/LoginForm";
import SignUpForm from "./components/MainPages/SignUpForm";
import Dashboard from "./components/MainPages/Dashboard";
import AddClients from "./components/MainPages/AddClients";
import ManageClients from "./components/MainPages/ManageClients";
import ClientProfile from "./components/SubPages/manage_client_steps/ClientProfile";
import Reports from "./components/MainPages/Reports";
import Add_Clients from "./components/Add-Clients";
import TwoFactorAuthForm from "./components/twoFactorAuthForm";
import Sidebar from "./components/utils/Sidebar";
import CompanyProfile from "./components/SubPages/manage_client_steps/CompanyProfile";
import ManageClientJobs from "./components/MainPages/ManageClientJobs";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("isLoggedIn");
    const storedTimestamp = localStorage.getItem("timestamp");
    if (storedLoginInfo && storedTimestamp) {
      const currentTime = new Date().getTime();
      const diff = (currentTime - storedTimestamp) / 60000; // Convert to minutes
      if (diff < 15) {
        setIsLoggedIn(true);
      } else {
        localStorage.clear();
      }
    }
  }, []);

  const loginHandler = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem("isLoggedIn", status);
    localStorage.setItem("timestamp", new Date().getTime());
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };
  return (
    <Router>
      {/* <div style={{ display: "flex" }}>
        {isLoggedIn && <Sidebar />}
        <div style={{ flexGrow: 1, padding: "20px", width: "100%" }}>
          <Routes>
            <Route
              path="/login"
              element={<LoginForm onLogin={loginHandler} />}
            />
            <Route path="/" element={<Navigate replace to="/login" />} /> */}
      {/* <Route path="/dashboard" element={<Navigate replace to="/" />} /> */}
      {/* <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} /> */}
      {/* {isLoggedIn ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addClients" element={<AddClients />} /> */}
      {/* More authenticated routes here */}
      {/* </>
            ) : (
              <Route path="*" element={<Navigate replace to="/" />} />
            )}
          </Routes>
        </div>
      </div> */}
      <div style={{ display: "flex" }}>
        {isLoggedIn && <Sidebar onLogout={logoutHandler} />}
        <div style={{ flexGrow: 1, width: "100%" }}>
          <Routes>
            <Route
              path="/login"
              element={
                !isLoggedIn ? (
                  <LoginForm onLogin={loginHandler} />
                ) : (
                  <Navigate replace to="/dashboard" />
                )
              }
            />
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate replace to="/dashboard" />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/twoFactorAuth" element={<TwoFactorAuthForm />} />
            {isLoggedIn && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/companyProfile" element={<CompanyProfile />} />
                <Route path="/add-clients" element={<Add_Clients />} />
                <Route path="/addClients" element={<AddClients />} />
                <Route path="/manage-clients" element={<ManageClients />} />
                <Route path="/client/:id" element={<ClientProfile />} />

                <Route
                  path="/manage-clients/:clientId"
                  element={<ClientProfile />}
                />
                <Route
                  path="/manage-clients-jobs"
                  element={<ManageClientJobs />}
                />
                <Route path="/reports" element={<Reports />} />
              </>
            )}
            : (
            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
            />
            )
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
