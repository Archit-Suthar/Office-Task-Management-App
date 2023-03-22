import React from "react";
import "./App.css";
import UserLogin from "./components/molecules/form/UserLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home-page/HomePage";
import CompanyRegister from "./components/organisms/register/CompanyRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
