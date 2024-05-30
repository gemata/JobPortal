import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Utility function to format the date and time
function formatDateTime(dateTime) {
  const date = new Date(dateTime);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  return date.toLocaleString('en-US', options);
}


export default function JobItem({ jobData }) {
  const [jobStatus, setJobStatus] = useState(jobData.is_Active);
  const jobDetails = {
    CompanyID: jobData.CompanyID,
    ID: jobData.ID,
    JobPositionId: jobData.JobPositionId,
    createdAt: jobData.createdAt,
    education: jobData.education,
    endAt: jobData.endAt,
    interviewMethod: jobData.interviewMethod,
    is_Active: jobData.is_Active,
    jobLocation: jobData.jobLocation,
    jobSummary: jobData.jobSummary,
    likes: jobData.likes,
    nationality: jobData.nationality,
    positionName: jobData.positionName,
    salary_from: jobData.salary_from,
    salary_to: jobData.salary_to,
    startAt: jobData.startAt,
    updatedAt: jobData.updatedAt,
  };



  const handleStatusChange = (event) => {

    const newStatus = event.target.value;

    const updatedJobDetails = { ...jobDetails, is_Active: newStatus };


    if (newStatus === jobStatus) {
      return;
    } else {
      try {
        const response = fetch(`http://localhost:5000/api/jobposts/${jobData.ID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedJobDetails),
        });

      } catch (error) {
        console.error("Fetch error:", error);
      }
      setJobStatus(newStatus);
    }
  };

  return (
    <>
      <div className='jobItem flex items-center justify-between gap-5 rounded-lg w-full pt-2 pb-2  border-2 border-gray-400 bg-white'>
      <div className='flex items-center  gap-10 w-full pl-5 pr-5'>
          <p className='text-gray-600 font-bold w-1/24'>{jobDetails.ID}</p>
          <div className='text-left w-3/12'>
            <h5 className='text-jobportal-primary font-bold'>{jobDetails.positionName}</h5>
            <p className='text-gray-600'>{jobDetails.jobLocation}</p>
            <p className='text-gray-600'>Posted: {formatDateTime(jobDetails.createdAt)}</p>
          </div>
        
        <p className='text-gray-600 w-1/12 '>{formatDateTime(jobDetails.startAt)}</p>
        <p className='text-gray-600 w-1/12 ' >{formatDateTime(jobDetails.endAt)}</p>
        <p className='text-gray-600 w-2/12 '>{jobDetails.salary_from + '$ - '+ jobDetails.salary_to + '$'}</p>
        <p className='text-gray-600 w-1/24 '>{jobDetails.likes}</p>
        <p className='text-gray-600 w-1/6 '>Nr. Applicants</p>
        <div className='flex items-center gap-5 w-3/12'>
          <select className='focus:outline-none w-8/12 rounded-md bg-gray-50 border-2 text-gray-900  text-sm border-gray-400 p-2.5 '
            onChange={handleStatusChange}
            value={jobStatus}
          >
            <option value={true}>Opened</option>
            <option value={false}>Closed</option>
          </select>
          
          <div className="w-2/12 flex items-center">
                <Link to={`/company/applicantlist/${jobDetails.ID}` } >             
                <button
                  className={`gap-4 rounded-lg  w-full pl-5 pr-5 pt-2 pb-2 border-2 bg-gray-200 text-gray-800 border-gray-400 hover:bg-jobportal-pink hover:border-jobportal-darkpink hover:text-white`}
                >
                    <div className='text flex flex-row items-center justify-between'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                      </svg>

                    </div>
                </button>                
                </Link>
                </div>

        </div>
        
        </div>
      </div>
    </>
  );
}
