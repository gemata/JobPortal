import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import LowerJobSection from '../../components/CompanyComponents/Dashboard/LowerJobSection';
import JobTableSection from '../../components/CompanyComponents/Dashboard/JobTable';

const CompanyDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='dashboard bg-gray-100'>
        <DashboardNavSection />
        <JobTableSection />
        <hr className='h-px my-8 bg-gray-300 border-0' />
        <LowerJobSection />
      </div>
    </>
  );
};

export default CompanyDashboard;
