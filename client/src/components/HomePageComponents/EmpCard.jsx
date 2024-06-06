import React from 'react';

const EmpCard = () => {
  return (
    <>
      <div className='container max-w-[1200px] mx-auto my-0 px-[15px]'>
        <div className='flex flex-col md:flex-row gap-4 mt-[100px] mb-[100px]'>
          <div className='bg-gray-100 p-6 rounded-lg flex-1'>
            <h2 className='text-2xl font-bold mb-2'>Become a Candidate</h2>
            <p className='text-gray-700 mb-4'>Join our platform to find your dream job. Create your profile and start applying to top job opportunities today.</p>
            <button className='bg-[#B051AA] text-white px-4 py-2 rounded hover:bg-fuchsia-800' onClick={() => (window.location.href = 'http://localhost:5000/admin/login')}>
              Register Now →
            </button>
          </div>
          <div className='bg-[#B051AA] p-6 rounded-lg text-white flex-1'>
            <h2 className='text-2xl font-bold mb-2'>Become an Employer</h2>
            <p className='mb-4'>Post job listings and find the best talent for your company. Our platform makes it easy to connect with qualified candidates.</p>
            <button className='bg-white text-[#B051AA] px-4 py-2 rounded hover:bg-gray-200' onClick={() => (window.location.href = 'http://localhost:5000/admin/login')}>
              Register Now →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpCard;
