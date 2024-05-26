import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

export default function ApplicantListItem(req) {
  const [applicantStatus, setApplicantStatus] = useState(null);
  const applicantData = {
    id: req.id,
    isSelected: req.isSelected,
    resumeAIScore: req.resumeAIScore,
    createdAt: req.createdAt,
    updatedAt: req.updatedAt,
    JobPostID: req.JobPostID,
    UserId: req.UserId,
    applicantNo: req.applicantNo
  };
  const applicantPersonalData = {
    email: req.email,
    firstName: req.firstName,
    lastName: req.lastName,
  };

  useEffect(() => {
    const localData = localStorage.getItem(`applicantLists-${applicantData.id}`);
    if (localData) {
      setApplicantStatus(JSON.parse(localData).status);
    } else {
      axios.get(`/api/applicantlists/${applicantData.id}`)
        .then(response => {
          setApplicantStatus(response.data.status);
          localStorage.setItem(`applicantLists-${applicantData.id}`, JSON.stringify(response.data));
        })
        .catch(error => {
          console.error('Error fetching applicant data:', error);
        });
    }
  }, [applicantData.id]);

  const handleStatusChange = (event) => {
    const newStatus = parseInt(event.target.value);
    setApplicantStatus(newStatus);

    // Update the database
    axios.put(`/api/applicantlists/${applicantData.id}`, { status: newStatus })
      .then(response => {
        console.log('Status updated successfully:', response.data);

        // Update local storage after a successful response
        const updatedData = { ...applicantData, status: newStatus };
        localStorage.setItem(`applicantLists-${applicantData.id}`, JSON.stringify(updatedData));
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  // Determine border color and background gradient based on applicantStatus
  const borderColor = applicantStatus === 1 ? 'border-green-500' : applicantStatus === 0 ? 'border-red-500' : '';
  const backgroundGradient = applicantStatus === 1 
    ? 'bg-gradient-to-r from-green-50 to-white' 
    : applicantStatus === 0 
    ? 'bg-gradient-to-r from-red-50 to-white' 
    : 'bg-white';

  return (
    <div className={`applicantListItem flex items-center justify-between gap-5 rounded-lg w-full p-5 border-2 ${borderColor} ${backgroundGradient}`}>
      <div className='flex items-center gap-10 w-full '>
        <p className='text-gray-600 font-bold w-1/24'>{applicantData.applicantNo+1}</p>
        <p className='text-jobportal-primary font-bold w-3/12'>{applicantPersonalData.firstName + ' ' + applicantPersonalData.lastName}</p>
        <p className='text-gray-600 w-2/12'>{applicantPersonalData.email}</p>
        <p className='text-gray-600 w-1/12'>{applicantData.resumeAIScore + '%'}</p>
        <p className='text-gray-600 text-sm w-3/12'>{formatDateTime(applicantData.createdAt)}</p>
      </div>
      <div className='Actions flex items-center gap-3 w-2/12'>
      
        <button>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
            />
          </svg>
        </button>
        <select
          className='focus:outline-none rounded-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5'
          value={applicantStatus}
          onChange={handleStatusChange}
        >
          <option >Pending</option>
          <option value={1}>Accepted</option>
          <option value={0}>Declined</option>
        </select>
      </div>
      
    </div>
  );
}
