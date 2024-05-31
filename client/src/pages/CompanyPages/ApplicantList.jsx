import React, { useEffect, useState } from 'react';
import LowerJobSection from '../../components/CompanyComponents/Dashboard/LowerJobSection';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import ApplicantListHeader from '../../components/CompanyComponents/Jobs/ApplicantList/ApplicantListHeader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SignInPrompt from '../../components/SignInPrompt';

const ApplicantList = ({ userData }) => {
  const { id } = useParams();
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Fetch the list of applicants for the job with the given id
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/applicantlists/job/${id}`);
        setApplicants(response.data);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, [id]);

  return (
    <>
      <div className='applicantList dashboard bg-gray-100'>
        <DashboardNavSection />
        {userData.length != 0 && userData.role === 'Company' ? (
          <>
            <div className='flex flex-col gap-5 container mx-auto'>
              <ApplicantListHeader applicantList={applicants} />
            </div>
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

export default ApplicantList;
