import React from 'react';


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


export default function JobItem(req) {
  const jobData = {
    CompanyID: req.CompanyID,
    ID: req.ID,
    JobPositionId: req.JobPositionId,
    createdAt: req.createdAt,
    education: req.education,
    endAt: req.endAt,
    interviewMethod: req.interviewMethod,
    is_Active: req.is_Active,
    jobLocation: req.jobLocation,
    jobSummary: req.jobSummary,
    likes: req.likes,
    nationality: req.nationality,
    positionName: req.positionName,
    salaryFrom: req.salary_from,
    salaryTo: req.salary_to,
    startAt: req.startAt,
    updatedAt: req.updatedAt,
  };
  return (
    <>
      <div className='jobItem flex items-center justify-between gap-5 rounded-lg w-full p-5 border-2 border-gray-400 bg-white'>
        <div className='flex items-center gap-10'>
        <p className='text-gray-600 font-bold w-1/24'>{jobData.ID}</p>
          <div className='text-left'>
            <h5 className='text-jobportal-primary font-bold'>{jobData.positionName}</h5>
            <p className='text-gray-600'>{jobData.jobLocation}</p>
            <p className='text-gray-600'>Posted: {formatDateTime(jobData.createdAt)}</p>
          </div>
        </div>
        <div className='flex items-center gap-5 w-1/6'>
          <select className='focus:outline-none rounded-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '>
            <option value=''>Pending</option>
            <option value=''>Opened</option>
            <option value=''>Closed</option>
          </select>
          <button>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
