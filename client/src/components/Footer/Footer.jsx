import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../img/mainLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#271820] text-gray-400'>
      <div className='container max-w-[1200px] mx-auto py-10 px-[15px]'>
        <div className='flex flex-wrap gap-5 md:gap-0 justify-between'>
          <div className='w-full md:w-auto'>
            <div className='w-[50px] mb-[4%]'>
              <Link to='/' className='flex items-center'>
                <img className='rounded-full h-15 w-15' src={logo} alt='logo' />
                <span className='ml-2 text-white font-bold leading-5 text-lg'>Job Horizon</span>
              </Link>
            </div>

            <p className='mb-2'>
              Call now:{' '}
              <a href='tel:+38349488909' className='text-white'>
                049 488-909
              </a>
            </p>
            <address className='not-italic'>Dukagjini Residence - 1 Prishtina, Republic of Kosova</address>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4'>Other Links</h3>
            <ul>
              <li>
                <Link to='/salary-tools' className='hover:text-white'>
                Salary Tools
                </Link>
              </li>
              <li>
                <Link to='/resume-help' className='hover:text-white'>
                Resume Help
                </Link>
              </li>
              <li>
                <Link to='/career-advice' className='hover:text-white'>
                Career Advice
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4'>Candidate</h3>
            <ul>
              <li>
                <Link to='/find-jobs' className='hover:text-white'>
                Browse Jobs
                </Link>
              </li>
              <li>
                <Link to='/#' className='hover:text-white'>
                Browse Employers
                </Link>
              </li>
              <li>
                <Link to='/profile/detail' className='hover:text-white'>
                Candidate Dashboard
                </Link>
              </li>
              <li>
                <Link to='/profile/applied-jobs' className='hover:text-white'>
                Applications
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4'>Employers</h3>
            <ul>
              <li>
                <Link to='/company/dashboard' className='hover:text-white'>
                Employer Dashboard
                </Link>
              </li>
              <li>
                <Link to='/company/profile' className='hover:text-white'>
                Employer Profile
                </Link>
              </li>
              <li>
                <Link to='/company/profile' className='hover:text-white'>
                Interviews
                </Link>
              </li>
              <li>
                <Link to='/pricing' className='hover:text-white'>
                Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4'>Support</h3>
            <ul>
              <li>
                <a href='#' className='hover:text-white'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-6 flex justify-between items-center'>
          <p>© {currentYear} Job Portal. All rights reserved.</p>
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-white'>
              <FaFacebookF />
            </a>
            <a href='#' className='hover:text-white'>
              <FaYoutube />
            </a>
            <a href='#' className='hover:text-white'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
