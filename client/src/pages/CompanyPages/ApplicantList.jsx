import React, { useEffect, useState } from 'react';
import LowerJobSection from '../../components/CompanyComponents/Dashboard/LowerJobSection';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import ApplicantListHeader from '../../components/CompanyComponents/Jobs/ApplicantList/ApplicantListHeader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SignInPrompt from '../../components/SignInPrompt';

const ApplicantList = ({userData}) => {
  const { id } = useParams();
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      const JobPostId = id;
      try {
        const response = await fetch(`http://localhost:5000/api/applicantlists/job/${JobPostId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApplicants(data);
        console.log(applicants);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, [id]);

    // Use another useEffect to log the updated applicants state
    useEffect(() => {
      console.log('Updated applicants:', applicants);
    }, [applicants]);

  return (
    <>
      <div className='applicantList dashboard bg-gray-100'>
        <DashboardNavSection />
        {userData.length !== 0 && userData.role === 'Company' ? (
          <>
          {applicants.length > 0 ? <div className='flex flex-col gap-5 container mx-auto'>
              <ApplicantListHeader applicantList={applicants} />
              <hr className='h-px my-8 bg-gray-300 border-0' />
            </div>
            
            :
            <div>
<hr className='h-px my-8 bg-gray-300 border-0' />
            </div>
          }
            
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
