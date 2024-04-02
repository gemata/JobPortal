import React from 'react';

export default function JobItem() {
  return (
    <>
      <div className='jobItem flex items-center justify-between gap-10 bg-white rounded-lg w-full p-5'>
        <div class='flex items-center gap-10'>
          <input type='checkbox' name='' id='' />
          <div className='text-left'>
            <h5 className='text-jobportal-primary font-bold'>Senior Web Dev</h5>
            <p className='text-gray-600'>London</p>
            <p className='text-gray-600'>Posted: March 29, 2024</p>
          </div>
        </div>
        <div className='flex items-center gap-5 w-1/6'>
          <select className='focus:outline-none rounded-md bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '>
            <option value=''>Pending</option>
            <option value=''>Opened</option>
            <option value=''>Closed</option>
          </select>
          <button>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
