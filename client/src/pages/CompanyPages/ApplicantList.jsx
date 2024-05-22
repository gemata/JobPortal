import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import applicants from '../../json/applicants.json'; // Adjust the import path as necessary
import JobTableSection from '../../components/CompanyComponents/Dashboard/JobTable';
import LowerJobSection from '../../components/CompanyComponents/Dashboard/LowerJobSection';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import ApplicantListItem from '../../components/CompanyComponents/Jobs/ApplicantList/ApplicantListItem';
import ApplicantListHeader from '../../components/CompanyComponents/Jobs/ApplicantList/ApplicantListHeader';
const ApplicantList = () => {
  return (
    <>
      <div className='applicantList dashboard bg-gray-100'>
      <DashboardNavSection />
      <div className='flex flex-col gap-5 container mx-auto'>
      <ApplicantListHeader/>
      </div>
        <hr className='h-px my-8 bg-gray-300 border-0' />
        <LowerJobSection />
      </div>
    </>
  );
};

export default ApplicantList;
