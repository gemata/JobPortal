import React, { useEffect, useState } from 'react';
import FindJobsSearchbar from '../../components/CompanyComponents/Jobs/FindJobs/FindJobsSearchbar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FindJobs = () => {
  const [nationality, setNationality] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [jobPosts, setJobPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);

  const fetchJobPosts = () => {
    fetch(`http://localhost:5000/api/jobposts?page=${currentPage}&limit=12&nationality=${nationality}&searchQuery=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.jobPosts) {
          setJobPosts(data.jobPosts);
          setTotalPages(Array.from({ length: data.totalPages }, (_, i) => i + 1));
        } else {
          console.error('No job posts found in response:', data);
          setJobPosts([]);
        }
      })
      .catch((error) => console.error('Error fetching job posts:', error));
  };

  const handlePageChange = (page) => {
    let newPage;

    if (page === 'next') {
      newPage = currentPage + 1;
    } else if (page === 'prev') {
      newPage = currentPage - 1;
    } else {
      newPage = page;
    }

    setCurrentPage(newPage);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchJobPosts();
  };

  useEffect(() => {
    fetchJobPosts();
  }, [currentPage, nationality, searchQuery]);

  return (
    <>
      <div className='bg-[#f1f2f4]'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='flex justify-between pt-[0px] pb-[0px]'>
            <div className='flex flex-col gap-3 w-full items-center justify-center py-10'>
              <span className='text-black font-semibold text-2xl'>Search for a Job</span>
              <p className='paragraph w-2/3 text-center'>
                Discover exciting opportunities in the tech industry. From programming and AI to design and consulting, explore openings to shape the future of innovation. Take the
                next step towards a rewarding career.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FindJobsSearchbar nationality={nationality} setNationality={setNationality} searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleFormSubmit={handleFormSubmit} />

      <div
        className={
          jobPosts.length !== 0 ? 'grid grid-cols-4 gap-4 max-w-[1200px] px-5 mx-auto mt-10 ' : 'flex items-center justify-center max-w-[1200px] px-5 mx-auto mt-10 min-h-[450px]'
        }
      >
        {jobPosts.length !== 0 ? (
          jobPosts.map((jobPost, index) => (
            <div key={index} className='border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2' style={{ height: '170px' }}>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-semibold'>{jobPost['Job Position']?.position} </h3>
              </div>
              <div className='flex items-center'>
                <span
                  className={`bg-${jobPost.interviewMethod === 'online' ? 'green' : jobPost.interviewMethod === 'inPerson' ? 'blue' : 'orange'}-100 capitalize text-${
                    jobPost.interviewMethod === 'online' ? 'green' : jobPost.interviewMethod === 'inPerson' ? 'blue' : 'orange'
                  }-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
                >
                  {jobPost.interviewMethod}
                </span>

                <span className='text-gray-500 text-sm'>
                  Hourly wage: ${jobPost.salary_from} - ${jobPost.salary_to}
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='40px' height='40px'>
                  <path fill='#4285F4' d='M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z' />
                  <path fill='#34A853' d='M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z' />
                  <path fill='#FBBC05' d='M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z' />
                  <path
                    fill='#EA4335'
                    d='M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z'
                  />
                </svg>

                <div className='text-sm'>
                  <div className='font-medium'>Google Inc.</div>
                  <div className='text-gray-500'>{jobPost.jobLocation}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className='text-center text-2xl font-semibold w-full my-10'>No jobs found!</h1>
        )}
      </div>

      {totalPages.length !== 0 ? (
        <div className='flex items-center justify-center gap-4 my-10'>
          {currentPage === 1 ? (
            <button disabled className='border border-gray-200 p-3.5 rounded-full bg-gray-100 text-gray-400'>
              <FaArrowLeft />
            </button>
          ) : (
            <button onClick={() => handlePageChange('prev')} className='border border-gray-300 p-3.5 rounded-full bg-gray-100 hover:bg-gray-300'>
              <FaArrowLeft />
            </button>
          )}
          <div id='slider' className='flex items-center gap-3'>
            {totalPages.map((page, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(page)}
                className={`border ${
                  page === currentPage ? 'border-fuchsia-700 bg-jobportal-pink text-white' : 'border-gray-300 bg-gray-100'
                } p-3.5 rounded-lg hover:border-fuchsia-700 hover:bg-jobportal-pink hover:text-white`}
              >
                {page}
              </button>
            ))}
          </div>
          {currentPage === totalPages.length ? (
            <button disabled className='border border-gray-200 p-3.5 rounded-full bg-gray-100 text-gray-400'>
              <FaArrowRight />
            </button>
          ) : (
            <button onClick={() => handlePageChange('next')} className='border border-gray-300 p-3.5 rounded-full bg-gray-100 hover:bg-gray-300'>
              <FaArrowRight />
            </button>
          )}
        </div>
      ) : (
        <div className='h-3'></div>
      )}
    </>
  );
};

export default FindJobs;
