import React from 'react';
import grayLogo from '../../img/grayLogo.png';

const ResumeUpload = ({ profileData }) => {
  return (
    <>
      {profileData.Resume ? (
        <></>
      ) : (
        <div className='w-full bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='p-4 bg-white'>
            <div className='flex items-center space-x-4'>
              <img src={grayLogo} className='h-12 w-12 border-2 border-dashed border-gray-400 rounded-full' />
              <div className='flex flex-col flex-grow'>
                <span className='font-bold text-lg'>Upload Your Resume</span>
                <span className='text-gray-700 text-sm'>Upload your resume to ensure employers can easily find you</span>
              </div>
              <button className='px-4 py-2 text-white bg-jobportal-pink rounded hover:bg-fuchsia-700 active:bg-fuchsia-800 transition duration-300 ease-in-out'>
                Upload Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeUpload;
