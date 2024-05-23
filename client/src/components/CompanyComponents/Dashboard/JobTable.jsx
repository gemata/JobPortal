import React from 'react';
import JobItem from './JobItem';
import { Link } from 'react-router-dom';

export default function JobTableSection() {
  return (
    <>
      <section className='jobFilterOptions'>
        <div className='flex container mx-auto items-center pt-5'>
          <h3 className='text-2xl font-bold'>Jobs</h3>
        </div>
        <div className='container mx-auto'>
          <div className='flex justify-between pt-5'>
            <div className='flex'>
              <button id='openJobs' type='button' className='text-white bg-jobportal-pink hover:opacity-90 font-bold rounded-s-lg text-base px-5 py-2.5 '>
                Open (1)
              </button>
              <button
                id='closedJobs'
                type='button'
                className='text-jobportal-pink bg-white hover:opacity-90 font-bold rounded-e-lg text-base px-5 py-2.5 border-2 border-jobportal-pink border-l-0'
              >
                Closed (3)
              </button>
            </div>
            <Link to='/company/jobs/create'>
              <button type='button' className='text-white bg-jobportal-pink hover:opacity-90 font-bold rounded-lg text-base px-5 py-2.5 '>
                Post a job
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className=''>
        <div className='flex container mx-auto pt-10 justify-between'>
          <div className='flex w-1/3'>
            <button type='button' className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border-2 rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4'>
                <path d='M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z' />
              </svg>
            </button>
            <input
              type='text'
              className='focus:outline-none rounded-none bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 border-r-0'
              placeholder='Filter and search jobs'
            />
            <button
              type='button'
              className='inline-flex rounded-e-lg text-gray-900 items-center px-3 text-sm text-gray-900 bg-gray-50 border-2 border-rounded border-gray-400 border-l-0'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4'>
                <path
                  fillRule='evenodd'
                  d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div className='flex gap-5 w-1/3'>
            <div className='flex w-1/2'>
              <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border-2 rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
                Sort by:
              </span>
              <select className='focus:outline-none rounded-e-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '>
                <option value='date'>Date posted</option>
                <option value=''>United States</option>
                <option value=''>Canada</option>
                <option value=''>France</option>
                <option value=''>Germany</option>
              </select>
            </div>
            <div className='flex w-1/2'>
              <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border-2 rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
                Order by:
              </span>
              <select className='focus:outline-none rounded-e-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '>
                <option value='desc'>Descending</option>
                <option value='asc'>Ascending</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className='Section'>
        <div className=' container mx-auto'>
          <div className='flex flex-col gap-5 pt-10'>
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
          </div>
        </div>
      </section>
    </>
  );
}
