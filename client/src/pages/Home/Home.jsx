import React from 'react';
import { FaSearch } from 'react-icons/fa';
import illustration from '../../img/Illustration.svg';
import process from '../../img/Process.svg';
import categoryImage1 from '../../img/category1.svg';
import categoryImage2 from '../../img/category2.svg';
import categoryImage3 from '../../img/category3.svg';
import categoryImage4 from '../../img/category4.svg';
import categoryImage5 from '../../img/category5.svg';
import categoryImage6 from '../../img/category6.svg';
import categoryImage7 from '../../img/category7.svg';
import categoryImage8 from '../../img/category8.svg';
import companyLogo1 from '../../img/company1.svg';
import companyLogo2 from '../../img/company2.svg';
import companyLogo3 from '../../img/company3.svg';
import companyLogo4 from '../../img/company4.svg';
import companyLogo5 from '../../img/company5.webp';
import companyLogo6 from '../../img/company6.webp';
import companyLogo7 from '../../img/company7.png';
import companyLogo8 from '../../img/company8.png';
import TestimonialCard from './TestimonialCard';
import man1 from '../../img/man1.svg';
import man2 from '../../img/man2.svg';
import man3 from '../../img/man3.svg';
import Search from '../../components/Header/Search';
import EmpCard from '../../components/HomePageComponents/EmpCard';

const categoryData = [
  { name: 'Graphics & Design', positions: 357, image: categoryImage1 },
  { name: 'Code & Programing', positions: 312, image: categoryImage2 },
  { name: 'Digital Marketing', positions: 297, image: categoryImage3 },
  { name: 'Video & Animation', positions: 247, image: categoryImage4 },
  { name: 'Music & Audio', positions: 204, image: categoryImage5 },
  { name: 'Account & Finance', positions: 167, image: categoryImage6 },
  { name: 'Health & Care', positions: 125, image: categoryImage7 },
  { name: 'Data & Science', positions: 57, image: categoryImage8 },
];

const companies = [
  {
    name: 'Dribbble',
    location: 'United States',
    featured: true,
    image: companyLogo1,
  },
  {
    name: 'Upwork',
    location: 'United States',
    featured: false,
    image: companyLogo2,
  },
  { name: 'Slack', location: 'China', featured: false, image: companyLogo3 },
  {
    name: 'Freepik',
    location: 'United States',
    featured: false,
    image: companyLogo4,
  },
  {
    name: 'Microsoft',
    location: 'United States',
    featured: true,
    image: companyLogo5,
  },
  {
    name: 'Instagram',
    location: 'United States',
    featured: false,
    image: companyLogo6,
  },
  { name: 'Tesla', location: 'China', featured: false, image: companyLogo7 },
  {
    name: 'Facebook',
    location: 'United States',
    featured: false,
    image: companyLogo8,
  },
];

const testimonials = [
  {
    name: 'Robert Fox',
    position: 'UI/UX Designer',
    quote: 'Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.',
    image: man1,
  },
  {
    name: 'Bessie Cooper',
    position: 'Creative Director',
    quote: 'Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia.',
    image: man2,
  },
  {
    name: 'Jane Cooper',
    position: 'Photographer',
    quote: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: man3,
  },
];

const Home = () => {
  return (
    <>
      <div className='bg-[#f1f2f4] py-[100px]'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='flex justify-between items-center'>
            <div className='text-section'>
              <h1 className='font-semibold text-[50px]'>
                Find a job that suits <span className='block leading-[0.8] mb-7 p-0'>your interest & skills.</span>
              </h1>
              <span className='text-base text-[#5e6670]'>
                Aliquam vitae turpis in diam convillas finibus in at risus. Nullam{' '}
                <span className='block leading-[0.8] text-base m-0 p-0'>in scelerisque leo, eget sollicitudin velit bestibulum</span>
              </span>
              <div className='flex items-center justify-center mt-5'>
                <div className='flex items-center border rounded w-full max-w-[600px] p-[5px] border-solid border-[#ccc]'>
                  <FaSearch className='text-[1.2rem] mx-2.5 my-0 text-[blue]' />
                  <input type='text' className='flex-1 text-base p-[5px] border-[none] bg-[#f1f2f4]' placeholder='Search jobs by title or keyword' />
                </div>
                <button className='bg-[#007bff] text-[white] rounded cursor-pointer text-base ml-2.5 px-4 py-2.5 border-[none] hover:bg-[#0056b3] active:bg-[#004080]'>
                  Search
                </button>
              </div>
              <span className='text-base text-[#5e6670]'>Suggestions: Designer, Web Developer, Video Editor</span>
            </div>
            <div className='image-section'>
              <img src={illustration} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[100px]'>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='font-medium text-[42px] mb-10'>Most Popular Vacancies</div>
          <div className='flex justify-between'>
            <div className='box-1'>
              <span>Anesthsiologists</span> <br />
              <span className='text-base text-[#949ba4]'>45,070 Open Positions</span> <br /> <br />
              <span>Maxillofacial Surgeons</span>
              <br />
              <span className='text-base text-[#949ba4]'>74,875 Open Positions</span> <br /> <br />
              <span>Financial Manager</span>
              <br />
              <span className='text-base text-[#949ba4]'>61,391 Open Positions</span>
              <br /> <br />
            </div>
            <div className='box-2'>
              <span>Surgeons</span> <br />
              <span className='text-base text-[#949ba4]'>50,364 Open Positions</span> <br /> <br />
              <span>Software Developer</span> <br />
              <span className='text-base text-[#949ba4]'>43,359 Open Positions</span>
              <br />
              <br />
              <span>Management Analysis</span> <br />
              <span className='text-base text-[#949ba4]'>93,046 Open Positions</span>
            </div>
            <div className='box-3'>
              <span>Dentist</span> <br />
              <span className='text-base text-[#949ba4]'>12,365 Open Positions</span>
              <br />
              <br />
              <span>IT Manager</span> <br />
              <span className='text-base text-[#949ba4]'>22,180 Open Positions</span>
              <br /> <br />
              <span>Data Scientist</span>
              <br />
              <span className='text-base text-[#949ba4]'>35,670 Open Positions</span>
            </div>
            <div className='box-4'>
              <span>Video Editor</span> <br />
              <span className='text-base text-[#949ba4]'>61,310 Open Positions</span>
              <br /> <br />
              <span>Operations Research Analysis</span> <br />
              <span className='text-base text-[#949ba4]'>8,288 Open Positions</span>
              <br /> <br />
              <span>DevOps Engineer</span> <br />
              <span className='text-base text-[#949ba4]'>52,422 Open Positions</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#f1f2f4] mt-[100px]'>
        <div className='font-medium text-[42px] text-center mb-[100px] pt-[100px]'>How does job-pilot work ?</div>
        <div className='pb-[100px] flex justify-center'>
          <img src={process} alt='' />
        </div>
      </div>
      <div>
        <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
          <div className='font-medium text-[42px] mb-[100px] pt-[100px]'>
            <h2>Popular Categories</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {categoryData.map((category) => (
              <div key={category.name} className='flex items-center p-4 bg-blue-50 rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300'>
                <div className='flex-shrink-0 w-16 h-16'>
                  <img src={category.image} alt={category.name} className='w-full h-full object-cover rounded-md' />
                </div>
                <div className='ml-4'>
                  <div className='text-lg font-semibold'>{category.name}</div>
                  <div className='text-sm text-gray-600'>
                    {category.positions} Open position
                    {category.positions > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
        <div className='font-medium text-[42px] mb-[40px] mt-[100px]'>
          <h2>Top companies</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {companies.map((company, index) => (
            <div key={index} className='p-4 bg-white rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300'>
              <div className='flex items-center mb-4'>
                <img src={company.image} alt={company.name} className='w-10 h-10 rounded-full mr-4' />
                <div>
                  <div className='text-lg font-semibold'>{company.name}</div>
                  <div className='text-sm text-gray-500'>{company.location}</div>
                </div>
                {company.featured && <div className='ml-auto text-xs text-red-500 bg-red-100 py-1 px-2 rounded-full'>Featured</div>}
              </div>
              <div>
                <button className='w-full py-2 px-4 bg-blue-100 text-blue-500 font-medium rounded-md hover:bg-blue-200 transition-colors duration-300'>Open Position</button>
              </div>
            </div>
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

      <EmpCard/>
      
    </>
  );
};

export default Home;
