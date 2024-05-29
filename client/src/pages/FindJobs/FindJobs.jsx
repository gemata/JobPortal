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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Google Inc.</div>
              <div className="text-gray-500">Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>
      </div>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Google Inc.</div>
              <div className="text-gray-500">Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>
      </div>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c1.67 0 3.24.38 4.68 1.06l6.91-6.91C31.12 1.51 27.7 0 24 0 14.53 0 6.67 5.82 3.34 14.27l7.74 6.02C12.86 13.01 18.05 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M47.84 24.56c0-1.68-.15-3.27-.43-4.82H24v9.13h13.58c-.58 3.07-2.29 5.65-4.89 7.39l7.75 6C45.88 38.07 47.84 31.79 47.84 24.56z"
              />
              <path
                fill="#FBBC05"
                d="M10.07 28.67a14.45 14.45 0 0 1-.75-4.67c0-1.63.27-3.22.75-4.67l-7.74-6.02C.78 16.44 0 20.13 0 24c0 3.87.78 7.56 2.07 10.68l7.75-6.01z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.89-2.15 15.85-5.83l-7.75-6c-2.17 1.45-4.88 2.32-8.1 2.32-5.95 0-11.14-3.51-13.42-8.52l-7.75 6C6.67 42.18 14.53 48 24 48z"
              />
            </svg>

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
      <br />
      <div class="flex items-center justify-center space-x-4">
        <button
          onclick="moveSlider(-1)"
          class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 focus:outline-none"
        >
          ←
        </button>
        <div id="slider" class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            1
          </div>
          <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            2
          </div>
          <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            3
          </div>
          <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            4
          </div>
          <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            5
          </div>
          <button
            onclick="moveSlider(-1)"
            class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 focus:outline-none"
          >
            →
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default FindJobs;
