import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../img/mainLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-gray-400'>
      <div className='container max-w-[1200px] mx-auto py-10 px-[15px]'>
        <div className='flex justify-between'>
          <div>
            <img src={logo} className='w-[50px] mb-[10px] rounded-full' alt='' />

            <p className='mb-2'>
              Call now:{' '}
              <a href='tel:+38349488909' className='text-white'>
                049 488-909
              </a>
            </p>
            <address className='not-italic'>Dukagjini Residence - 1 Prishtina, Republic of Kosova</address>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4'>Quick Link</h3>
            <ul>
              <li>
                <Link to='/about' className='hover:text-white'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-white'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/pricing' className='hover:text-white'>
                  Pricing
                </Link>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4'>Candidate</h3>
            <ul>
              <li>
                <a href='#' className='hover:text-white'>
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Browse Employers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4'>Employers</h3>
            <ul>
              <li>
                <a href='#' className='hover:text-white'>
                  Post a Job
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Employers Dashboard
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Applications
                </a>
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
            <a href='#' className='hover:text-white'>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
