import React from 'react';

const ResumeCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-purple-200 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-purple-900">Resume</h2>
      <p className="text-purple-700">
        Upload your resume to ensure employers can easily find you
      </p>
      <ul className="my-4">
        <li className="flex items-center text-purple-700">
        <span className="text-green-500 mr-2">✔️</span> Upload Resume
        </li>
        <li className="flex items-center text-purple-700">
          <span className="text-green-500 mr-2">✔️</span> Add Experience
        </li>
        <li className="flex items-center text-purple-700">
          <span className="text-green-500 mr-2">✔️</span> Add Education
        </li>
        <li className="flex items-center text-purple-700">
          <span className="text-green-500 mr-2">✔️</span> Add Contact Info
        </li>
        <li className="flex items-center text-purple-700">
          <span className="text-green-500 mr-2">✔️</span> Set Visibility
        </li>
        <li className="flex items-center text-purple-700">
          <span className="text-green-500 mr-2">✔️</span> Add Job Preferences
        </li>
        <li className="flex items-center text-purple-700">
        <span className="text-green-500 mr-2">✔️</span> Add Skills
        </li>
      </ul>
      <div className="flex justify-between">
        <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          Upload Resume
        </button>
        <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;