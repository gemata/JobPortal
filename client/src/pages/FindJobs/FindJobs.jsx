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
              <div className="text-gray-500">Prishtine, Kosove</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Senior Frontend Engineer</h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              FULL-TIME
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
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              FULL-TIME
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
              <path fill="#F25022" d="M23 23H3V3h20v20z" />
              <path fill="#7FBA00" d="M45 23H25V3h20v20z" />
              <path fill="#00A4EF" d="M23 45H3V25h20v20z" />
              <path fill="#FFB900" d="M45 45H25V25h20v20z" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Microsoft Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Senior Frontend Engineer</h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              FULL-TIME
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
              <path fill="#F25022" d="M23 23H3V3h20v20z" />
              <path fill="#7FBA00" d="M45 23H25V3h20v20z" />
              <path fill="#00A4EF" d="M23 45H3V25h20v20z" />
              <path fill="#FFB900" d="M45 45H25V25h20v20z" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Microsoft Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              <path fill="#F25022" d="M23 23H3V3h20v20z" />
              <path fill="#7FBA00" d="M45 23H25V3h20v20z" />
              <path fill="#00A4EF" d="M23 45H3V25h20v20z" />
              <path fill="#FFB900" d="M45 45H25V25h20v20z" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Microsoft Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              <path fill="#F25022" d="M23 23H3V3h20v20z" />
              <path fill="#7FBA00" d="M45 23H25V3h20v20z" />
              <path fill="#00A4EF" d="M23 45H3V25h20v20z" />
              <path fill="#FFB900" d="M45 45H25V25h20v20z" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Microsoft Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 24 24"
              width="40px"
              height="40px"
            >
              <path
                fill="#1877F2"
                d="M22.676 0H1.325C.594 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82V14.708h-3.39v-3.635h3.39V8.415c0-3.357 2.063-5.186 5.069-5.186 1.44 0 2.68.107 3.041.155v3.52l-2.086.001c-1.635 0-1.951.777-1.951 1.918v2.513h3.897l-.508 3.635h-3.389V24h6.675C23.406 24 24 23.406 24 22.676V1.325C24 .594 23.406 0 22.676 0z"
              />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Facebook Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Senior Frontend Engineer</h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              FULL-TIME
            </span>
            <span className="text-gray-500 text-sm">
              Salary: $20,000 - $25,000
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40px"
              height="40px"
            >
              <path
                fill="#1877F2"
                d="M22.676 0H1.325C.594 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82V14.708h-3.39v-3.635h3.39V8.415c0-3.357 2.063-5.186 5.069-5.186 1.44 0 2.68.107 3.041.155v3.52l-2.086.001c-1.635 0-1.951.777-1.951 1.918v2.513h3.897l-.508 3.635h-3.389V24h6.675C23.406 24 24 23.406 24 22.676V1.325C24 .594 23.406 0 22.676 0z"
              />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Facebook Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 24 24"
              width="40px"
              height="40px"
            >
              <path
                fill="#1877F2"
                d="M22.676 0H1.325C.594 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82V14.708h-3.39v-3.635h3.39V8.415c0-3.357 2.063-5.186 5.069-5.186 1.44 0 2.68.107 3.041.155v3.52l-2.086.001c-1.635 0-1.951.777-1.951 1.918v2.513h3.897l-.508 3.635h-3.389V24h6.675C23.406 24 24 23.406 24 22.676V1.325C24 .594 23.406 0 22.676 0z"
              />
            </svg>
            <div className="text-sm">
              <div className="font-medium">Facebook Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col space-y-2 max-w-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Software Developer</h3>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              FULL-TIME
            </span>
            <span className="text-gray-500 text-sm">
              Salary: $20,000 - $25,000
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40px"
              height="40px"
            >
              <path
                fill="#1877F2"
                d="M22.676 0H1.325C.594 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82V14.708h-3.39v-3.635h3.39V8.415c0-3.357 2.063-5.186 5.069-5.186 1.44 0 2.68.107 3.041.155v3.52l-2.086.001c-1.635 0-1.951.777-1.951 1.918v2.513h3.897l-.508 3.635h-3.389V24h6.675C23.406 24 24 23.406 24 22.676V1.325C24 .594 23.406 0 22.676 0z"
              />
            </svg>
            <div className="text-sm">
              <div className="font-medium">Facebook Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                fill="#000000"
                d="M16.691 13.72c-.038-3.118 2.556-4.633 2.667-4.691-1.456-2.124-3.724-2.413-4.533-2.454-1.924-.195-3.747 1.116-4.727 1.116-.98 0-2.497-1.091-4.1-1.062-2.11.033-4.053 1.244-5.144 3.156-2.198 3.801-.56 9.428 1.568 12.52 1.038 1.488 2.271 3.156 3.888 3.093 1.569-.066 2.158-.992 4.068-.992 1.91 0 2.447.992 4.068.96 1.706-.032 2.779-1.517 3.804-3.015 1.199-1.759 1.695-3.469 1.726-3.556-.038-.015-3.273-1.246-3.311-4.964zM15.211 3.466c.847-1.031 1.415-2.468 1.255-3.907-1.215.054-2.681.805-3.563 1.804-.787.914-1.479 2.361-1.295 3.748 1.369.105 2.732-.694 3.603-1.645z"
              />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Google Inc.</div>
              <div className="text-gray-500">Apple, Kosove</div>
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
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                fill="#000000"
                d="M16.691 13.72c-.038-3.118 2.556-4.633 2.667-4.691-1.456-2.124-3.724-2.413-4.533-2.454-1.924-.195-3.747 1.116-4.727 1.116-.98 0-2.497-1.091-4.1-1.062-2.11.033-4.053 1.244-5.144 3.156-2.198 3.801-.56 9.428 1.568 12.52 1.038 1.488 2.271 3.156 3.888 3.093 1.569-.066 2.158-.992 4.068-.992 1.91 0 2.447.992 4.068.96 1.706-.032 2.779-1.517 3.804-3.015 1.199-1.759 1.695-3.469 1.726-3.556-.038-.015-3.273-1.246-3.311-4.964zM15.211 3.466c.847-1.031 1.415-2.468 1.255-3.907-1.215.054-2.681.805-3.563 1.804-.787.914-1.479 2.361-1.295 3.748 1.369.105 2.732-.694 3.603-1.645z"
              />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Apple Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                fill="#000000"
                d="M16.691 13.72c-.038-3.118 2.556-4.633 2.667-4.691-1.456-2.124-3.724-2.413-4.533-2.454-1.924-.195-3.747 1.116-4.727 1.116-.98 0-2.497-1.091-4.1-1.062-2.11.033-4.053 1.244-5.144 3.156-2.198 3.801-.56 9.428 1.568 12.52 1.038 1.488 2.271 3.156 3.888 3.093 1.569-.066 2.158-.992 4.068-.992 1.91 0 2.447.992 4.068.96 1.706-.032 2.779-1.517 3.804-3.015 1.199-1.759 1.695-3.469 1.726-3.556-.038-.015-3.273-1.246-3.311-4.964zM15.211 3.466c.847-1.031 1.415-2.468 1.255-3.907-1.215.054-2.681.805-3.563 1.804-.787.914-1.479 2.361-1.295 3.748 1.369.105 2.732-.694 3.603-1.645z"
              />
            </svg>
            <div className="text-sm">
              <div className="font-medium">Apple Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                fill="#000000"
                d="M16.691 13.72c-.038-3.118 2.556-4.633 2.667-4.691-1.456-2.124-3.724-2.413-4.533-2.454-1.924-.195-3.747 1.116-4.727 1.116-.98 0-2.497-1.091-4.1-1.062-2.11.033-4.053 1.244-5.144 3.156-2.198 3.801-.56 9.428 1.568 12.52 1.038 1.488 2.271 3.156 3.888 3.093 1.569-.066 2.158-.992 4.068-.992 1.91 0 2.447.992 4.068.96 1.706-.032 2.779-1.517 3.804-3.015 1.199-1.759 1.695-3.469 1.726-3.556-.038-.015-3.273-1.246-3.311-4.964zM15.211 3.466c.847-1.031 1.415-2.468 1.255-3.907-1.215.054-2.681.805-3.563 1.804-.787.914-1.479 2.361-1.295 3.748 1.369.105 2.732-.694 3.603-1.645z"
              />
            </svg>
            <div className="text-sm">
              <div className="font-medium">Apple Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 169.063 169.063"
              width="40px"
              height="40px"
            >
              <linearGradient
                id="a"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#a)"
                d="M84.531 0C37.826 0 0 37.826 0 84.531s37.826 84.532 84.531 84.532 84.532-37.826 84.532-84.532S131.237 0 84.531 0zm50.144 112.584c-.6 13.381-11.511 24.292-24.892 24.892-11.477.518-45.969.518-57.445 0-13.381-.6-24.292-11.511-24.892-24.892-.518-11.477-.518-45.969 0-57.445.6-13.381 11.511-24.292 24.892-24.892 11.477-.518 45.969-.518 57.445 0 13.381.6 24.292 11.511 24.892 24.892.518 11.477.518 45.969 0 57.445z"
              />
              <linearGradient
                id="b"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#b)"
                d="M84.531 41.528c-23.77 0-43.003 19.233-43.003 43.003s19.233 43.003 43.003 43.003 43.003-19.233 43.003-43.003-19.233-43.003-43.003-43.003zm0 71.132c-15.527 0-28.129-12.602-28.129-28.129S69.004 56.402 84.531 56.402s28.129 12.602 28.129 28.129-12.602 28.129-28.129 28.129z"
              />
              <linearGradient
                id="c"
                x1="125.47"
                x2="125.47"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <circle fill="url(#c)" cx="125.47" cy="43.752" r="9.576" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Instagram Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 169.063 169.063"
              width="40px"
              height="40px"
            >
              <linearGradient
                id="a"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#a)"
                d="M84.531 0C37.826 0 0 37.826 0 84.531s37.826 84.532 84.531 84.532 84.532-37.826 84.532-84.532S131.237 0 84.531 0zm50.144 112.584c-.6 13.381-11.511 24.292-24.892 24.892-11.477.518-45.969.518-57.445 0-13.381-.6-24.292-11.511-24.892-24.892-.518-11.477-.518-45.969 0-57.445.6-13.381 11.511-24.292 24.892-24.892 11.477-.518 45.969-.518 57.445 0 13.381.6 24.292 11.511 24.892 24.892.518 11.477.518 45.969 0 57.445z"
              />
              <linearGradient
                id="b"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#b)"
                d="M84.531 41.528c-23.77 0-43.003 19.233-43.003 43.003s19.233 43.003 43.003 43.003 43.003-19.233 43.003-43.003-19.233-43.003-43.003-43.003zm0 71.132c-15.527 0-28.129-12.602-28.129-28.129S69.004 56.402 84.531 56.402s28.129 12.602 28.129 28.129-12.602 28.129-28.129 28.129z"
              />
              <linearGradient
                id="c"
                x1="125.47"
                x2="125.47"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <circle fill="url(#c)" cx="125.47" cy="43.752" r="9.576" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Instagram Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 169.063 169.063"
              width="40px"
              height="40px"
            >
              <linearGradient
                id="a"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#a)"
                d="M84.531 0C37.826 0 0 37.826 0 84.531s37.826 84.532 84.531 84.532 84.532-37.826 84.532-84.532S131.237 0 84.531 0zm50.144 112.584c-.6 13.381-11.511 24.292-24.892 24.892-11.477.518-45.969.518-57.445 0-13.381-.6-24.292-11.511-24.892-24.892-.518-11.477-.518-45.969 0-57.445.6-13.381 11.511-24.292 24.892-24.892 11.477-.518 45.969-.518 57.445 0 13.381.6 24.292 11.511 24.892 24.892.518 11.477.518 45.969 0 57.445z"
              />
              <linearGradient
                id="b"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#b)"
                d="M84.531 41.528c-23.77 0-43.003 19.233-43.003 43.003s19.233 43.003 43.003 43.003 43.003-19.233 43.003-43.003-19.233-43.003-43.003-43.003zm0 71.132c-15.527 0-28.129-12.602-28.129-28.129S69.004 56.402 84.531 56.402s28.129 12.602 28.129 28.129-12.602 28.129-28.129 28.129z"
              />
              <linearGradient
                id="c"
                x1="125.47"
                x2="125.47"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <circle fill="url(#c)" cx="125.47" cy="43.752" r="9.576" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Instagram Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
              viewBox="0 0 169.063 169.063"
              width="40px"
              height="40px"
            >
              <linearGradient
                id="a"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#a)"
                d="M84.531 0C37.826 0 0 37.826 0 84.531s37.826 84.532 84.531 84.532 84.532-37.826 84.532-84.532S131.237 0 84.531 0zm50.144 112.584c-.6 13.381-11.511 24.292-24.892 24.892-11.477.518-45.969.518-57.445 0-13.381-.6-24.292-11.511-24.892-24.892-.518-11.477-.518-45.969 0-57.445.6-13.381 11.511-24.292 24.892-24.892 11.477-.518 45.969-.518 57.445 0 13.381.6 24.292 11.511 24.892 24.892.518 11.477.518 45.969 0 57.445z"
              />
              <linearGradient
                id="b"
                x1="84.531"
                x2="84.531"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <path
                fill="url(#b)"
                d="M84.531 41.528c-23.77 0-43.003 19.233-43.003 43.003s19.233 43.003 43.003 43.003 43.003-19.233 43.003-43.003-19.233-43.003-43.003-43.003zm0 71.132c-15.527 0-28.129-12.602-28.129-28.129S69.004 56.402 84.531 56.402s28.129 12.602 28.129 28.129-12.602 28.129-28.129 28.129z"
              />
              <linearGradient
                id="c"
                x1="125.47"
                x2="125.47"
                y1="0"
                y2="169.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f09433" />
                <stop offset="0.3" stop-color="#e6683c" />
                <stop offset="0.6" stop-color="#dc2743" />
                <stop offset="1" stop-color="#cc2366" />
                <stop offset="1" stop-color="#bc1888" />
              </linearGradient>
              <circle fill="url(#c)" cx="125.47" cy="43.752" r="9.576" />
            </svg>

            <div className="text-sm">
              <div className="font-medium">Instagram Inc.</div>
              <div className="text-gray-500">Prishtine, Kosove</div>
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
