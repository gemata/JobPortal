import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import illustration from "../../../../img/Illustration.svg";
import DOMPurify from "dompurify";
import SignInPrompt from "../../../SignInPrompt";
import DashboardNavSection from "../../DashboardNavSection";


const CreateInterview = ({ userData }) => {
  const { id } = useParams();
  const [interviewMethod, setInterviewMethod] = useState("");
  const [interviewDetails, setInterviewDetails] = useState("");
  const [locationOrLink, setLocationOrLink] = useState("");
  const [interviewDateTime, setInterviewDateTime] = useState("");

  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');
  const [address, setAddress] = useState('');
  const [onlineLink, setOnlineLink] = useState('');

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleInterviewMethodChange = (e) => {
    setInterviewMethod(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);

  };

  const handleOnlineLinkChange = (e) => {
    setOnlineLink(e.target.value);

  };


  const handleLocationOrLinkChange = (e) => {
    setLocationOrLink(e.target.value);
    switch (e.target.value) {
      case 'Online':
        setAddress(null);
        setOnlineLink(e.target.value);
        break;

        case 'In Person':
          setOnlineLink(null);
          setAddress(e.target.value);
        break;
    
      default:
        break;
    }
  };



  const handleInterviewDetailsChange = (value) => {
    setInterviewDetails(value);
  };

  const handleDateChange = (event) => {
    setInterviewDate(event.target.value);
    handleInterviewDateTimeMerge();
  };
  
  const handleTimeChange = (event) => {
    setInterviewTime(event.target.value);
    handleInterviewDateTimeMerge();
  };

  const handleInterviewDateTimeMerge = () => {
    // Check if both date and time are available
    if (interviewDate && interviewTime) {
      // Combine date and time using Moment.js (recommended)
       const combinedDateTime = `${interviewDate}T${interviewTime}`;
       setInterviewDateTime(combinedDateTime);
       return combinedDateTime;
    } else {
      
      console.warn('Both date and time are required to create a datetime value.');
      return;
    }
  };
  

  const handleFormSubmit = async () => {
    const sanitizedJobDetails = DOMPurify.sanitize(interviewDetails);
    if (interviewDate === '' || interviewDate === null || interviewTime === '' || interviewTime == null) {
      setErrorMessage('Date or Time Missing.');
      return
    }

    const combinedDateTime = `${interviewDate}T${interviewTime}:00`;

    const requestBody = {
        interviewMethod: interviewMethod,
        address: address,
        onlineLink: onlineLink,
        time: combinedDateTime,
        interviewDetails: sanitizedJobDetails,
    };

    for (const [key, value] of Object.entries(requestBody)) {
        // Skip address and onlineLink for separate validation
        if (key === 'address' || key === 'onlineLink') {
            continue;
        }

        // Check for null or empty values in other fields
        if (value === null || value === "") {
            setErrorMessage(`Field is missing: ${key}`);
            return;
        }
    }

    setInterviewMethod("");
    setInterviewDetails("");
    setLocationOrLink("");
    setInterviewDateTime("");

    try {
        const response = await fetch(
            `http://localhost:5000/api/interviewlists/fromselectedapplicants/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            }
        );

        const responseData = await response.text(); // Read raw text
        console.log('Raw response data:', responseData);

        if (!response.ok) {
            console.error("Error:", responseData);
            setSuccessMessage("");
            setErrorMessage("Error: " + responseData);
        } else {
            const jsonResponse = JSON.parse(responseData); // Parse JSON only if response is okay
            setErrorMessage("");
            setSuccessMessage("Interview created successfully.");
            setTimeout(() => {
                navigate("/company/dashboard");
            }, 1000);
        }
    } catch (error) {
        console.error("Fetch error:", error);
        setErrorMessage("Fetch error: " + error.message);
    }
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
                    <img
                      className="h-[300px]"
                      src={illustration}
                      alt="missing banner"
                    />
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
                          value={onlineLink}
                          onChange={handleOnlineLinkChange}
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
                          value={address}
                          onChange={handleAddressChange}
                          className="w-full p-3 px-5 rounded"
                          placeholder="Enter the address for the interview"
                        />
                      </>
                    ) : null}

                    <label className="float-left" htmlFor="interviewDateTime">
                      Set Scheduled Date
                    </label>
                    <input
                      type='date'
                      name="interviewDate"
                      value={interviewDate}
                      onChange={handleDateChange}
                      className="w-full p-3 px-5 rounded"
                    />

                    <label className="float-left" htmlFor="interviewDateTime">
                      Set Scheduled Time
                    </label>
                    <input
                      type='time'
                      name="interviewTime"
                      value={interviewTime}
                      onChange={handleTimeChange}
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
                    {successMessage ? (
                      <section className="resetPassword__form-message-container resetPassword__form-success rounded-lg">
                        <div className="resetPassword__form-message">
                          <section>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </span>
                            <div>{successMessage}</div>
                          </section>
                        </div>
                      </section>
                    ) : (
                      <></>
                    )}
                    {errorMessage ? (
                      <section className="resetPassword__form-message-container resetPassword__form-error rounded-lg">
                        <div className="resetPassword__form-message">
                          <section>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                              </svg>
                            </span>
                            <div>{errorMessage}</div>
                          </section>
                        </div>
                      </section>
                    ) : (
                      <></>
                    )}
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
                      onClick={handleFormSubmit}
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
