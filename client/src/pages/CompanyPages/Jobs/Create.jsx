import React, { useEffect, useState } from 'react';
import PageOne from '../../../components/CompanyComponents/Jobs/CreateJob/PageOne';
import PageTwo from '../../../components/CompanyComponents/Jobs/CreateJob/PageTwo';

const CompanyJobsCreate = () => {
  return (
    <>
      <div className='companyJobsCreate' style={{ height: '400px' }}>
        <div className='container mx-auto items-center pt-5'>
          <div className='flex flex-col gap-5'>
            <div className='bg-gray-100 w-full rounded-xl flex p-8 items-center h-48'>
              <h1 className='text-3xl font-semibold'>Add job basics</h1>
            </div>
            <form className='space-y-4 py-5'>
              <PageOne />
              <PageTwo />
              {/* <PageThree /> */}
            </form>
            <div className='flex justify-between pb-5'>
              <button
                type='button'
                className='flex items-center gap-3 rounded-md bg-purple-600 px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
              >
                {/* Left Arrow SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                </svg>
                Go Back
              </button>
              <button
                type='button'
                className='flex items-center gap-3 rounded-md bg-purple-600 px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
              >
                Continue
                {/* Right Arrow SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyJobsCreate;
