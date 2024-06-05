import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EducationListItem from '../../../UserComponents/EducationListItem';
import WorkExperienceListItem from '../../../UserComponents/WorkExperienceListItem';
import axios from 'axios';
import grayLogo from '../../../../img/grayLogo.png';

const ApplicantListUserProfile = ({ id }) => {
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [userEducation, setUserEducation] = useState([]);
  const [userWork, setUserWork] = useState([]);
  const [resume, setResume] = useState([]);
  const [isPreviewOpen, setisPreviewOpen] = useState(false);

  const handleOpenPreview = () => {
    setisPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setisPreviewOpen(false);
  };

  useEffect(() => {
    // Fetch user data
    axios
      .get(`http://localhost:5000/api/users/${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error('Error fetching user data:', error));

    // Fetch user profile
    axios
      .get(`http://localhost:5000/api/userprofiles/${id}`)
      .then((response) => setUserProfile(response.data))
      .catch((error) => console.error('Error fetching user profile:', error));

    // Fetch user image
    axios
      .get(`http://localhost:5000/api/userimages/${id}`)
      .then((response) => setUserImage(response.data))
      .catch((error) => console.error('Error fetching user image:', error));

    // Fetch user education
    axios
      .get(`http://localhost:5000/api/educations/user/${id}`)
      .then((response) => setUserEducation(response.data))
      .catch((error) => console.error('Error fetching user education:', error));

    // Fetch user work experience
    axios
      .get(`http://localhost:5000/api/workexperience/user/${id}`)
      .then((response) => setUserWork(response.data))
      .catch((error) => console.error('Error fetching user work experience:', error));
    // Fetch user work experience
    axios
      .get(`http://localhost:5000/api/resumes/${id}`)
      .then((response) => setResume(response.data))
      .catch((error) => console.error('Error fetching user work experience:', error));
  }, [id]);

  // Utility function to format the date and time
  function formatDateTime(dateTime) {
    const date = new Date(dateTime);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour12: true,
    };

    return date.toLocaleString('en-US', options);
  }

  return (
    <div className='container w-full'>
      <div>
        <div className='profilebasics flex flex-row rounded-lg bg-white border border-grey-400 justify-between gap-5 pt-1 pl-5'>
          <div className='profileBasics flex flex-row justify-between gap-5 p-5'>
            <div className='w-56 h-56 bg-white rounded-lg border-gray-300 border shadow-lg overflow-hidden '>
              <img
                src={userImage ? `http://localhost:5000/profilePics/${userImage?.s3Key}` : grayLogo}
                alt='Immage Missing'
                className='w-full h-fullobject-contain object-center'
              />
            </div>
            <div className='pr-5'>
              <p className='font-bold text-4xl text-gray-600'>{userData?.firstName + ' ' + userData?.lastName}</p>
              <p className='text-xl text-gray-600 pt-4'>{userData?.email}</p>
              <p className='text-xl text-gray-600'>{userProfile?.phoneNumber}</p>
              <p className='text-xl text-gray-600'>{formatDateTime(userProfile?.dateOfBirth)}</p>
            </div>
          </div>
          <div className='actionbuttons flex items-start gap-5 p-5'>
            {/* Replace with reume link of the user */}
            {resume.s3Key ? (
              <>
                {resume.mime == 'application/pdf' ? (
                  <>
                    <button onClick={handleOpenPreview} className='py-2 px-2 text-white bg-jobportal-pink rounded hover:bg-fuchsia-700'>
                      Preview Resume
                    </button>
                    <div
                      onClick={handleClosePreview}
                      className={`${isPreviewOpen ? 'fixed' : 'hidden'} inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
                      style={{ zIndex: 301 }}
                    >
                      <div
                        className='bg-white p-2 pt-8 rounded shadow-lg w-full max-w-[875px] overflow-y-auto absolute top-10 bottom-10'
                        style={{
                          maxHeight: '90vh',
                        }}
                      >
                        <button className='absolute mt-2 rounded bg-red-500 w-14 text-white h-6 top-0 right-2 text-gray-500 hover:bg-red-600' onClick={handleClosePreview}>
                          x
                        </button>
                        <iframe className='h-full w-full' src={`http://localhost:5000/resumes/${resume.s3Key}`} />
                      </div>
                    </div>
                  </>
                ) : (
                  <a href={`http://localhost:5000/resumes/${resume.s3Key}`} className='text-center py-2 px-2 text-white bg-purple-600 rounded hover:bg-purple-700'>
                    Download Resume
                  </a>
                )}
              </>
            ) : (
              <div>Resume Unavailable</div>
            )}
            <button type='button' className=''>
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
        <div className='education pt-5 pb-5'>
          <div className='text-left text-l font-bold rounded-tl-lg rounded-tr-lg  w-1/6 pt-2 pr-2 pl-2 border bg-white text-gray-600 border-gray-300'>
            <p className='pl-2 pb-1 text-lg'>Education </p>
          </div>
          <hr className='h-px bg-gray-300 border-0' />
          {userEducation.map((education) => (
            <div className='flex flex-row gap-4 pt-5 w-full' key={education.id}>
              <EducationListItem education={education} />
            </div>
          ))}
        </div>
        <div className='workexperience pt-2'>
          <div className='text-left text-l font-bold rounded-tl-lg rounded-tr-lg  w-1/6 pt-2 pr-2 pl-2 border bg-white text-gray-600 border-gray-300'>
            <p className='pl-2 pb-1 text-lg'>Work Experience </p>
          </div>
          <hr className='h-px my-0 bg-gray-300 border-0' />
          {userWork.map((work) => (
            <div className='flex flex-row gap-4 pt-5 w-full' key={work.id}>
              <WorkExperienceListItem work={work} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantListUserProfile;
