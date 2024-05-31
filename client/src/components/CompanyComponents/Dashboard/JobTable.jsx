import React, { useState, useEffect } from 'react';
import JobItem from './JobItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function JobTableSection({ userData }) {
  const [jobData, setJobData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const [showOpenJobs, setShowOpenJobs] = useState(true);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobposts/company/${userData.ID}`);
        const jobs = response.data;

        // Fetch job positions for each job
        const jobsWithPositions = await Promise.all(
          jobs.map(async (job) => {
            const jobPositionResponse = await axios.get(`http://localhost:5000/api/jobpositions/${job.JobPositionId}`);
            return { ...job, positionName: jobPositionResponse.data.position };
          })
        );

        setJobData(jobsWithPositions);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobData();
  }, [userData.ID]);

  const handleSortCriteriaChange = (event) => {
    setSortCriteria(event.target.value);
    sortJobPosts(event.target.value, sortOrder);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
    sortJobPosts(sortCriteria, event.target.value);
  };

  const sortJobPosts = (criteria, order) => {
    const sortedJobPosts = [...jobData].sort((a, b) => {
      let comparison = 0;
      if (criteria === 'date') {
        comparison = Date.parse(a.createdAt) - Date.parse(b.createdAt);
      } else if (criteria === 'position') {
        comparison = a.positionName.localeCompare(b.positionName);
      } else if (criteria === 'likes') {
        comparison = a.likes.localeCompare(b.likes);
      } else if (criteria === 'salaryfrom') {
        comparison = a.salary_from - b.salary_from;
      } else if (criteria === 'salaryto') {
        comparison = a.salary_to - b.salary_to;
      }
      return order === 'asc' ? comparison : -comparison;
    });
    setJobData(sortedJobPosts);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  // Filtered and paginated jobData
  const filteredJobPosts = jobData.filter((job) => job.positionName.toLowerCase().includes(searchQuery.toLowerCase())).filter((job) => job.is_Active === showOpenJobs);

  const totalPages = Math.ceil(filteredJobPosts.length / itemsPerPage);
  const paginatedJobPosts = filteredJobPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleToggleJobs = (isOpen) => {
    setShowOpenJobs(isOpen);
    setCurrentPage(1); // Reset to the first page on toggle
  };

  return (
    <>
      <section className=''>
        <div className='flex justify-between p-5 max-w-[1200px] mx-auto items-center pt-5'></div>
        <div className='flex container mx-auto w-full gap-5 justify-between'>
          <div className='flex w-1/3'>
            <input
              type='text'
              className='focus:outline-none rounded-none rounded-l-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 border-r-0'
              placeholder='Search By Job Position'
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type='button'
              className='inline-flex rounded-e-lg text-gray-900 items-center px-3 text-sm text-gray-900 bg-gray-200 border border-rounded border-gray-400 border-l hover:bg-jobportal-pink hover:border-jobportal-darkpink hover:text-white'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
              </svg>
            </button>
          </div>
          <div className='flex gap-5 w-2/3  pl-10'>
            <div className='flex w-1/4 justify-start'>
              <button
                id='openJobs'
                type='button'
                className={` ${
                  showOpenJobs
                    ? ' text-white bg-jobportal-pink border border-jobportal-darkpink rounded-s-lg  text-base px-5 py-2.5'
                    : 'border border-r-0 bg-gray-200 text-gray-800 border-gray-400 rounded-s-lg text-base px-5 py-2.5'
                } `}
                onClick={() => handleToggleJobs(true)}
              >
                Open
              </button>
              <button
                id='closedJobs'
                type='button'
                className={`${
                  !showOpenJobs
                    ? 'text-white bg-jobportal-pink border border-jobportal-darkpink rounded-r-lg text-base px-5 py-2.5'
                    : 'border border-l-0 bg-gray-200 text-gray-800 border-gray-400 rounded-r-lg text-base px-5 py-2.5'
                }`}
                onClick={() => handleToggleJobs(false)}
              >
                Closed
              </button>
            </div>
            <div className='flex w-1/4 justify-end'>
              <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>Sort by:</span>
              <select
                className='focus:outline-none rounded-e-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '
                onChange={handleSortCriteriaChange}
              >
                <option value='date'>Date Posted</option>
                <option value='position'>Job Position</option>
                <option value='likes'>Likes</option>
                <option value='salaryfrom'>Salary To</option>
                <option value='salaryto'>Salary From</option>
              </select>
            </div>
            <div className='flex w-1/4 justify-end'>
              <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
                Order by:
              </span>
              <select
                className='focus:outline-none rounded-e-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '
                onChange={handleSortOrderChange}
              >
                <option value='desc'>Descending</option>
                <option value='asc'>Ascending</option>
              </select>
            </div>
            <div className='flex w-1/4 '>
              <Link to='/company/jobs/create'>
                <button
                  type='button'
                  className='inline-flex text-white bg-jobportal-pink hover:opacity-90 font-bold rounded-lg border border-jobportal-darkpink text-base px-5 py-2.5 '
                >
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                  </svg>

                  <p>Post a job</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto '>
          <div className={`applicantListItem flex items-center justify-between gap-5 w-full p-0 mt-10`}>
            <div className='flex items-start gap-10 w-full pl-5 pr-5'>
              <p className='text-gray-600 font-bold w-1/24'>Nr</p>
              <p className='text-gray-600 font-bold w-3/12'> Details</p>
              <p className='text-gray-600 w-1/12 font-bold'>Start Date</p>
              <p className='text-gray-600 w-1/12 font-bold'>End Date</p>
              <p className='text-gray-600 w-2/12 font-bold'>Salary</p>
              <p className='text-gray-600 w-1/24 font-bold'>Likes</p>
              <p className='text-gray-600 w-1/6 font-bold'>Nr. Applicants</p>
              <p className='text-gray-600 w-3/12 font-bold '>Actions</p>
            </div>
          </div>
          <hr className='h-px my-2 bg-gray-300 border-0' />
          <div className='flex flex-col '>
            {paginatedJobPosts.map((jobData) => (
              <div className='flex flex-row pt-2 gap-5 w-full'>
                <JobItem className='w-12/12' key={jobData.ID} jobData={jobData} />
              </div>
            ))}
          </div>

          <div className='flex justify-center mt-4'>
            {currentPage == 1 ? (
              <button
                style={{ width: '2.5rem', height: '2.5rem' }}
                disabled={true}
                className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border text-grey-200 font-bold text-sm border-grey-200 `}
              >
                {
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' strokeOpacity='0.2' class='size-6'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                  </svg>
                }
              </button>
            ) : (
              <button
                style={{ width: '2.5rem', height: '2.5rem' }}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink `}
              >
                {
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-6'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                  </svg>
                }
              </button>
            )}

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 mx-1 ${
                  currentPage === index + 1
                    ? 'focus:outline-none rounded-md bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink'
                    : 'focus:outline-none rounded-md bg-gray-50 border text-gray-900 text-sm border-gray-400'
                }`}
              >
                {index + 1}
              </button>
            ))}

            {currentPage == totalPages ? (
              <button
                style={{ width: '2.5rem', height: '2.5rem' }}
                disabled={true}
                className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border text-grey-200 font-bold text-sm border-grey-200 `}
              >
                {
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' strokeOpacity='0.2' class='size-6'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                  </svg>
                }
              </button>
            ) : (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                style={{ width: '2.5rem', height: '2.5rem' }}
                className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink `}
              >
                {
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-6'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                  </svg>
                }
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
