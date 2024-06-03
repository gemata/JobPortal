import React from 'react';

export default function ProfileDates({ profileData }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className='bg-white shadow-lg w-full p-4 rounded-lg flex flex-col gap-4'>
        <p>
          Account created at: <span className='float-right break-all text-gray-600'>{formatDate(profileData.createdAt)}</span>
        </p>
        <hr />

        <p>
          Account last updated at: <span className='float-right break-all text-gray-600'>{formatDate(profileData.updatedAt)}</span>
        </p>
      </div>
    </>
  );
}
