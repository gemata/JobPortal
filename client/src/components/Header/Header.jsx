import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

const Header = ({ userData, setUserData, isLoggedOut, setIsLoggedOut }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "text-white"
      : "hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white cursor-pointer text-white";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="md:sticky md:top-0 bg-[#B051AA]" style={{ zIndex: 200 }}>
        <div className="p-[15px]">
          <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0 flex items-center justify-between">
            <Link to="/" className={getLinkClassName("/")}>
              Home
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/find-jobs" className={getLinkClassName("/find-jobs")}>
                Find Jobs
              </Link>
              <Link to="/pricing" className={getLinkClassName("/pricing")}>
                Pricing
              </Link>
              <Link to="/about" className={getLinkClassName("/about")}>
                About
              </Link>
              <Link to="/contact" className={getLinkClassName("/contact")}>
                Contact
              </Link>
              {userData.length !== 0 && userData.role === "Company" && (
                <Link
                  to="/company/dashboard"
                  className="inline-flex hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white cursor-pointer text-white"
                >
                  Employers/Post Job
                  <FaArrowRight className="mt-1.5 ml-2" />
                </Link>
              )}

              {userData.length !== 0 && userData.role === "Admin" && (
                <a
                  href="http://localhost:5000/admin"
                  className="inline-flex hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white cursor-pointer text-white"
                >
                  Admin Page
                  <FaArrowRight className="mt-1.5 ml-2" />
                </a>
              )}
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              {isMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-full gap-5 bg-[#B051AA] rounded-lg shadow-lg"
                  style={{ zIndex: 300 }}
                >
                  <div className="flex flex-col ml-6 p-2 space-y-2">
                    <Link
                      to="/find-jobs"
                      className={getLinkClassName("/find-jobs")}
                      onClick={toggleMenu}
                    >
                      Find Jobs
                    </Link>
                    <Link
                      to="/pricing"
                      className={getLinkClassName("/pricing")}
                      onClick={toggleMenu}
                    >
                      Pricing
                    </Link>
                    <Link
                      to="/about"
                      className={getLinkClassName("/about")}
                      onClick={toggleMenu}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className={getLinkClassName("/contact")}
                      onClick={toggleMenu}
                    >
                      Contact
                    </Link>
                    {userData.length !== 0 && userData.role === "Company" && (
                      <Link
                        to="/company/dashboard"
                        className="block pb-2 text-white hover:bg-fuchsia-700 rounded-t-lg"
                        onClick={toggleMenu}
                      >
                        Employers/Post Job
                      </Link>
                    )}

                    {userData.length !== 0 && userData.role === "Admin" && (
                      <a
                        href="http://localhost:5000/admin"
                        className="block pb-2 text-white hover:bg-fuchsia-700 rounded-t-lg"
                        onClick={toggleMenu}
                      >
                        Admin Page
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Search
          userData={userData}
          setUserData={setUserData}
          isLoggedOut={isLoggedOut}
          setIsLoggedOut={setIsLoggedOut}
        />
      </div>
    </>
  );
};

export default Header;
