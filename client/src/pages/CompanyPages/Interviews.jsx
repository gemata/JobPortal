import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import LowerJobSection from '../../components/CompanyComponents/Dashboard/LowerJobSection';

import SignInPrompt from '../../components/SignInPrompt';
import InterviewTableSection from '../../components/CompanyComponents/Interviews/InterviewTableSection';

const CompanyInterviews = ({ userData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='dashboard bg-gray-100'>
        <DashboardNavSection />
        {userData.length != 0 && userData.role === 'Company' ? (
          <>
            <InterviewTableSection userData={userData} />
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

export default CompanyInterviews;