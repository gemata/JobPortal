import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = ({ userData }) => {
  return (
    <div className="bg-[#f1f2f4] p-[5px]">
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <ul className="flex items-center gap-10">
          <li className="text-blue-900">Home</li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-900 cursor-pointer">
            Find Jobs
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-900 cursor-pointer">
            Salary Tools
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-900 cursor-pointer">
            Career Advice
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-900 cursor-pointer">
            Resume Help
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-900 cursor-pointer">
            Upload Resume
          </li>
        </ul>
        <div className="flex justify-end mt-[-25px]">
          <span className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-900 cursor-pointer">
            Employers/Post Job
          </span>{" "}
          <FaArrowRight className="mt-1.5 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;

/*

    <div className=''>
    //   <div className='container mx-auto py-4'>
    //     <div className='flex items-center justify-between'>
    //       <div className='logo text-xl'>Hello</div>
    //       <div className='buttons'>
    //         <button className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mr-2'>Sign up</button>
    //         <button className='bg-white border border-purple-700 hover:bg-purple-50 text-purple-700 font-bold py-2 px-4 rounded'>Login</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='bg-gray-200 py-2'>
    //     <div className='container flex mx-auto'>
    //       <ul className='flex items-center justify-start gap-x-8 text-sm'>
    //         <li>Find Jobs</li>
    //         <li>Salary Tools</li>
    //         <li>Career Advice</li>
    //         <li>Resume Help</li>
    //         <li className='text-purple-700 cursor-pointer'>Upload Resume</li>
    //       </ul>
    //       <li className='text-purple-700 cursor-pointer text-sm list-none ml-96'>Employers/ Post Job</li>
    //     </div>
    //   </div>
    // </div>
    */
