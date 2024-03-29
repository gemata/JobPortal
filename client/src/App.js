import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import Header from "./components/Header";
import CompanyInterviews from "./pages/CompanyInterviews";
import CompanyJobs from "./pages/CompanyJobs";

function App() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setUserData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Header userData={userData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/Dashboard" element={<UserDashboard />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/jobs" element={<CompanyJobs />} />
        <Route path="/company/interviews" element={<CompanyInterviews />} />
      </Routes>
    </div>
  );
}

export default App;
