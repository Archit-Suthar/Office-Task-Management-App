import React from "react";
import "./App.css";
import UserLogin from "./components/molecules/form/UserLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home-page/HomePage";
import CompanyRegister from "./components/organisms/register/CompanyRegister";
import Dashboard from "./components/pages/dashboard/Dashboard";
import SideTopBar from "./components/molecules/side-top-bar/SideTopBar";
import NewTicket from "./components/pages/new-ticket/NewTicket";
import Tickets from "./components/pages/tickets/Tickets";
import Users from "./components/pages/users/Users";
import Help from "./components/pages/help/Help";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route
            path="/dashboard"
            element={
              <>
                <SideTopBar element={<Dashboard />} />
              </>
            }
          />
          <Route
            path="/tickets/new"
            element={
              <>
                <SideTopBar element={<NewTicket />} />
              </>
            }
          />
          <Route
            path="/tickets"
            element={
              <>
                <SideTopBar element={<Tickets />} />
              </>
            }
          />
          <Route
            path="/users"
            element={
              <>
                <SideTopBar element={<Users />} />
              </>
            }
          />
          <Route
            path="/help"
            element={
              <>
                <SideTopBar element={<Help />} />
              </>
            }
          />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
