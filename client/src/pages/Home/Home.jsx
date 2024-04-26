import React from 'react';
import SearchSection from '../../components/Search/SearchSection';
import './style.css';

const Home = () => {
  return (
    <div className='homepage'>
      <SearchSection />
      <div className='help-section bg-purple-800'>
        <div className='container mx-auto py-12'>
          <div className='help-section__wrapper flex'>
            <div className='img w-1/2'>
              <img
                src='https://image.cnbcfm.com/api/v1/image/107069627-1654086975733-gettyimages-143071319-pe0080780.jpeg?v=1688154770'
                alt='graduate'
                className='rounded-l-full'
              />
            </div>
            <div className='help-list ml-8'>
              <div className='help-section__title text-white text-xl font-bold mb-6'>Just graduated? We can help</div>
              <ul>
                <li className='mb-3'>
                  <a href='#' className='btn'>
                    Visit the new grad hub
                  </a>
                </li>
                <li className='mb-3'>
                  <a href='#' className='btn'>
                    Search salaries by major
                  </a>
                </li>
                <li className='mb-3'>
                  <a href='#' className='btn'>
                    Get a free resume assessment
                  </a>
                </li>
                <li className='mb-3'>
                  <a href='#' className='btn'>
                    Search entry-level jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='section mt-4 mb-3 text-lg font-bold'>Top Career Advice</div>
        <div className='browse '>
          BROWSE ADVICE <i className='arrow right'></i>
        </div>
      </div>
      <div className='second-section'>
        <div className='box'>
          <div className='box-1'>
            <div className='box__1'>
              <img className='img-1' src='https://www.monster.com/CareerAdvice/Career-Advice-Position1@2x-01.webp' alt='' /> <p className='title-profile'>ASSESSMENTS</p> <br />
              <span>11 awesome free career self assessments</span>
            </div>
          </div>
          <div className='box-2'>
            <div className='box_1'>
              <img className='img-1' src='https://www.monster.com/CareerAdvice/Career-Advice-Position2@2x-01.webp' alt='' />
              <p className='title-profile2'>JOBS</p> <br />
              <span>How to start looking for a job?</span>
            </div>
          </div>
          <div className='box-3'>
            <div className='box_1'>
              <img className='img-1' src='https://www.monster.com/CareerAdvice/Career-Advice-Position3@2x-01.webp' alt='' /> <p className='title-profile3'>RESUME</p> <br />
              <span>Resume samples</span>
            </div>
          </div>
          <div className='box-4'>
            <div className='box_1'>
              <img className='img-1' src='https://www.monster.com/CareerAdvice/Career-Advice-Position5@2x-01.webp' alt='' />
              <p className='title-profile4'>INTERVIEW</p> <br />
              <span>100 top interview questions be prepared</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* */
/*<div className="homepage">
      <div className="search-section">
        <div className="container">
          <h1 className="title">
            <span className="colored-text">Find the </span>
            <span> right </span>
            <span className="colored-text">fit.</span>
          </h1>
          <div className="search-bar">
            <input type="text" placeholder="search" />
          </div>
          <span className="small-txt">
            <a href="#">Upload your resume</a> - Get noticed by top employers
          </span>
        </div>
      </div>
    </div> */
