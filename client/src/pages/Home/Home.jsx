import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import illustration from '../../img/Illustration.svg';
import userSVG from '../../img/user.svg';
import cloudSVG from '../../img/uploadCloud.svg';
import searchSVG from '../../img/search.svg';
import checkBadgeSVG from '../../img/checkBadge.svg';
import grayLogo from '../../img/grayLogo.png';
import TestimonialCard from '../../components/HomePageComponents/TestimonialCard';
import EmpCard from '../../components/HomePageComponents/EmpCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [companies, setCompanies] = useState([]);
  const [mostLikedJobs, setMostLikedJobs] = useState([]);
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  const [jobFields, setJobFields] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/find-jobs?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('http://localhost:5000/api/companies'),
          fetch('http://localhost:5000/api/testimonials'),
          fetch('http://localhost:5000/api/jobposts/popular'),
          fetch('http://localhost:5000/api/jobfields'),
        ]);

        const companiesData = await responses[0].json();
        setCompanies(companiesData.rows.sort((a, b) => b.jobPostCount - a.jobPostCount).slice(0, 8));

        const testimonialsData = await responses[1].json();
        setTestimonials(testimonialsData.sort((a, b) => b.rating - a.rating).slice(0, 3));

        const jobPositionsData = await responses[2].json();
        setMostLikedJobs(Array.isArray(jobPositionsData) ? jobPositionsData : []);

        const jobFieldsData = await responses[3].json();
        setJobFields(jobFieldsData.rows.sort((a, b) => b.jobPositionCount - a.jobPositionCount).slice(0, 8)); // Assuming API returns count of open positions
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='bg-[#f1f2f4] py-[100px]'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-section'>
              <h1 className='font-semibold text-[50px] leading-[1.2]'>
                Find a Job that Matches <span className='block mb-7 p-0'>Your Interests and Skills.</span>
              </h1>
              <span className='text-base text-[#5e6670]'>
                We aim to provide a platform where individuals can{' '}
                <span className='block leading-[0.8] text-base m-0 p-0'>explore opportunities tailored to their strengths and passions.</span>
              </span>

              <div className='flex items-center justify-center mt-5'>
                <div className='flex items-center border rounded w-full max-w-[600px] p-[5px] border-solid border-[#ccc]'>
                  <form onSubmit={handleFormSubmit} className='flex items-center w-full'>
                    <button type='submit'>
                      <FaSearch className='text-[1.2rem] mx-2.5 my-0 text-[purple]' />
                    </button>
                    <input
                      value={searchQuery}
                      onChange={handleQueryChange}
                      type='text'
                      className='flex-1 w-full text-base shadow-none p-[5px] border-none outline-none focus:outline-none focus:border-none focus:ring-0 ring-0 bg-[#f1f2f4]'
                      placeholder='Search jobs by title or keyword'
                    />
                  </form>
                </div>
                <button className='bg-jobportal-pink text-[white] rounded cursor-pointer text-base ml-2.5 px-4 py-2.5 border-[none] hover:bg-[#b3009a] active:bg-[#80006d]'>
                  Search
                </button>
              </div>
              <span className='text-base text-[#5e6670]'>Suggestions: Designer, Web Developer, Video Editor</span>
            </div>
            <div className='image-section hidden md:block'>
              <img src={illustration} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[100px]'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='font-medium text-[42px] mb-10'>Most Popular Vacancies</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {mostLikedJobs.map((job) => (
              <Link
                to={`/find-jobs?q=${encodeURIComponent(job.position)}`}
                key={job.id}
                className='p-4 bg-white rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300'
              >
                <div className='font-semibold text-lg'>{job.position}</div>
                <div className='text-sm text-gray-500'>{job.totalLikes} Users Liked the Jobs in this Position</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#f1f2f4] mt-[100px]'>
        <div className='font-medium text-[42px] text-center mb-[100px] pt-[100px]'>How does Job Horizon Work ?</div>
        <div className='px-6 md:px-0 pb-[100px] flex flex-col md:flex-row justify-center gap-5'>
          <div className='rounded-xl up-arrow flex flex-col items-center py-6'>
            <div className='p-5 bg-white aspect-square w-20  rounded-full' style={{ zIndex: 100 }}>
              <img src={userSVG} />
            </div>
            <h3 className='text-lg font-semibold mt-5'>Create Account</h3>
            <p className='w-10/12 leading-5 text-center mt-3 text-gray-500'>Sign Up and Unlock Countless Job Opportunities!</p>
          </div>

          <div className='rounded-xl down-arrow bg-white flex flex-col items-center py-6'>
            <div className='p-5 bg-jobportal-pink aspect-square w-20  rounded-full' style={{ zIndex: 50 }}>
              <img src={cloudSVG} />
            </div>
            <h3 className='text-lg font-semibold mt-5'>Upload CV/Resume</h3>
            <p className='w-10/12 leading-5 text-center mt-3 text-gray-500'>Share Your Resume and Let Employers Find You.</p>
          </div>
          <div className='rounded-xl up-arrow flex flex-col items-center py-6'>
            <div className='p-6 bg-white aspect-square w-20  rounded-full' style={{ zIndex: 100 }}>
              <img src={searchSVG} />
            </div>
            <h3 className='text-lg font-semibold mt-5'>Find Suitable Job</h3>
            <p className='w-10/12 leading-5 text-center mt-3 text-gray-500'>Browse and Discover Your Ideal Job in Minutes.</p>
          </div>
          <div className='rounded-xl flex flex-col items-center py-6'>
            <div className='p-5 bg-white aspect-square w-20  rounded-full' style={{ zIndex: 100 }}>
              <img src={checkBadgeSVG} />
            </div>
            <h3 className='text-lg font-semibold mt-5'>Apply to Job</h3>
            <p className='w-10/12 leading-5 text-center mt-3 text-gray-500'>Apply with a Click and Take the Next Career Step.</p>
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='font-medium text-[42px] mb-[100px] pt-[100px]'>Popular Job Fields</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {jobFields.map((field) => (
              <Link
                to={`/find-jobs?q=${encodeURIComponent(field['Job Positions'][0].position)}`}
                key={field.id}
                className='flex items-center p-4 bg-purple-50 rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300'
              >
                <div className='flex-shrink-0 w-16 h-16 border-fuchsia-700 border rounded-full'>
                  <img
                    src={`http://localhost:5000/jobFields/${field.s3Key}`} // Ensure your server serves images from the correct directory
                    alt={field.field}
                    className='w-full h-full object-contain object-center p-4'
                  />
                </div>
                <div className='ml-4'>
                  <div className='text-lg font-semibold'>{field.field}</div>
                  <div className='text-sm text-gray-600'>
                    {field.jobPositionCount} Open Position
                    {field.jobPositionCount > 1 ? 's' : ''}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
        <div className='font-medium text-[42px] mb-[40px] mt-[100px]'>
          <h2>Top Companies</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {companies.map((company, index) => (
            <Link
              to={`/find-jobs?q=${encodeURIComponent(company.CompanyName)}`}
              key={index}
              className='p-4 bg-white rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300'
            >
              <div className='flex items-center mb-4'>
                <img
                  src={company.CompanyLogo ? `http://localhost:5000/companyLogos/${company.CompanyLogo?.s3Key}` : grayLogo}
                  alt={company.CompanyName}
                  className='w-10 h-10 border object-contain object-center rounded-full mr-4'
                />
                <div>
                  <div className='text-lg font-semibold'>{company.CompanyName}</div>
                  <div className='text-sm text-gray-500'>{company.location}</div>
                </div>
                {company.featured && <div className='ml-auto text-xs text-red-500 bg-red-100 py-1 px-2 rounded-full'>Featured</div>}
              </div>
              <div>
                <button className='w-full py-2 px-4 bg-purple-100 text-fuchsia-700 font-medium rounded-md hover:bg-purple-200 transition-colors duration-300'>Open Position</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='bg-[#f1f2f4] mt-[100px] py-[50px]'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px]'>
          <div className='font-medium text-[42px] text-center mb-[50px]'>
            <h2>Clients Testimonial</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      <EmpCard />
    </>
  );
};

export default Home;
