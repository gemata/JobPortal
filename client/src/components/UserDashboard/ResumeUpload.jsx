import React from 'react';

const ResumeUpload = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-200">
        <div className="flex items-center space-x-4">
          <div className="p-2 border-2 border-dashed border-gray-400 rounded-full">
            <span className="block w-8 h-8 text-gray-700">
              M {/* Icon placeholder */}
            </span>
          </div>
          <div className="flex flex-col flex-grow">
            <span className="font-bold text-lg">Upload Your Resume</span>
            <span className="text-gray-700 text-sm">Upload your resume to ensure employers can easily find you</span>
          </div>
          <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 transition duration-300 ease-in-out">
            Upload Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
