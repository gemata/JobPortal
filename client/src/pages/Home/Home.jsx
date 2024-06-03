import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import illustration from "../../img/Illustration.svg";
import userSVG from "../../img/user.svg";
import cloudSVG from "../../img/uploadCloud.svg";
import searchSVG from "../../img/search.svg";
import checkBadgeSVG from "../../img/checkBadge.svg";
import categoryImage1 from "../../img/category1.svg";
import categoryImage2 from "../../img/category2.svg";
import categoryImage3 from "../../img/category3.svg";
import categoryImage4 from "../../img/category4.svg";
import categoryImage5 from "../../img/category5.svg";
import categoryImage6 from "../../img/category6.svg";
import categoryImage7 from "../../img/category7.svg";
import categoryImage8 from "../../img/category8.svg";
import TestimonialCard from "../../components/HomePageComponents/TestimonialCard";
import EmpCard from "../../components/HomePageComponents/EmpCard";

const categoryData = [
  { name: "Graphics & Design", positions: 357, image: categoryImage1 },
  { name: "Code & Programing", positions: 312, image: categoryImage2 },
  { name: "Digital Marketing", positions: 297, image: categoryImage3 },
  { name: "Video & Animation", positions: 247, image: categoryImage4 },
  { name: "Music & Audio", positions: 204, image: categoryImage5 },
  { name: "Account & Finance", positions: 167, image: categoryImage6 },
  { name: "Health & Care", positions: 125, image: categoryImage7 },
  { name: "Data & Science", positions: 57, image: categoryImage8 },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/find-jobs?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/companies");
        const data = await response.json();
        // Assuming `data` contains a `rows` array with company objects
        const sortedCompanies = data.rows
          .sort((a, b) => (b.jobPostCount || 0) - (a.jobPostCount || 0)) // Assuming `jobPostCount` is the number of jobs posted
          .slice(0, 8); // Get top 8 companies

        setCompanies(sortedCompanies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        const data = await response.json();
        // Sort testimonials by rating in descending order and take the top 3
        const topTestimonials = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
        setTestimonials(topTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchCompanies();
    fetchTestimonials();
  }, []);

  return (
    <>
      <div className="bg-[#f1f2f4] py-[100px]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-section">
              <h1 className="font-semibold text-[50px] leading-[1.2]">
                Find a job that matches{" "}
                <span className="block mb-7 p-0">
                  your interests and skills.
                </span>
              </h1>
              <span className="text-base text-[#5e6670]">
                We aim to provide a platform where individuals can{" "}
                <span className="block leading-[0.8] text-base m-0 p-0">
                  explore opportunities tailored to their strengths and
                  passions.
                </span>
              </span>

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
                <button className="bg-jobportal-pink text-[white] rounded cursor-pointer text-base ml-2.5 px-4 py-2.5 border-[none] hover:bg-[#b3009a] active:bg-[#80006d]">
                  Search
                </button>
              </div>
              <span className="text-base text-[#5e6670]">
                Suggestions: Designer, Web Developer, Video Editor
              </span>
            </div>
            <div className="image-section hidden md:block">
              <img src={illustration} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="font-medium text-[42px] mb-10">
            Most Popular Vacancies
          </div>
          <div className="flex justify-between gap-3">
            <div className="box-1">
              <span>Anesthsiologists</span> <br />
              <span className="text-base text-[#949ba4]">
                45,070 Open Positions
              </span>{" "}
              <br /> <br />
              <span>Maxillofacial Surgeons</span>
              <br />
              <span className="text-base text-[#949ba4]">
                74,875 Open Positions
              </span>{" "}
              <br /> <br />
              <span>Financial Manager</span>
              <br />
              <span className="text-base text-[#949ba4]">
                61,391 Open Positions
              </span>
              <br /> <br />
            </div>
            <div className="box-2">
              <span>Surgeons</span> <br />
              <span className="text-base text-[#949ba4]">
                50,364 Open Positions
              </span>{" "}
              <br /> <br />
              <span>Software Developer</span> <br />
              <span className="text-base text-[#949ba4]">
                43,359 Open Positions
              </span>
              <br />
              <br />
              <span>Management Analysis</span> <br />
              <span className="text-base text-[#949ba4]">
                93,046 Open Positions
              </span>
            </div>
            <div className="box-3">
              <span>Dentist</span> <br />
              <span className="text-base text-[#949ba4]">
                12,365 Open Positions
              </span>
              <br />
              <br />
              <span>IT Manager</span> <br />
              <span className="text-base text-[#949ba4]">
                22,180 Open Positions
              </span>
              <br /> <br />
              <span>Data Scientist</span>
              <br />
              <span className="text-base text-[#949ba4]">
                35,670 Open Positions
              </span>
            </div>
            <div className="box-4">
              <span>Video Editor</span> <br />
              <span className="text-base text-[#949ba4]">
                61,310 Open Positions
              </span>
              <br /> <br />
              <span>Operations Research Analysis</span> <br />
              <span className="text-base text-[#949ba4]">
                8,288 Open Positions
              </span>
              <br /> <br />
              <span>DevOps Engineer</span> <br />
              <span className="text-base text-[#949ba4]">
                52,422 Open Positions
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f2f4] mt-[100px]">
        <div className="font-medium text-[42px] text-center mb-[100px] pt-[100px]">
          How does job-pilot work ?
        </div>
        <div className="px-6 md:px-0 pb-[100px] flex flex-col md:flex-row justify-center gap-5">
          <div className="rounded-xl up-arrow flex flex-col items-center py-6">
            <div
              className="p-5 bg-white aspect-square w-20  rounded-full"
              style={{ zIndex: 100 }}
            >
              <img src={userSVG} />
            </div>
            <h3 className="text-lg font-semibold mt-5">Create account</h3>
            <p className="w-10/12 leading-5 text-center mt-3 text-gray-500">
              Sign up and unlock countless job opportunities!
            </p>
          </div>

          <div className="rounded-xl down-arrow bg-white flex flex-col items-center py-6">
            <div
              className="p-5 bg-jobportal-pink aspect-square w-20  rounded-full"
              style={{ zIndex: 100 }}
            >
              <img src={cloudSVG} />
            </div>
            <h3 className="text-lg font-semibold mt-5">Upload CV/Resume</h3>
            <p className="w-10/12 leading-5 text-center mt-3 text-gray-500">
              Share your resume and let employers find you.
            </p>
          </div>
          <div className="rounded-xl up-arrow flex flex-col items-center py-6">
            <div
              className="p-6 bg-white aspect-square w-20  rounded-full"
              style={{ zIndex: 100 }}
            >
              <img src={searchSVG} />
            </div>
            <h3 className="text-lg font-semibold mt-5">Find suitable job</h3>
            <p className="w-10/12 leading-5 text-center mt-3 text-gray-500">
              Browse and discover your ideal job in minutes.
            </p>
          </div>
          <div className="rounded-xl flex flex-col items-center py-6">
            <div
              className="p-5 bg-white aspect-square w-20  rounded-full"
              style={{ zIndex: 100 }}
            >
              <img src={checkBadgeSVG} />
            </div>
            <h3 className="text-lg font-semibold mt-5">Apply to job</h3>
            <p className="w-10/12 leading-5 text-center mt-3 text-gray-500">
              Apply with a click and take the next career step.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="font-medium text-[42px] mb-[100px] pt-[100px]">
            <h2>Popular Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.map((category) => (
              <div
                key={category.name}
                className="flex items-center p-4 bg-purple-50 rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-semibold">{category.name}</div>
                  <div className="text-sm text-gray-600">
                    {category.positions} Open position
                    {category.positions > 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="font-medium text-[42px] mb-[40px] mt-[100px]">
          <h2>Top companies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`http://localhost:5000/companyLogos/${company.CompanyLogo?.s3Key}`}
                  alt={company.CompanyName}
                  className="w-10 h-10 object-contain object-center rounded-full mr-4"
                />
                <div>
                  <div className="text-lg font-semibold">
                    {company.CompanyName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {company.location}
                  </div>
                </div>
                {company.featured && (
                  <div className="ml-auto text-xs text-red-500 bg-red-100 py-1 px-2 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-purple-100 text-fuchsia-700 font-medium rounded-md hover:bg-purple-200 transition-colors duration-300">
                  Open Position
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f1f2f4] mt-[100px] py-[50px]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px]">
          <div className="font-medium text-[42px] text-center mb-[50px]">
            <h2>Clients Testimonial</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      <EmpCard />
    </>
  );
};

export default Home;
