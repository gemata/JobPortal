import React, { useEffect, useState } from 'react';
import DashboardNavSection from '../../../components/CompanyComponents/DashboardNavSection';
import SignInPrompt from '../../../components/SignInPrompt';

const CompanyAnalyticsOverview = ({ userData }) => {
  return (
    <>
      <div className='companyAnalyticsOverview dashboard bg-gray-100'>
        <DashboardNavSection />
        {userData.length != 0 && userData.role === 'Company' ? <></> : <SignInPrompt />}
      </div>
    </>
  );
};

export default CompanyAnalyticsOverview;
