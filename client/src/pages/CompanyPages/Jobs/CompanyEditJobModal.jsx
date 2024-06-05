import React, { useState, useEffect } from 'react';
import NationalitySelect from '../../../components/CompanyComponents/Jobs/FindJobs/NationalitySelect';

export default function CompanyEditJobModal({ jobData, fetchData, setFetchData }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [jobSummary, setJobSummary] = useState('');
  const [interviewMethod, setInterviewMethod] = useState('');
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');
  const [education, setEducation] = useState('');
  const [nationality, setNationality] = useState('');

  useEffect(() => {
    if (jobData) {
      setJobSummary(jobData.jobSummary);
      setInterviewMethod(jobData.interviewMethod);
      setSalaryFrom(jobData.salary_from);
      setSalaryTo(jobData.salary_to);
      setEducation(jobData.education);
      setNationality(jobData.nationality);
    }
  }, [jobData]);

  const handleJobSummaryChange = (e) => {
    setJobSummary(e.target.value);
  };

  const handleInterviewMethodChange = (e) => {
    setInterviewMethod(e.target.value);
  };

  const handleSalaryFromChange = (e) => {
    setSalaryFrom(e.target.value);
  };

  const handleSalaryToChange = (e) => {
    setSalaryTo(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      ID: jobData.ID,
      jobSummary: jobSummary,
      interviewMethod: interviewMethod,
      salary_from: salaryFrom,
      salary_to: salaryTo,
      education: education,
      nationality: nationality,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/jobPosts/${jobData.ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Error:', responseData.error);
        setErrorMessage(responseData.error);
      } else {
        setFetchData(!fetchData);
        setSuccessMessage('Job info saved successfully.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {jobData ? (
        <>
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
            <h1 className='font-semibold text-xl'>Edit Company Profile</h1>
            <hr />

            <h3 className='font-semibold text-lg'>Change Job Summary:</h3>
            <textarea className='rounded border-gray-400 pb-4 min-h-28' value={jobSummary} onChange={handleJobSummaryChange}></textarea>
            <hr />

            <h3 className='font-semibold text-lg'>Change Interview Method:</h3>
            <select name='interviewMethod' value={interviewMethod} onChange={handleInterviewMethodChange} className='w-full p-3 px-5 rounded'>
              <option value=''>Select Interview Method</option>
              <option value='online'>Online</option>
              <option value='inPerson'>In Person</option>
              <option value='hybrid'>Hybrid</option>
            </select>
            <hr />

            <h3 className='font-semibold text-lg'>Change Salary From:</h3>
            <input type='number' className='rounded border-gray-400' value={salaryFrom} onChange={handleSalaryFromChange} />
            <hr />

            <h3 className='font-semibold text-lg'>Change Salary To:</h3>
            <input type='number' className='rounded border-gray-400' value={salaryTo} onChange={handleSalaryToChange} />
            <hr />

            <h3 className='font-semibold text-lg'>Change Education Level:</h3>
            <select name='education' value={education} onChange={handleEducationChange} className='w-full p-3 px-5 rounded'>
              <option value=''>Select Education Level</option>
              <option value='none'>None needed</option>
              <option value='highschool'>High School</option>
              <option value='bachelors'>Bachelor's Degree</option>
              <option value='masters'>Master's Degree</option>
              <option value='phd'>PhD</option>
            </select>
            <hr />

            <h3 className='font-semibold text-lg'>Change Nationality:</h3>
            <NationalitySelect className='w-full' nationality={nationality} setNationality={setNationality} setFetchData={setFetchData} />
            <hr />
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
            {successMessage ? (
              <section className='resetPassword__form-message-container resetPassword__form-success'>
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
                        <polyline points='20 6 9 17 4 12'></polyline>
                      </svg>
                    </span>
                    <div>{successMessage}</div>
                  </section>
                </div>
              </section>
            ) : (
              <></>
            )}
            <button type='submit' className='bg-jobportal-pink text-white rounded py-2'>
              Save Changes
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
