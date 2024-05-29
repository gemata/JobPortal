import React from "react";
import NavBarContainer from "../../components/UserDashboard/NavBarContainer";
import ProfileHeader from "../../components/UserDashboard/ProfileHeader";
import ResumeUpload from "../../components/UserDashboard/ResumeUpload";
import ResumeCard from "../../components/UserDashboard/ResumeCard";
import ProfileDetail from "../../components/UserDashboard/ProfileDetail";

const MyProfile = ({ userData }) => {
  return (
    <>
      <NavBarContainer />
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-8 p-4 py-8">
        <div className="flex flex-col gap-5 w-1/3">
          <ProfileHeader />
          <ResumeCard />
        </div>
        <div className="flex flex-col gap-5 w-2/3">
          <ResumeUpload className="h-32" />
          <ProfileDetail className="flex-1" />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
