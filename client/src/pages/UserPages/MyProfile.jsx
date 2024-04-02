import React from "react";
import NavBarContainer from "../../components/UserDashboard/NavBarContainer";
import ProfileHeader from "../../components/UserDashboard/ProfileHeader";
import ResumeUpload from "../../components/UserDashboard/ResumeUpload";
import ResumeCard from "../../components/UserDashboard/ResumeCard";

const UserDashboard = () => {
  return (
    <>
      <NavBarContainer />
      <div className="flex justify-center gap-8 p-4">
        <ProfileHeader />
        <ResumeUpload />
      </div>
      <ResumeCard />
    </>
  );
};

export default UserDashboard;
