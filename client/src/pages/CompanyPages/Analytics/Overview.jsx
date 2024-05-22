import React, { useEffect, useState } from 'react';
import DashboardNavSection from '../../../components/CompanyComponents/DashboardNavSection';

const CompanyAnalyticsOverview = () => {
  return (
    <>
      <div className='companyAnalyticsOverview dashboard bg-gray-100' style={{ height: '400px' }}>
        <DashboardNavSection />
      </div>
    </>
  );
};

export default CompanyAnalyticsOverview;
