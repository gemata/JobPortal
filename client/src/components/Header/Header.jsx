import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ userData }) => {
  return (
    <div className="header">
      <div className="max-w-[1200px] mt-4 mx-auto my-0 p-0">
        <div className="flex justify-between items-center pb-5">
          <div className="logo">Hello</div>
          <div className="">
            <button className="rounded px-3 py-[7px] bg-[rgb(110,70,174)] text-[white] mr-2.5 border-2 border-solid border-[rgb(110,70,174)] hover:bg-[rgb(128,96,182)] hover:cursor-pointer hover:border-2 hover:border-solid hover:border-[rgb(128,96,182)]">
              Sign up
            </button>
            <button className="rounded px-3 py-[7px] bg-white text-[rgb(110,70,174)] border-2 border-solid border-[rgb(217,219,233)] hover:cursor-pointer hover:bg-[rgb(234,233,248)] hover:border-2 hover:border-solid hover:border-[rgb(234,233,248)]">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-[rgb(242,242,242)] p-2.5">
        <div className="container">
          <div className="flex justify-between">
            <div className="text-base flex content-center gap-[35px] list-none cursor-pointer pr-[62px] pb-5">
              <li>Find Jobs</li>
              <li>Salary Tools</li>
              <li>Career Advice</li>
              <li>Resume Help</li>
              <li>Upload Resume</li>
            </div>
            <div className="post-job">Employers/ Post Job</div>
          </div>
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
