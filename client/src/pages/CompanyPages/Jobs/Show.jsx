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
  const [applied, setApplied] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleApplyClick = async () => {
    if (!userData || !currentJob) {
      return;
    }

    const requestBody = {
      isSelected: null,
      resumeAIScore: null,
      JobPostID: currentJob.ID,
      UserId: userData.id,
    };

    const requestBodyAppliedJob = {
      status: 0,
      appliedAt: new Date().toISOString(),
      JobPostID: currentJob.ID,
      UserId: userData.id,
    };

    try {
      const [response1, response2] = await Promise.all([
        fetch(`http://localhost:5000/api/applicantlists/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }),
        fetch(`http://localhost:5000/api/appliedjobs/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBodyAppliedJob),
        }),
      ]);

      const responseData1 = await response1.json();
      const responseData2 = await response2.json();

      if (!response1.ok) {
        console.error('Error in applicant list:', responseData1.error);
        setErrorMessage(responseData1.error);
      }

      if (!response2.ok) {
        console.error('Error in applied jobs:', responseData2.error);
        setErrorMessage(responseData2.error);
      }

      if (response1.ok && response2.ok) {
        setApplied(true);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('There was an error applying for the job!', error);
    }
  };

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

            {currentJob.message ? (
              <div className='flex items-center jusify-center' style={{ minHeight: '70vh' }}>
                <h1 className='text 2xl font-semibold w-full text-center'>Job Post not found</h1>
              </div>
            ) : (
              <>
                <section className='max-w-[1200px] py-8 mx-auto'>
                  <div className='bg-gray-50 rounded-lg shadow-lg relative border transition-all flex relative'>
                    <div className='flex flex-col w-full gap-3'>
                      <div className='bg-white flex rounded-lg flex-col w-full gap-3 shadow-lg px-10 py-6'>
                        <h1 className='text-2xl font-semibold'>{currentJob['Job Position']?.position}</h1>
                        <hr className='w-full border border-1' />
                        <Link to={`/company/show/${currentJob?.CompanyID}`} className='w-fit p-2'>
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
                        {errorMessage ? (
                          <section className='resetPassword__form-message-container resetPassword__form-error'>
                            <div className='resetPassword__form-message'>
                              <section>
                                <span>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='white'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  >
                                    <circle cx='12' cy='12' r='10'></circle>
                                    <line x1='15' y1='9' x2='9' y2='15'></line>
                                    <line x1='9' y1='9' x2='15' y2='15'></line>
                                  </svg>
                                </span>
                                <div>{errorMessage}</div>
                              </section>
                            </div>
                          </section>
                        ) : (
                          <></>
                        )}
                        <div className='flex gap-3'>
                          {userData?.role == 'User' ? (
                            applied ? (
                              //if applied and logged in
                              <button className='bg-green-500 hover:bg-fuchsia-700 text-white rounded-lg font-semibold flex items-center'>
                                <div className='flex gap-2 pr-5 pl-5 pt-2 pb-2 items-center'>
                                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-8'>
                                    <path
                                      fillRule='evenodd'
                                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                                      clipRule='evenodd'
                                    />
                                  </svg>
                                  <p className=''>Applied</p>
                                </div>
                              </button>
                            ) : (
                              //if not applied but logged in
                              <>
                                <button onClick={handleApplyClick} className='bg-jobportal-pink hover:bg-fuchsia-700 text-white rounded-lg font-semibold flex items-center'>
                                  <div className='flex gap-2 pr-5 pl-5 pt-2 pb-2 items-center'>
                                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-8'>
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                                      />
                                    </svg>
                                    <p className=''>Apply Now</p>
                                  </div>
                                </button>
                                <button className='bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold'>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                                    />
                                  </svg>
                                </button>
                                <button className='bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold'>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                                    />
                                  </svg>
                                </button>
                              </>
                            )
                          ) : (
                            <></>
                          )}
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
            )}
          </>
        ) : (
          <SignInPrompt />
        )}
      </div>
    </>
  );
};

export default JobsShow;
