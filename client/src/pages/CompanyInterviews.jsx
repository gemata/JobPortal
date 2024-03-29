import React, { useEffect, useState } from 'react';
import DashboardNavSection from '../components/CompanyDashboard/DashboardNavSection';

const CompanyInterviews = () => {
  return (
    <>
      <div className='companyInterviews dashboard bg-gray-100' style={{ height: '400px' }}>
        <DashboardNavSection />
      </div>
    </>
  );
};

export default CompanyInterviews;
