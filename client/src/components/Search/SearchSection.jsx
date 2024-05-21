import React from "react";
// import "./style.css";

const SearchSection = () => {
  return (
    <div className="mt-[-27px]">
      <div className="bg-[#230939]">
        <div className="container">
          <h1 className="text-[40px] font-[bold] flex ml-[25px] pt-[50px]">
            <span className="text-[#c1baeb]">Find the </span>
            <span className="px-3"> right </span>
            <span className="text-[#c1baeb]"> fit.</span>
          </h1>
          <div className="search-bar">
            <input
              className="w-[90%] rounded p-6 border-[medium]"
              type="text"
              placeholder="search"
            />
          </div>
          <span className="text-[white]">
            <a href="#">Upload your resume</a> - Get noticed by top employers
          </span>
        </div>
        <div className="pt-10 pb-[60px]">
          <h3 className="text-[white] text-left ml-[97px] pb-[15px]">
            Popular searches
          </h3>
          <ul className="flex overflow-hidden ml-[97px]">
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Work from home
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Part-Time
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Customer Service
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Data Analyst
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Delivery Driver
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Engineering
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                IT
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Marketing
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Medical
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Nurse
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Project Manager
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Sales
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Warehouse
              </a>
            </li>
            <li className="font-normal text-base text-[white] leading-6">
              <a
                href=""
                className="inline-flex justify-center items-center rounded font-normal text-lg text-[white] leading-none ml-0 mr-2 mt-0 mb-2 pl-3 pr-5 py-2.5 border-2 border-solid"
              >
                Welder
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

/*
  <div className="bg-jobportal-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-200">Find the </span>
          <span className="text-white"> right </span>
          <span className="text-purple-200">fit.</span>
        </h1>
        <div className="mt-4 w-3/4 mx-auto">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="search"
          />
        </div>
        <span className="text-white block text-center mt-4">
          <a href="/" className="text-white">
            Upload your resume
          </a>{" "}
          - Get noticed by top employers
        </span>
      </div>
    </div>
*/
