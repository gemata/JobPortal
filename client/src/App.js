import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import CompanyInterviews from "./pages/CompanyPages/Interviews";
import CompanyJobs from "./pages/CompanyPages/Jobs";
import CompanyDashboard from "./pages/CompanyPages/Dashboard";
import Dashboard from "./pages/UserPages/Dashboard";
import MyProfile from "./pages/UserPages/MyProfile";
import JobTracker from "./pages/UserPages/JobTracker";
import MyGoals from "./pages/UserPages/MyGoals";
import JobAlerts from "./pages/UserPages/JobAlerts";
import ListedJobs from "./pages/UserPages/ListedJobs";
import Settings from "./pages/UserPages/Settings";
import Messages from "./pages/UserPages/Messages";

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
        <Route path="/profile/detail" element={<MyProfile />} />
        <Route path="/profile/dashboard" element={<Dashboard />} />
        <Route path="/profile/dashboard" element={<Dashboard />} />
        <Route path="/profile/job-tracker" element={<JobTracker />} />
        <Route path="/profile/my-goals" element={<MyGoals />} />
        <Route path="/profile/job-alerts" element={<JobAlerts />} />
        <Route path="/profile/listed-jobs" element={<ListedJobs />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/messages" element={<Messages />} />

        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/jobs" element={<CompanyJobs />} />
        <Route path="/company/interviews" element={<CompanyInterviews />} />
      </Routes>
    </div>
  );
}

export default App;
