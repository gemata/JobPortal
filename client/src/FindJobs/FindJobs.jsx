import React from "react";
import { FaSearch } from "react-icons/fa";
const FindJobs = () => {
  return (
    <>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between pt-[0px] pb-[0px]">
            <div className="w-6/12 justify-items-center mt-20">
              <span className="text-[black]">Find Job</span>
              <p className="paragraph"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between items-center">
            <div className="w-full flex gap-5 items-center">
              <div className="w-[50px] mr-[11%]"></div>

              <div className="relative max-w-[773px] w-full">
                <FaSearch className="absolute -translate-y-2/4 text-purple-700 left-2.5 top-2/4" />
                <input
                  className="w-full border rounded pl-[50px] pr-2.5 py-2.5 border border-jobportal-pink focus:outline-none focus:ring focus:ring-1 focus:ring-jobportal-pink"
                  type="text"
                  placeholder=" Search by: Job title, Position, Keyword..."
                />
              </div>
              <div className="flex gap-2.5">
                <a
                  href="http://localhost:5000/admin/login"
                  className="px-3 py-[7px] border border-solid border-jobportal-pink bg-jobportal-pink text-white rounded hover:bg-fuchsia-700"
                >
                  FindJob
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="flex justify-center space-x-4">
        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Technical Support Specialist
            </h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              PART-TIME
            </span>
            <span className="text-gray-500 text-sm">
              Salary: $20,000 - $25,000
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Google Inc."
              className="w-10 h-10"
            />
            <div className="text-sm">
              <div className="font-medium">Google Inc.</div>
              <div className="text-gray-500">Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Senior Frontend Engineer</h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              PART-TIME
            </span>
            <span className="text-gray-500 text-sm">
              Salary: $20,000 - $25,000
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Google Inc."
              className="w-10 h-10"
            />
            <div className="text-sm">
              <div className="font-medium">Google Inc.</div>
              <div className="text-gray-500">Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Software Engineer</h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              PART-TIME
            </span>
            <span className="text-gray-500 text-sm">
              Salary: $20,000 - $25,000
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Google Inc."
              className="w-10 h-10"
            />
            <div className="text-sm">
              <div className="font-medium">Google Inc.</div>
              <div className="text-gray-500">Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Software Developer</h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              PART-TIME
            </span>
            <span className="text-gray-500 text-sm">
              Salary: $20,000 - $25,000
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Google Inc."
              className="w-10 h-10"
            />
            <div className="text-sm">
              <div className="font-medium">Google Inc.</div>
              <div className="text-gray-500">Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default FindJobs;
