import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../img/mainLogo.png";
import { Link } from "react-router-dom";

export default function Search({
  userData,
  setUserData,
  isLoggedOut,
  setIsLoggedOut,
}) {
  const handleLogout = () => {
    setUserData([]);
    setIsLoggedOut(true);
  };

  return (
    <>
      <div className="mt-5 mb-5">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between items-center">
            <div className="w-full flex gap-5 items-center">
              <div className="w-[50px] mr-[11%]">
                <img className="rounded-full" src={logo} alt="logo" />
              </div>

              <div className="relative max-w-[773px] w-full">
                <FaSearch className="absolute -translate-y-2/4 text-purple-700 left-2.5 top-2/4" />
                <input
                  className="w-full border rounded pl-[50px] pr-2.5 py-2.5 border border-jobportal-pink focus:outline-none focus:ring focus:ring-1 focus:ring-jobportal-pink"
                  type="text"
                  placeholder="Job title, keyword, company"
                />
              </div>
            </div>
            {userData.length != 0 || !isLoggedOut ? (
              <>
                <div className="flex gap-2.5 w-[250px] justify-end">
                  <Link
                    to="/profile/dashboard"
                    className="px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700"
                  >
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-2.5">
                  <a
                    href="http://localhost:5000/admin/login"
                    className="px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700"
                  >
                    Login
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
