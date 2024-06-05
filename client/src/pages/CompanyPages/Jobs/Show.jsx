import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardNavSection from '../../../components/CompanyComponents/DashboardNavSection';
import NavBarContainer from '../../../components/UserDashboard/NavBarContainer';
import SignInPrompt from '../../../components/SignInPrompt';
import grayLogo from '../../../img/grayLogo.png';

const JobsShow = ({ userData }) => {
  const { id } = useParams();
  const [currentJob, setCurrentJob] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/jobposts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCurrentJob(data);
          setCurrentCompany(data.Company);
        });
    }
  }, [id]);

  return (
    <>
      <div className='applicantList dashboard bg-gray-100'>
        {userData.length !== 0 ? (
          <>
            {userData.role === 'Company' ? <DashboardNavSection /> : <NavBarContainer />}

            <section className='max-w-[1200px] py-8 mx-auto'>
              <div className='bg-gray-50 rounded-lg shadow-lg relative border transition-all flex relative'>
                <div className='flex flex-col w-full gap-3'>
                  <div className='bg-white flex rounded-lg flex-col w-full gap-3 shadow-lg px-10 py-6'>
                    <h1 className='text-2xl font-semibold'>{currentJob['Job Position']?.position}</h1>
                    <hr className='w-full border border-1' />
                    <Link to='' className='w-fit p-2'>
                      <div className='flex items-center space-x-3'>
                        <img
                          src={currentCompany?.CompanyLogo ? `http://localhost:5000/companyLogos/${currentCompany?.CompanyLogo.s3Key}` : grayLogo}
                          className='w-10 h-10  select-none object-cover object-center rounded-full border border-gray-300'
                        />
                        <div className='text-sm'>
                          <div className='font-medium select-none underline'>{currentCompany?.CompanyName}</div>
                        </div>
                      </div>
                    </Link>
                    <div>{currentJob.jobLocation}</div>
                    <div>
                      ${currentJob.salary_from} - ${currentJob.salary_to} per hour
                    </div>
                  </div>
                  <div className='px-10 py-5'>
                    <h3 className='text-xl font-semibold'>Location</h3>
                    <h3 className='mt-3 ml-3 text-lg'>{currentJob.jobLocation}</h3>
                  </div>
                  <hr />
                  <div className='px-10 py-5 flex gap-3 flex-col'>
                    <h3 className='text-xl font-semibold'>Company Info</h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Address: </span> {currentCompany?.address || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Company Email: </span> {currentCompany?.companyEmail || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Phone Number: </span> {currentCompany?.phoneNumber || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Website: </span> {currentCompany?.website || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Description: </span> {currentCompany?.description || 'None specified'}
                    </h3>
                  </div>
                  <hr />
                  <div className='px-10 py-5 flex gap-3 flex-col'>
                    <h3 className='text-xl font-semibold'>Job Details</h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Pay:</span> ${currentJob.salary_from} - ${currentJob.salary_to} per hour
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Schedule:</span> <span className='capitalize'> {currentJob.interviewMethod} </span>
                    </h3>
                  </div>
                  <hr />
                  <div className='px-10 py-5 flex gap-3 flex-col'>
                    <h3 className='text-xl font-semibold'>Job Summary</h3>
                    <div
                      className='mt-3 text-gray-600 jobHtmlStyling'
                      dangerouslySetInnerHTML={{
                        __html: currentJob.jobSummary,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <SignInPrompt />
        )}
      </div>
    </>
  );
};

export default JobsShow;
