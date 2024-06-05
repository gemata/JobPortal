import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

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

export default function InterviewListItem({ applicant, jobPost }) {
  const [applicantStatus, setApplicantStatus] = useState(applicant.is_Selected);
  const applicantData = {
    id: applicant.id,
    is_Selected: applicant.is_Selected,
    createdAt: applicant.createdAt,
    updatedAt: applicant.updatedAt,
    JobPostID: applicant.JobPostID,
    UserId: applicant.UserId,
    applicantNo: applicant.applicantNo,
  };
  const applicantPersonalData = {
    email: applicant.User.email,
    firstName: applicant.User.firstName,
    lastName: applicant.User.lastName,
  };

useEffect(() => {
    setApplicantStatus(applicant.is_Selected);
  }, [applicant]);
  const handleStatusChange = (event) => {
    const newStatus = parseInt(event.target.value);
    let statusString;

    // Set status based on newStatus
    if (newStatus === 1) {
        statusString = "Accepted";
    } else if (newStatus === 0) {
        statusString = "Rejected";
    }
    // Update the database
    axios
      .put(`http://localhost:5000/api/interviewlists/${applicantData.id}`, { is_Selected: newStatus })
      .then((response) => {
        console.log('Status updated successfully:', response.data);
        setApplicantStatus(newStatus);
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });

       // Update the status field in the database
    axios
    .put(`http://localhost:5000/api/appliedjobs/user/${applicant.UserId}`, { status: statusString })
    .then((response) => {
      console.log('status updated successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error updating status:', error);
    });


  };

  // Determine border color and background gradient based on applicantStatus
  const borderColor = applicantStatus === 1 ? 'border-green-500' : applicantStatus === 0 ? 'border-red-500' : '';
  const backgroundGradient =
    applicantStatus === 1
      ? 'bg-gradient-to-r from-green-50 to-white hover:to-green-50 text-green-600'
      : applicantStatus === 0
      ? 'bg-gradient-to-r from-red-50 to-white hover:to-red-50 text-red-600'
      : 'bg-white hover:bg-gray-50 hover:border-gray-600 text-gray-600';

  return (
    <div className={`applicantListItem flex items-center justify-between gap-5 rounded-lg w-full p-5 border ${borderColor} ${backgroundGradient}`}>
      <div className='flex items-center gap-10 w-full '>
        <p className=' text-gray-600 font-bold w-1/24'>{applicantData.applicantNo + 1}</p>
        <p className=' font-bold w-3/12'>{applicantPersonalData.firstName + ' ' + applicantPersonalData.lastName}</p>
        <p className='w-2/12'>{applicantPersonalData.email}</p>

        <p className=' text-sm w-3/12'>{formatDateTime(applicantData.createdAt)}</p>
      </div>
      {applicant? <div className='Actions flex items-center gap-3 w-3/12'>
        <select
          className='focus:outline-none rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5'
          value={applicantStatus}
          onChange={handleStatusChange}
        >
           <option value={1}>Accepted</option>
          <option value={0}>Rejected</option>
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
      :
      <div>Loading</div>
      }
      
    </div>
  );
}
