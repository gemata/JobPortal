import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="logo text-xl">Hello</div>
          <div className="buttons">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mr-2">
              Sign up
            </button>
            <button className="bg-white border border-purple-700 hover:bg-purple-50 text-purple-700 font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-2">
        <div className="container flex mx-auto">
          <ul className="flex items-center justify-start gap-x-8 text-sm">
            <li>Find Jobs</li>
            <li>Salary Tools</li>
            <li>Career Advice</li>
            <li>Resume Help</li>
            <li className="text-purple-700 cursor-pointer">Upload Resume</li>
          </ul>
          <li className="text-purple-700 cursor-pointer text-sm list-none ml-96">
            Employers/ Post Job
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;

/**/
/*<div className="header">
      <div className="container">
        <div className="top-section">
          <div className="logo">Hello</div>
          <div className="buttons">
            <button className="signup">Sign up</button>
            <button className="login">Login</button>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="container">
          <div className="nav-links">
            <li>Find Jobs</li>
            <li>Salary Tools</li>
            <li>Career Advice</li>
            <li>Resume Help</li>
            <li>Upload Resume</li>
            <div className="post-job">Employers/ Post Job</div>
          </div>
        </div>
      </div>
    </div> */
