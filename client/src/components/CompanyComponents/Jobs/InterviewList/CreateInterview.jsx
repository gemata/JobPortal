import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import illustration from '../../../../img/Illustration.svg';
import DOMPurify from 'dompurify';
import SignInPrompt from '../../../SignInPrompt';
import DashboardNavSection from '../../DashboardNavSection';


const CreateInterview = ({ userData }) => {
  const { id } = useParams();
  const [interviewMethod, setInterviewMethod] = useState("");
  const [interviewDetails, setInterviewDetails] = useState("");
  const [locationOrLink, setLocationOrLink] = useState("");
  const [interviewDateTime, setInterviewDateTime] = useState("");
  const navigate = useNavigate();

  const handleInterviewMethodChange = (e) => {
    setInterviewMethod(e.target.value);
  };

  const handleLocationOrLinkChange = (e) => {
    setLocationOrLink(e.target.value);
  };

  const handleInterviewDateTimeChange = (e) => {
    setInterviewDateTime(e.target.value);
  };

  const handleInterviewDetailsChange = (value) => {
    setInterviewDetails(value);
  };

  return (
    <>
      <div className="bg-gray-100">
        <DashboardNavSection />
        {userData.length !== 0 && userData.role === "Company" ? (
          <>
            <div className="companyJobsCreate bg-gray-100">
              <div className="max-w-[1200px] mx-auto items-center pt-5">
                <div className="flex flex-col gap-5">
                  <div className="bg-white w-full rounded-xl flex justify-between p-8 items-center h-48 overflow-hidden">
                    <h1 className="text-3xl font-semibold">Create Interview</h1>
                    <img className="h-[300px]" src={illustration} alt="missing banner" />
                  </div>
                  <form className="space-y-4 p-8 rounded-xl bg-white">
                    <label className="float-left" htmlFor="interviewMethod">
                      Interview Method
                    </label>
                    <select
                      name="interviewMethod"
                      value={interviewMethod}
                      onChange={handleInterviewMethodChange}
                      className="w-full p-3 px-5 rounded">
                      <option value="">Select Interview Method</option>
                      <option value="Online">Online</option>
                      <option value="In Person">In Person</option>
                    </select>

                    {interviewMethod === "Online" ? (
                      <>
                        <label className="float-left" htmlFor="onlineLink">
                          Online Link
                        </label>
                        <input
                          type="text"
                          name="onlineLink"
                          value={locationOrLink}
                          onChange={handleLocationOrLinkChange}
                          className="w-full p-3 px-5 rounded"
                          placeholder="Enter the link to the online interview (e.g., Google Meet)"
                        />
                      </>
                    ) : interviewMethod === "In Person" ? (
                      <>
                        <label className="float-left" htmlFor="address">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={locationOrLink}
                          onChange={handleLocationOrLinkChange}
                          className="w-full p-3 px-5 rounded"
                          placeholder="Enter the address for the interview"
                        />
                      </>
                    ) : null}

                    <label className="float-left" htmlFor="interviewDateTime">
                      Schedule Interview
                    </label>
                    <input
                      type="datetime-local"
                      name="interviewDateTime"
                      value={interviewDateTime}
                      onChange={handleInterviewDateTimeChange}
                      className="w-full p-3 px-5 rounded"
                    />

                    <label className="float-left" htmlFor="interviewDetails">
                      Interview Details
                    </label>
                    <ReactQuill
                      value={interviewDetails}
                      onChange={handleInterviewDetailsChange}
                      className="w-full rounded focus:outline-none pt-10 focus:ring-2 focus:ring-jobportal-pink"
                      placeholder="A few details to show your applicants..."
                      modules={{
                        toolbar: [
                          [{ header: "1" }, { header: "2" }, { font: [] }],
                          [{ size: [] }],
                          [
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "blockquote",
                          ],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["clean"],
                        ],
                      }}
                    />
                  </form>
                  <div className="flex justify-between pb-5">
                    <Link
                      to={`/company/applicantlist/${id}`}
                      className="flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
                      {/* Left Arrow SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                      Cancel
                    </Link>
                    <button
                      type="button"
                      className="flex items-center gap-3 rounded-md bg-jobportal-pink px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
                      Create Interview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <SignInPrompt />
        )}
      </div>
    </>
  );
};

export default CreateInterview;