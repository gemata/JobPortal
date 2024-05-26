import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = ({ userData }) => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "text-blue-900"
      : "hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-900 cursor-pointer";
  };

  return (
    <div className="p-[5px] bg-[#f1f2f4]">
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <ul className="flex items-center gap-10">
          <Link to="/" className={getLinkClassName("/")}>
            Home
          </Link>
          <Link to="/find-jobs" className={getLinkClassName("/find-jobs")}>
            Find Jobs
          </Link>
          <Link
            to="/salary-tools"
            className={getLinkClassName("/salary-tools")}
          >
            Salary Tools
          </Link>
          <Link
            to="/career-advice"
            className={getLinkClassName("/career-advice")}
          >
            Career Advice
          </Link>
          <Link to="/resume-help" className={getLinkClassName("/resume-help")}>
            Resume Help
          </Link>
          <Link
            to="/upload-resume"
            className={getLinkClassName("/upload-resume")}
          >
            Upload Resume
          </Link>
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
