import React, { useEffect, useState } from 'react';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import SignInPrompt from '../../components/SignInPrompt';

const CompanyJobs = ({ userData }) => {
  return (
    <>
      <div className='companyJobs bg-gray-100'>
        <DashboardNavSection />
        {userData.length != 0 && userData.role === 'Company' ? <></> : <SignInPrompt />}
      </div>
    </>
  );
};

export default CompanyJobs;
