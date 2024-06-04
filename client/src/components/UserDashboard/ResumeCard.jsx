import React from 'react';

const ResumeCard = () => {
  return (
    <div className='w-full mx-auto bg-purple-200 p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold text-purple-900'>Resume</h2>
      <p className='text-purple-700'>Upload your resume to ensure employers can easily find you</p>
      <ul className='mt-4'>
        <li className='flex items-center text-purple-700'>
          <span className='text-green-500 mr-2'>✔️</span> Upload Resume
        </li>
        <li className='flex items-center text-purple-700'>
          <span className='text-green-500 mr-2'>✔️</span> Add Experience
        </li>
        <li className='flex items-center text-purple-700'>
          <span className='text-green-500 mr-2'>✔️</span> Add Education
        </li>
        <li className='flex items-center text-purple-700'>
          <span className='text-green-500 mr-2'>✔️</span> Add Contact Info
        </li>
        <li className='flex items-center text-purple-700'>
          <span className='text-green-500 mr-2'>✔️</span> Set Visibility
        </li>
        <li className='flex items-center text-purple-700'>
          <span className='text-green-500 mr-2'>✔️</span> Add Job Preferences
        </li>
        <li className='flex items-center text-purple-700'>
          <span className='text-green-500 mr-2'>✔️</span> Add Skills
        </li>
      </ul>
    </div>
  );
};

export default ResumeCard;
