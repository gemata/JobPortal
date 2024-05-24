import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import CompanyInterviews from "./pages/CompanyPages/Interviews";
import CompanyJobs from "./pages/CompanyPages/Jobs";
import CompanyDashboard from "./pages/CompanyPages/Dashboard";
import CompanyCandidates from "./pages/CompanyPages/Candidates";
import CompanyAnalyticsOverview from "./pages/CompanyPages/Analytics/Overview";
import CompanyJobsShow from "./pages/CompanyPages/Jobs/Show";
import CompanyJobsCreate from "./pages/CompanyPages/Jobs/Create";
import Dashboard from "./pages/UserPages/Dashboard";
import MyProfile from "./pages/UserPages/MyProfile";
import JobTracker from "./pages/UserPages/JobTracker";
import MyGoals from "./pages/UserPages/MyGoals";
import JobAlerts from "./pages/UserPages/JobAlerts";
import ListedJobs from "./pages/UserPages/ListedJobs";
import Settings from "./pages/UserPages/Settings";
import Messages from "./pages/UserPages/Messages";
import ResetPassword from "./pages/ResetPassword";
import ConfirmAccount from "./pages/ConfirmAccount/ConfirmAccount";
import SubscriptionHome from "./pages/Subscription/SubscriptionHome";
import ApplicantList from "./pages/CompanyPages/ApplicantList";
import CheckoutSuccess from "./pages/Subscription/CheckoutSuccess";

function App() {
  const [userData, setUserData] = useState([]);
  const location = useLocation(); // Add this line to use the location hook

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
      {location.pathname !== "/reset-password" &&
        location.pathname !== "/confirm-account" && (
          <Header userData={userData} />
        )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/detail" element={<MyProfile />} />
        <Route path="/profile/dashboard" element={<Dashboard />} />
        <Route path="/profile/job-tracker" element={<JobTracker />} />
        <Route path="/profile/my-goals" element={<MyGoals />} />
        <Route path="/profile/job-alerts" element={<JobAlerts />} />
        <Route path="/profile/listed-jobs" element={<ListedJobs />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/messages" element={<Messages />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-account" element={<ConfirmAccount />} />
        <Route path="/subscription" element={<SubscriptionHome />} />
        <Route path="/success" element={<CheckoutSuccess />} />

        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/jobs" element={<CompanyJobs />} />
        <Route path="/company/interviews" element={<CompanyInterviews />} />
        <Route path="/company/aplicantlist" element={<ApplicantList />} />
        <Route
          path="/company/analytics"
          element={<CompanyAnalyticsOverview />}
        />

        <Route path="/company/jobs/create" element={<CompanyJobsCreate />} />
        <Route path="/company/jobs/show/:id" element={<CompanyJobsShow />} />
      </Routes>
    </div>
  );
}

export default App;
