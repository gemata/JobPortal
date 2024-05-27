import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageOne from '../../../components/CompanyComponents/Jobs/CreateJob/PageOne';
import PageTwo from '../../../components/CompanyComponents/Jobs/CreateJob/PageTwo';
import illustration from '../../../img/Illustration.svg';
import DashboardNavSection from '../../../components/CompanyComponents/DashboardNavSection';

const CompanyJobsCreate = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <DashboardNavSection />

      <div className='companyJobsCreate bg-gray-100'>
        <div className='max-w-[1200px] mx-auto items-center pt-5'>
          <div className='flex flex-col gap-5'>
            <div className='bg-white w-full rounded-xl flex justify-between p-8 items-center h-48 overflow-hidden'>
              <h1 className='text-3xl font-semibold'>Add job basics</h1>
              <img className='h-[300px]' src={illustration} alt='' />
            </div>
            <form className='space-y-4 p-8 rounded-xl bg-white'>
              {currentPage === 1 && <PageOne />}
              {currentPage === 2 && <PageTwo />}
            </form>
            <div className='flex justify-between pb-5'>
              {currentPage === 1 ? (
                <Link
                  to='/company/dashboard'
                  className='flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                >
                  {/* Left Arrow SVG */}
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                  </svg>
                  Go Back
                </Link>
              ) : (
                <button
                  type='button'
                  onClick={prevPage}
                  className='flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                >
                  {/* Left Arrow SVG */}
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                  </svg>
                  Previous
                </button>
              )}

              <button
                type='button'
                onClick={nextPage}
                className='flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
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
