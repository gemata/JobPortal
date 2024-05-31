import React, { useEffect, useState } from 'react';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import SignInPrompt from '../../components/SignInPrompt';

const CompanyInterviews = ({ userData }) => {
  return (
    <>
      <div className='companyInterviews dashboard bg-gray-100'>
        <DashboardNavSection />
        {userData.length != 0 && userData.role === 'Company' ? <></> : <SignInPrompt />}
      </div>
    </>
  );
};

export default CompanyInterviews;
