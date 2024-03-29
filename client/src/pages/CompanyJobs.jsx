import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNavSection from '../components/CompanyDashboard/DashboardNavSection';
import LowerJobSection from '../components/CompanyJobs/LowerJobSection';
import JobTableSection from '../components/CompanyJobs/JobTable';

const CompanyJobs = () => {
  return (
    <>
      <div className='companyJobs dashboard bg-gray-100'>
        <DashboardNavSection />
        <JobTableSection />
        <hr className='h-px my-8 bg-gray-300 border-0' />
        <LowerJobSection />
      </div>
    </>
  );
};

export default CompanyJobs;
