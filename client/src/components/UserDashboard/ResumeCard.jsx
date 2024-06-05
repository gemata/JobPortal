import React from 'react';

const ResumeCard = () => {
  return (
    <div className='w-full mx-auto bg-[#B051AA] p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold text-white'>Resume</h2>
      <p className='text-white'>Upload your resume to ensure employers can easily find you</p>
      <ul className='mt-4'>
        <li className='flex items-center text-white'>
          <span className='text-white mr-2'>1</span> Upload Resume
        </li>
        <li className='flex items-center text-white'>
          <span className='text-white mr-2'>2</span> Add Experience
        </li>
        <li className='flex items-center text-white'>
          <span className='text-white mr-2'>3</span> Add Education
        </li>
        <li className='flex items-center text-white'>
          <span className='text-white mr-2'>4</span> Add Contact Info
        </li>
      </ul>
    </div>
  );
};

export default ResumeCard;
