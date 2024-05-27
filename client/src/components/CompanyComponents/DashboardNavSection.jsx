import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function DashboardNavSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <section className='navSection bg-white'>
        <nav className='dashboardNav max-w-[1200px] mx-auto'>
          <ul className='flex justify-between gap-10 flex-wrap'>
            <li>
              <NavLink
                to='/company/dashboard'
                className={({ isActive }) => `flex gap-2 p-5 items-center ${isActive ? 'border-b-2 border-jobportal-cyan text-jobportal-cyan' : ''}`}
              >
                {/* Squares 2x2 SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4 mt-[0.125rem]'>
                  <path d='M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z' />
                </svg>
                Dashboard
              </NavLink>
            </li>
            <li className='relative'>
              <NavLink
                to='/company/jobs/create'
                className={({ isActive }) => `flex gap-2 p-5 items-center ${isActive ? 'border-b-2 border-jobportal-cyan text-jobportal-cyan' : ''}`}
              >
                {/* Plus SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5 mt-[0.125rem]'>
                  <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
                </svg>
                Create New Posting
              </NavLink>
            </li>

            <li>
              <NavLink to='/company/jobs' className={({ isActive }) => `flex gap-2 p-5 items-center ${isActive ? 'border-b-2 border-jobportal-cyan text-jobportal-cyan' : ''}`}>
                {/* Briefcase SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4 mt-[0.125rem]'>
                  <path
                    fillRule='evenodd'
                    d='M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
                    clipRule='evenodd'
                  />
                  <path d='M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z' />
                </svg>
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/company/candidates'
                className={({ isActive }) => `flex gap-2 p-5 items-center ${isActive ? 'border-b-2 border-jobportal-cyan text-jobportal-cyan' : ''}`}
              >
                {/* Users SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4 mt-[0.125rem]'>
                  <path d='M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' />
                </svg>
                Candidates
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/company/interviews'
                className={({ isActive }) => `flex gap-2 p-5 items-center ${isActive ? 'border-b-2 border-jobportal-cyan text-jobportal-cyan' : ''}`}
              >
                {/* Calendar SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4 mt-[0.125rem]'>
                  <path
                    fillRule='evenodd'
                    d='M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z'
                    clipRule='evenodd'
                  />
                </svg>
                Interviews
              </NavLink>
            </li>
            <li className='relative'>
              <button onClick={toggleDropdown} className='flex gap-2 p-5 items-center'>
                {/* Chart SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4 mt-[0.125rem]'>
                  <path d='M12 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1ZM6.5 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6ZM2 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Z' />
                </svg>
                Analytics
                {/* Chevron Down SVG */}
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4 mt-[0.125rem]'>
                  <path
                    fillRule='evenodd'
                    d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className='absolute right-0 w-full rounded-md shadow-lg divide-y bg-white ring-1 ring-black ring-opacity-5'>
                  <div className='py-1'>
                    <Link to='/company/analytics' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                      Overview
                    </Link>
                  </div>
                  <div className='py-1'>
                    <Link to='/company/analytics/billing-history' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                      Billing History
                    </Link>
                  </div>
                  <div className='py-1'>
                    <Link to='company/analytics/payment-method' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                      Payment Method
                    </Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
