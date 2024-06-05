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

export default function InterviewListItem({ applicant, jobPost, handleNoteShowed}) {
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
      .put(`http://localhost:5000/api/interviewlists/${applicantData.id}`, {
        is_Selected: newStatus,
      })
      .then((response) => {
        console.log("Status updated successfully:", response.data);
        setApplicantStatus(newStatus);
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });

    // Update the status field in the database
    axios
      .put(`http://localhost:5000/api/appliedjobs/user/${applicant.UserId}`, {
        status: statusString,
      })
      .then((response) => {
        console.log("status updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  // Determine border color and background gradient based on applicantStatus
  const borderColor =
    applicantStatus === 1
      ? "border-green-500"
      : applicantStatus === 0
      ? "border-red-500"
      : "";
  const backgroundGradient =
    applicantStatus === 1
      ? "bg-gradient-to-r from-green-50 to-white hover:to-green-50 text-green-600"
      : applicantStatus === 0
      ? "bg-gradient-to-r from-red-50 to-white hover:to-red-50 text-red-600"
      : "bg-white hover:bg-gray-50 hover:border-gray-600 text-gray-600";

  return (
    <div
      className={`applicantListItem flex items-center justify-between gap-5 rounded-lg w-full p-5 border ${borderColor} ${backgroundGradient}`}>
      <div className="flex items-center gap-10 w-full ">
        <p className=" text-gray-600 font-bold w-1/24">
          {applicantData.applicantNo + 1}
        </p>
        <p className=" font-bold w-3/12">
          {applicantPersonalData.firstName +
            " " +
            applicantPersonalData.lastName}
        </p>
        <p className="w-2/12">{applicantPersonalData.email}</p>

        <p className=" text-sm w-3/12">
          {formatDateTime(applicantData.createdAt)}
        </p>
      </div>
      {applicant ? (
        <div className="Actions flex items-center gap-3 w-4/12">
          <select
            className="focus:outline-none rounded-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-2/3 text-sm border-gray-400 p-2.5"
            value={applicantStatus}
            onChange={handleStatusChange}>
            <option value={1}>Accepted</option>
            <option value={0}>Rejected</option>
          </select>
          <button
            onClick={() => handleNoteShowed(applicantData.UserId)}
            className={`gap-4 rounded-lg  w-1/3 pl-5 pr-5 pt-2 pb-2 border bg-gray-200 text-gray-800 border-gray-400 hover:bg-jobportal-pink hover:border-jobportal-darkpink hover:text-white`}>
            <div className="text flex flex-row items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
              <p className="pl-2">Notes</p>
            </div>
          </button>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
