import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import LowerJobSection from '../../components/CompanyComponents/Jobs/LowerJobSection';
import JobTableSection from '../../components/CompanyComponents/Jobs/JobTable';

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
