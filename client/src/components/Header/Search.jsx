import React from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../../img/mainLogo.png';

export default function Search() {
  return (
    <>
      <div className='mt-5 mb-5'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='flex justify-between items-center'>
            <div className='w-full flex gap-5 items-center'>
              <div className='w-[50px]'>
                <img className='rounded-full' src={logo} alt='logo' />
              </div>

              <div className='relative w-[70%]'>
                <FaSearch className='absolute -translate-y-2/4 text-purple-700 left-2.5 top-2/4' />
                <input
                  className='w-full border rounded pl-[50px] pr-2.5 py-2.5 border border-jobportal-pink focus:outline-none focus:ring focus:ring-1 focus:ring-jobportal-pink'
                  type='text'
                  placeholder='Job title, keyword, company'
                />
              </div>
            </div>
            <div className='flex gap-2.5'>
              <a
                href='http://localhost:5000/admin/login'
                className='px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700'
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
