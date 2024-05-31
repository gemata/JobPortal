import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../../img/mainLogo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Search({ userData, setUserData, isLoggedOut, setIsLoggedOut }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData([]);
    setIsLoggedOut(true);
    Cookies.remove('userSessionToken');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/find-jobs?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const location = useLocation();

  return (
    <>
      <div className='mt-5 mb-5'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='flex flex-wrap justify-between gap-5 items-center'>
            <div className='w-full flex flex-wrap md:flex-nowrap md:flex-1 gap-5 items-center'>
              <Link to='/' onClick={(e) => e.stopPropagation()} className='w-[50px] mr-[11%]'>
                <div className='flex items-center'>
                  <img className='rounded-full h-15 w-15' src={logo} alt='logo' />
                  <span className='ml-2 text-fuchsia-700 leading-5 font-bold text-lg'>Job Horizon</span>
                </div>
              </Link>

              {location.pathname !== '/find-jobs' && (
                <div className='relative max-w-[773px] w-full'>
                  <form onSubmit={handleFormSubmit}>
                    <button type='submit'>
                      <FaSearch className='absolute -translate-y-2/4 text-purple-700 left-2.5 top-2/4' />
                    </button>
                    <input
                      value={searchQuery}
                      onChange={handleQueryChange}
                      className='w-full border rounded pl-[50px] pr-2.5 py-2.5 border border-jobportal-pink focus:outline-none focus:ring focus:ring-1 focus:ring-jobportal-pink'
                      type='text'
                      placeholder='Job title, keyword, company'
                    />
                  </form>
                </div>
              )}
            </div>
            {userData.length != 0 || !isLoggedOut ? (
              <>
                <div className='flex gap-2.5 w-full md:w-[250px] justify-end'>
                  {userData.role === 'Company' ? (
                    <Link
                      to='/company/dashboard'
                      className='w-full md:w-auto text-center px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700'
                    >
                      Profile
                    </Link>
                  ) : (
                    <Link
                      to='/profile/dashboard'
                      className='w-full md:w-auto text-center px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700'
                    >
                      Profile
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className='w-full md:w-auto px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700'
                  >
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='w-full md:w-auto flex gap-2.5'>
                  <a
                    href='http://localhost:5000/admin/login'
                    className='w-full md:w-auto text-center px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700'
                  >
                    Login
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
