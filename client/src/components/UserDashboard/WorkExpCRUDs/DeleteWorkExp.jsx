import React, { useEffect } from 'react';

const DeleteWorkExperience = ({ onClose, workExperienceDetail }) => {
  const deleteWorkExperience = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/workexperience/${workExperienceDetail.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onClose();
        window.location.reload();
      } else {
        console.error('Failed to delete work experience detail');
      }
    } catch (error) {
      console.error('Error deleting work experience detail:', error);
    }
  };

  return (
    <section className='bg-gray-100 h-full'>
      <div className='mx-auto max-w-[500px] border min-h-full flex flex-col gap-5 justify-between items-center bg-white rounded-xl'>
        <div className='bg-jobportal-pink py-10 rounded-t-xl w-full flex justify-center items-center'>
          {/* Warning SVG */}
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='white' className='size-20'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
            />
          </svg>
        </div>

        <div className='flex justify-between flex-col h-[225px] pb-10'>
          <h1 className='text-2xl font-semibold'>Are you sure you want to delete this?</h1>
          <div className='flex gap-2.5 min-w-[300px]'>
            <button onClick={onClose} className='text-center w-full px-3 py-2 border border-solid border-gray-300 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'>
              Go Back
            </button>

            <button
              onClick={deleteWorkExperience}
              className='text-center w-full px-3 py-2 border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteWorkExperience;
