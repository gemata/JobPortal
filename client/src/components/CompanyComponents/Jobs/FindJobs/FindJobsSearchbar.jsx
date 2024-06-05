import React, { useState, useEffect } from "react";
import NationalitySelect from "./NationalitySelect";

export default function FindJobsSearchbar({
  nationality,
  setNationality,
  workLocation,
  setWorkLocation,
  salaryFrom,
  setSalaryFrom,
  salaryTo,
  setSalaryTo,
  educationLevel,
  setEducationLevel,
  jobPositionFilter,
  setjobPositionFilter,
  companyFilter,
  setCompanyFilter,
  searchQuery,
  setSearchQuery,
  handleFormSubmit,
  jobOpened,
}) {
  const [jobPositions, setJobPositions] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleWorkLocationChange = (e) => {
    setWorkLocation(e.target.value);
  };

  const handleSalaryFromChange = (e) => {
    let value = e.target.value;
    if (!/^\d*$/.test(value)) {
      value = value.replace(/\D/g, "");
    }
    setSalaryFrom(value);
  };

  const handleSalaryToChange = (e) => {
    let value = e.target.value;
    if (!/^\d*$/.test(value)) {
      value = value.replace(/\D/g, "");
    }
    setSalaryTo(value);
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  const toggleBorgir = () => {
    const state = isMenuOpen;
    setIsMenuOpen(!state);
  };

  const handleCompanyFilterChange = (e) => {
    setCompanyFilter(e.target.value);
  };

  const handlejobPositionFilterChange = (e) => {
    setjobPositionFilter(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/jobPositions/")
      .then((response) => response.json())
      .then((data) => {
        setJobPositions(data.rows);
      })
      .catch((error) => console.error("Error fetching job fields:", error));

    fetch("http://localhost:5000/api/companies/")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data.rows);
      })
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  return (
    <>
      <div
        className={`${
          jobOpened ? "sticky top-0" : ""
        } bg-white shadow-lg w-full`}
      >
        <form
          onSubmit={handleFormSubmit}
          className="relative w-full max-w-[1200px] mx-auto px-5 py-5"
        >
          <div className="flex">
            <NationalitySelect
              nationality={nationality}
              setNationality={setNationality}
            />
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                value={searchQuery}
                onChange={handleQueryChange}
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-jobportal-pink focus:border-jobportal-pink"
                placeholder="Job Title, Keyword, Company..."
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-jobportal-pink rounded-e-lg border border-jobportal-pink hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-jobportal-pink"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
          <button
            onClick={toggleBorgir}
            className={`${jobOpened ? "block" : "hidden"} ${
              isMenuOpen ? "bg-ripple-gray" : "bg-ripple-pink"
            } transition-all active:bg-fuchsia-700 hover:opacity-70 w-full absolute bottom-0 left-0 h-3`}
            type="button"
          />
        </form>
        <div
          className={`${
            jobOpened
              ? isMenuOpen
                ? "h-auto py-5 absolute bg-white border-b shadow-lg"
                : "h-0 overflow-hidden"
              : "h-auto pb-5"
          } flex flex-wrap gap-3 w-full max-w-[1200px] mx-auto px-5`}
        >
          <select
            value={workLocation}
            onChange={handleWorkLocationChange}
            name="location"
            className="flex-shrink-0 z-10 flex-1 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-jobportal-pink focus:border-jobportal-pink focus:outline-none"
          >
            <option value="">Work Location</option>
            <option value="inPerson">In Person</option>
            <option value="online">Online / Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>

          <select
            value={educationLevel}
            onChange={handleEducationLevelChange}
            name="educationLevel"
            className="flex-shrink-0 z-10 flex-1 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-jobportal-pink focus:border-jobportal-pink focus:outline-none"
          >
            <option value="">Education Level</option>
            <option value="none">None needed</option>
            <option value="highschool">High School</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>

          <input
            type="number"
            value={salaryFrom}
            onChange={handleSalaryFromChange}
            name="location"
            placeholder="Salary From"
            className="flex-shrink-0 z-10 flex-1  py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-jobportal-pink focus:border-jobportal-pink focus:outline-none"
          />

          <input
            type="number"
            value={salaryTo}
            onChange={handleSalaryToChange}
            name="location"
            placeholder="Salary To"
            className="flex-shrink-0 z-10 flex-1  py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-jobportal-pink focus:border-jobportal-pink focus:outline-none"
          />

          <select
            value={jobPositionFilter}
            onChange={handlejobPositionFilterChange}
            name="jobPositions"
            className="flex-shrink-0 z-10 flex-1  inline-flex py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-jobportal-pink focus:border-jobportal-pink focus:outline-none"
          >
            <option value="">Job Position</option>
            {jobPositions.map((position) => (
              <option key={position.id} value={position.id}>
                {position.position}
              </option>
            ))}
          </select>

          <select
            value={companyFilter}
            onChange={handleCompanyFilterChange}
            name="companyList"
            className="flex-shrink-0 z-10 flex-1 inline-flex py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-jobportal-pink focus:border-jobportal-pink focus:outline-none"
          >
            <option value="">Company</option>
            {companies.map((company) => (
              <option key={company.ID} value={company.ID}>
                {company.CompanyName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
