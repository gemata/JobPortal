import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';

const CompanyDashboard = () => {
  return (
    <>
      <div className='companyDashboard dashboard bg-gray-100' style={{ height: '400px' }}>
        <DashboardNavSection />
      </div>
    </>
  );
};

export default CompanyDashboard;
