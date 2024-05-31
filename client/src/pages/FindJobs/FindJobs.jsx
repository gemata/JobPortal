import React, { useEffect, useState } from 'react';
import FindJobsSearchbar from '../../components/CompanyComponents/Jobs/FindJobs/FindJobsSearchbar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import grayLogo from '../../img/grayLogo.png';
import { Link } from 'react-router-dom';

const FindJobs = () => {
  const [nationality, setNationality] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [jobPosts, setJobPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [jobOpened, setJobOpened] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  const fetchJobPosts = () => {
    fetch(`http://localhost:5000/api/jobposts?page=${currentPage}&limit=12&nationality=${nationality}&searchQuery=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.jobPosts) {
          
          // Sanitize the job summary for each job post
          const sanitizedJobPosts = data.jobPosts.map((jobPost) => ({
            ...jobPost,
            jobSummary: DOMPurify.sanitize(jobPost.jobSummary),
          }));

          setJobPosts(sanitizedJobPosts);
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

  const openJob = (job) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    console.log(job);

    if (currentJob) {
      if (job.ID == currentJob.ID) {
        closeJob();
        return;
      }
    }
    setCurrentJob(job);
    setJobOpened(true);
  };

  const closeJob = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setCurrentJob([]);
    setJobOpened(false);
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

      <div className='flex max-w-[1500px] mx-auto'>
        <div className={`border transition-all ${jobOpened ? 'w-1/2 md:w-1/3 bg-gray-100' : 'w-full bg-gray-50'}`}>
          <FindJobsSearchbar
            nationality={nationality}
            setNationality={setNationality}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleFormSubmit={handleFormSubmit}
          />

          <div
            className={
              jobPosts.length !== 0
                ? jobOpened
                  ? 'grid grid-cols-1 gap-4 px-5 mx-auto mt-5 max-h-[700px] overflow-y-scroll'
                  : 'grid max-w-[1200px] grid-cols-4 gap-4 px-5 mx-auto mt-10'
                : 'flex items-center justify-center max-w-[1200px] px-5 mx-auto mt-10 min-h-[450px]'
            }
          >
            {jobPosts.length !== 0 ? (
              jobPosts.map((jobPost) => (
                <div
                  key={jobPost.id}
                  onClick={() => {
                    openJob(jobPost);
                  }}
                  className='cursor-pointer border rounded-lg p-4 bg-white shadow-md flex flex-col justify-between space-y-2 hover:bg-gray-50 active:bg-gray-100'
                  style={{ height: '170px' }}
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='select-none text-lg font-semibold'>{jobPost['Job Position']?.position} </h3>
                  </div>
                  <div className='flex items-center'>
                    <span
                      className={`bg-${jobPost.interviewMethod === 'online' ? 'green' : jobPost.interviewMethod === 'inPerson' ? 'blue' : 'orange'}-100 capitalize text-${
                        jobPost.interviewMethod === 'online' ? 'green' : jobPost.interviewMethod === 'inPerson' ? 'blue' : 'orange'
                      }-800 text-xs select-none font-medium mr-2 px-2.5 py-0.5 rounded`}
                    >
                      {jobPost.interviewMethod}
                    </span>

                    <span className='select-none text-gray-500 text-sm'>
                      Hourly wage: ${jobPost.salary_from} - ${jobPost.salary_to}
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <img
                      src={jobPost.Company.CompanyLogo ? `http://localhost:5000/companyLogos/${jobPost.Company.CompanyLogo.s3Key}` : grayLogo}
                      className='w-10 h-10  select-none object-cover object-center rounded-full border border-gray-300'
                    />

                    <div className='text-sm'>
                      <div className='font-medium select-none '>{jobPost.Company.CompanyName}</div>
                      <div className='text-gray-500 select-none '>{jobPost.jobLocation}</div>
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
                {totalPages.map((page) => (
                  <button
                    key={page}
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
        </div>
        <div className={`${jobOpened ? 'w-1/2 md:w-2/3' : 'w-0 hidden'} h-dvh relative border transition-all flex relative`}>
          {currentJob ? (
            <>
              <div className='flex flex-col w-full gap-3'>
                <div className='sticky top-0 bg-white flex flex-col w-full gap-3 shadow-lg px-10 py-6'>
                  <button
                    type='button'
                    className='flex items-center justify-center border rounded-full w-10 h-10 top-5 right-5 text-gray-500 border-gray-500 hover:bg-red-200 absolute'
                    onClick={() => {
                      closeJob();
                    }}
                  >
                    X
                  </button>
                  <h1 className='text-2xl font-semibold'>{currentJob['Job Position']?.position}</h1>
                  <hr className='w-full border border-1' />
                  <Link to='' className='w-fit p-2'>
                    <div className='flex items-center space-x-3'>
                      <img
                        src={currentJob.Company?.CompanyLogo ? `http://localhost:5000/companyLogos/${currentJob.Company?.CompanyLogo.s3Key}` : grayLogo}
                        className='w-10 h-10  select-none object-cover object-center rounded-full border border-gray-300'
                      />
                      <div className='text-sm'>
                        <div className='font-medium select-none underline'>{currentJob.Company?.CompanyName}</div>
                      </div>
                    </div>
                  </Link>
                  <div>{currentJob.jobLocation}</div>
                  <div>
                    ${currentJob.salary_from} - ${currentJob.salary_to} per hour
                  </div>
                  <div className='flex gap-3'>
                    <button className='bg-jobportal-pink hover:bg-fuchsia-700 text-white py-3 px-5 rounded-lg font-semibold'>Apply Now</button>
                    <button className='bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold'>M</button>
                    <button className='bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold'>🚫</button>
                  </div>
                </div>
                <div className='px-10 py-5'>
                  <h3 className='text-xl font-semibold'>Location</h3>
                  <h3 className='mt-3 ml-3 text-lg'>{currentJob.jobLocation}</h3>
                </div>
                <hr />
                <div className='px-10 py-5 flex gap-3 flex-col'>
                  <h3 className='text-xl font-semibold'>Job Details</h3>
                  <h3 className='text-lg mt-3 ml-3'>
                    <span className='font-semibold mr-2'>Pay:</span> ${currentJob.salary_from} - ${currentJob.salary_to} per hour
                  </h3>
                  <h3 className='text-lg mt-3 ml-3'>
                    <span className='font-semibold mr-2'>Schedule:</span> <span className='capitalize'> {currentJob.interviewMethod} </span>
                  </h3>
                </div>
                <hr />
                <div className='px-10 py-5 flex gap-3 flex-col'>
                  <h3 className='text-xl font-semibold'>Job Summary</h3>
                  <div className='mt-3 text-gray-600' dangerouslySetInnerHTML={{ __html: currentJob.jobSummary }}></div>
                </div>
                <div className='px-10'>
                  <button className='bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold'>Report Job</button>
                </div>
              </div>
            </>
          ) : (
            <h1 className='text-2xl font-semibold text-center'></h1>
          )}
        </div>
      </div>
    </>
  );
};

export default FindJobs;
