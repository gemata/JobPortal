import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import LowerJobSection from '../../components/CompanyComponents/Dashboard/LowerJobSection';
import JobTableSection from '../../components/CompanyComponents/Dashboard/JobTable';
import SignInPrompt from '../../components/SignInPrompt';

const CompanyDashboard = ({ userData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='dashboard bg-gray-100'>
        <DashboardNavSection />
        {userData.length != 0 && userData.role === 'Company' ? (
          <>
            <JobTableSection />
            <hr className='h-px my-8 bg-gray-300 border-0' />
            <LowerJobSection />
          </>
        ) : (
          <SignInPrompt />
        )}
      </div>
    </>
  );
};

export default CompanyDashboard;
