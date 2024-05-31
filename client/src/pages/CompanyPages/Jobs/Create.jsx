import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import PageOne from '../../../components/CompanyComponents/Jobs/CreateJob/PageOne';
import PageTwo from '../../../components/CompanyComponents/Jobs/CreateJob/PageTwo';
import PageThree from '../../../components/CompanyComponents/Jobs/CreateJob/PageThree';
import illustration from '../../../img/Illustration.svg';
import DashboardNavSection from '../../../components/CompanyComponents/DashboardNavSection';
import Search from '../../../components/Header/Search';
import SignInPrompt from '../../../components/SignInPrompt';

const CompanyJobsCreate = ({ userData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobField, setJobField] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [jobSummary, setJobSummary] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [nationality, setNationality] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [interviewMethod, setInterviewMethod] = useState('');
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleFormSubmit = async () => {
    const sanitizedJobSummary = DOMPurify.sanitize(jobSummary);

    const requestBody = {
      CompanyID: userData.ID,
      jobField: jobField,
      JobPositionId: jobPosition,
      education: educationLevel,
      nationality: nationality,
      jobLocation: jobLocation,
      interviewMethod: interviewMethod,
      salary_from: salaryFrom,
      salary_to: salaryTo,
      startAt: new Date().toISOString(),
      endAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      is_Active: true,
      jobSummary: sanitizedJobSummary,
    };

    for (const [key, value] of Object.entries(requestBody)) {
      if (value === null || value === '') {
        setErrorMessage(`Field is missing: ${key}`);
        return;
      }
    }

    setJobField('');
    setJobPosition('');
    setJobSummary('');
    setEducationLevel('');
    setNationality('');
    setJobLocation('');
    setInterviewMethod('');
    setSalaryFrom('');
    setSalaryTo('');

    try {
      const response = await fetch('http://localhost:5000/api/jobposts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Error:', responseData.error);
        setSuccessMessage('');
        setErrorMessage('Error', responseData.error);
      } else {
        setErrorMessage('');
        setSuccessMessage('Job created successfully.');
        setTimeout(() => {
          navigate('/company/dashboard');
        }, 1000);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setErrorMessage('Fetch error', error.message);
    }
  };

  return (
    <>
      <div className='bg-gray-100'>
        <DashboardNavSection />
        {userData.length !== 0 && userData.role === 'Company' ? (
          <>
            <div className='companyJobsCreate bg-gray-100'>
              <div className='max-w-[1200px] mx-auto items-center pt-5'>
                <div className='flex flex-col gap-5'>
                  <div className='bg-white w-full rounded-xl flex justify-between p-8 items-center h-48 overflow-hidden'>
                    <h1 className='text-3xl font-semibold'>Add job basics</h1>
                    <img className='h-[300px]' src={illustration} alt='' />
                  </div>
                  <form className='space-y-4 p-8 rounded-xl bg-white'>
                    {currentPage === 1 && (
                      <PageOne
                        jobField={jobField}
                        setJobField={setJobField}
                        jobPosition={jobPosition}
                        setJobPosition={setJobPosition}
                        educationLevel={educationLevel}
                        setEducationLevel={setEducationLevel}
                        jobSummary={jobSummary}
                        setJobSummary={setJobSummary}
                      />
                    )}
                    {currentPage === 2 && (
                      <PageTwo
                        nationality={nationality}
                        setNationality={setNationality}
                        jobLocation={jobLocation}
                        setJobLocation={setJobLocation}
                        interviewMethod={interviewMethod}
                        setInterviewMethod={setInterviewMethod}
                      />
                    )}
                    {currentPage === 3 && (
                      <PageThree
                        salaryFrom={salaryFrom}
                        setSalaryFrom={setSalaryFrom}
                        salaryTo={salaryTo}
                        setSalaryTo={setSalaryTo}
                        successMessage={successMessage}
                        errorMessage={errorMessage}
                      />
                    )}
                  </form>
                  <div className='flex justify-between pb-5'>
                    {currentPage === 1 ? (
                      <Link
                        to='/company/dashboard'
                        className='flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                      >
                        {/* Left Arrow SVG */}
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                        </svg>
                        Go Back
                      </Link>
                    ) : (
                      <button
                        type='button'
                        onClick={prevPage}
                        className='flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                      >
                        {/* Left Arrow SVG */}
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                        </svg>
                        Previous
                      </button>
                    )}

                    {currentPage === 3 ? (
                      <button
                        onClick={handleFormSubmit}
                        className='flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                      >
                        Create Job
                      </button>
                    ) : (
                      <button
                        type='button'
                        onClick={nextPage}
                        className='flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                      >
                        Continue
                        {/* Right Arrow SVG */}
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <SignInPrompt />
          </>
        )}
      </div>
    </>
  );
};

export default CompanyJobsCreate;
