import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import money from "./img/money.svg";
import benefit from "./img/benefit.svg";
import { FaSearch } from "react-icons/fa";

const Salary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/find-jobs?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between pt-[100px] pb-[70px]">
            <div className="w-6/12 justify-items-center mt-20">
              <span className="text-jobportal-pink">Salary</span>
              <p className="paragraph">
                A salary is a fixed regular payment that an employee receives
                from an employer in exchange for their work. It is usually
                expressed annually but paid monthly or biweekly, and remains
                constant regardless of hours worked, offering financial
                stability and predictability.
              </p>
            </div>
            <div className="w-[28%]">
              <img src={benefit} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="flex justify-between flex-row-reverse pt-[100px] pb-[70px]">
          <div className="w-6/12 justify-items-center mt-20">
            <span className="text-jobportal-pink">
              Are you getting paid enough ?
            </span>
            <p className="paragraph">
              Determining if you are getting paid enough involves comparing your
              salary to industry standards, considering your experience,
              education, and location. Evaluate your compensation against
              similar roles and check if it meets your financial needs and
              career expectations.
            </p>
          </div>
          <div className="w-[28%]">
            <img src={money} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f2f4] mt-[100px]">
        <h2 className="text-jobportal-pink font-400 text-xl text-center pt-[50px]">
          Search Below, You Have New Opportunities
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="flex items-center border rounded w-full max-w-[600px] p-[5px] border-solid border-[#ccc]">
            <form
              onSubmit={handleFormSubmit}
              className="flex items-center w-full"
            >
              <button type="submit">
                <FaSearch className="text-[1.2rem] mx-2.5 my-0 text-[purple]" />
              </button>
              <input
                value={searchQuery}
                onChange={handleQueryChange}
                type="text"
                className="flex-1 w-full text-base shadow-none p-[5px] border-none outline-none focus:outline-none focus:border-none focus:ring-0 ring-0 bg-[#f1f2f4]"
                placeholder="Search jobs by title or keyword"
              />
            </form>
          </div>
          <button
            onClick={handleFormSubmit}
            className="bg-jobportal-pink text-[white] rounded cursor-pointer text-base ml-2.5 px-4 py-2.5 border-[none] hover:bg-[#b3009a] active:bg-[#80006d]"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center my-3">
          <span className="text-base text-[#5e6670]">
            Suggestions: Designer, Web Developer, Video Editor
          </span>
        </div>
      </div>
    </>
  );
};

export default Salary;
