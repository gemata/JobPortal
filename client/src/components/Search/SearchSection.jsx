import React from 'react';
import './style.css';

const SearchSection = () => {
  return (
    <div className='homepage'>
      <div className='search-section'>
        <div className='container'>
          <h1 className='title'>
            <span className='colored-text'>Find the </span>
            <span className='px-3'> right </span>
            <span className='colored-text'> fit.</span>
          </h1>
          <div className='search-bar'>
            <input type='text' placeholder='search' />
          </div>
          <span className='small-txt'>
            <a href='#'>Upload your resume</a> - Get noticed by top employers
          </span>
        </div>
        <div className='popular-searches'>
          <h3 className='popular-searches__title'>Popular searches</h3>
          <ul className='list'>
            <li>
              <a href='' className='li-a'>
                Work from home
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Part-Time
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Customer Service
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Data Analyst
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Delivery Driver
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Engineering
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                IT
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Marketing
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Medical
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Nurse
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Project Manager
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Sales
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Warehouse
              </a>
            </li>
            <li>
              <a href='' className='li-a'>
                Welder
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

/*
  <div className="bg-jobportal-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-200">Find the </span>
          <span className="text-white"> right </span>
          <span className="text-purple-200">fit.</span>
        </h1>
        <div className="mt-4 w-3/4 mx-auto">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="search"
          />
        </div>
        <span className="text-white block text-center mt-4">
          <a href="/" className="text-white">
            Upload your resume
          </a>{" "}
          - Get noticed by top employers
        </span>
      </div>
    </div>
*/
