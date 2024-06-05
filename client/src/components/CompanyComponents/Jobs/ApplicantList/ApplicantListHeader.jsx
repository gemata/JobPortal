import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantListItem from './ApplicantListItem';
import ApplicantListUserProfile from './ApplicantListUserProfile.jsx';

export default function ApplicantListHeader({ applicantList, jobPostId, isActive }) {
  const [applicants, setApplicants] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProfileId, setActiveProfileId] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [activeProfile, setActiveProfile] = useState(null);
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [jobIsActive, setJobIsActive] = useState(isActive);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const navigate = useNavigate();

  useEffect(() => {
    if (applicantList && applicantList.length > 0) {
      const updatedApplicants = applicantList.map((applicant, index) => {
        return {
          ...applicant,
          applicantNo: index + 1,
          next: index < applicantList.length - 1 ? applicantList[index + 1].id : null,
          previous: index > 0 ? applicantList[index - 1].id : null,
        };
      });

      setApplicants(updatedApplicants);
    }
  }, [applicantList]);

  const handleSortCriteriaChange = (event) => {
    setSortCriteria(event.target.value);
    sortApplicants(event.target.value, sortOrder);
  };

  const handleCreateInterviewClick = async () => {
    const hasUnreviewedApplicants = applicants.some((applicant) => applicant.isSelected === null);
    if (hasUnreviewedApplicants && jobIsActive === true) {
      setShowModal(true);
    } else {
      navigate(`/company/createinterview/${jobPostId}`);
    }
  };

  const handleModalProceed = () => {
    setApplicants(applicants.map((applicant) => (applicant.isSelected === null ? { ...applicant, isSelected: 0 } : applicant)));
    setShowModal(false);
    // Proceed with the interview creation process
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleShowProfile = (UserId) => {
    // !!! REPLACE WITH AN API REQUEST !!!
    const selectedApplicant = applicants.find((applicant) => applicant.UserId === UserId);
    if (selectedApplicant) {
      setActiveProfileId(UserId);
      setActiveProfile(selectedApplicant);
      setShowProfile(true);
    }
  };

  const handleNextApplicant = (nextApplicantId) => {
    // !!! REPLACE WITH AN API REQUEST !!!
    const selectedApplicant = applicants.find((applicant) => applicant.id === nextApplicantId);
    if (selectedApplicant) {
      setActiveProfileId(nextApplicantId);
      setActiveProfile(selectedApplicant);
      setShowProfile(true);
    }
  };

  const handlePreviousApplicant = (prevApplicantId) => {
    // !!! REPLACE WITH AN API REQUEST !!!
    const selectedApplicant = applicants.find((applicant) => applicant.id === prevApplicantId);
    if (selectedApplicant) {
      setActiveProfileId(prevApplicantId);
      setActiveProfile(selectedApplicant);
      setShowProfile(true);
    }
  };

  const handleShowList = () => {
    setActiveProfileId(null);
    setActiveProfile(null);
    setShowProfile(false);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
    sortApplicants(sortCriteria, event.target.value);
  };

  const sortApplicants = (criteria, order) => {
    const sortedApplicants = [...applicants].sort((a, b) => {
      let comparison = 0;
      if (criteria === 'date') {
        comparison = Date.parse(a.createdAt) - Date.parse(b.createdAt);
      } else if (criteria === 'name') {
        comparison = a.User.firstName.localeCompare(b.User.firstName);
      } else if (criteria === 'email') {
        comparison = a.User.UserProfile.email.localeCompare(b.User.UserProfile.email);
      } else if (criteria === 'score') {
        comparison = a.resumeAIScore - b.resumeAIScore;
      }
      return order === 'asc' ? comparison : -comparison;
    });
    setApplicants(sortedApplicants);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  // Filtered and paginated applicants
  const filteredApplicants = applicants.filter(
    (applicant) => applicant.User.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || applicant.User.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);
  const paginatedApplicants = filteredApplicants.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {showModal && (
        <div onClick={handleModalCancel} className='fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg w-96'>
            <div className='flex flex-row items-center text-lg  p-6 rounded-tl-lg text-white text-xl rounded-tr-lg border-l border-r border-t border-jobportal-darkpink bg-jobportal-pink font-bold '>
              {/* Warning SVG */}
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='white' className='size-12'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                />
              </svg>
              <p className='pl-2'>Warning</p>
            </div>
            <p className='p-6 border-l border-r border-gray-400'>
              There are applicants with a pending status.
              <br /> Proceeding will mark them as not selected. <br />
              <br />
              Do you want to continue?
            </p>
            <div className='flex justify-end p-4 rounded-bl-lg rounded-br-lg border-l border-r  border-b border-gray-400 bg-gray-200'>
              <button
                onClick={handleModalCancel}
                className={`gap-5 rounded-lg py-2 m-2 px-4 border bg-white text-gray-800 border-gray-400 hover:bg-jobportal-pink hover:border-jobportal-darkpink hover:text-white`}
              >
                <div className='text flex flex-row items-center justify-between'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6 pr-1'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                  </svg>

                  <p>Cancel</p>
                </div>
              </button>
              <button
                onClick={handleModalProceed}
                className={`gap-5 rounded-lg py-2 px-4 m-2 text-white border border-jobportal-darkpink bg-jobportal-pink hover:opacity-90 font-bold text-base`}
              >
                <div className='text flex flex-row items-center justify-between'>
                  <p>Proceed</p>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6 pl-1 '>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {showProfile == false ? (
        <div>
          <section className=''>
            <div className='flex container mx-auto pt-10  justify-between'>
              <div className='flex w-1/3'>
                <input
                  type='text'
                  className='focus:outline-none rounded-none rounded-l-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 border-r-0'
                  placeholder='Search User'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type='button'
                  className='inline-flex rounded-e-lg text-gray-900 items-center px-3 text-sm text-gray-900 bg-gray-200 border border-rounded border-gray-400 border-l hover:bg-jobportal-pink hover:border-jobportal-darkpink hover:text-white'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                  </svg>
                </button>
              </div>
              <div className='flex gap-5 w-1/2'>
                <div className='flex w-1/3'>
                  <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
                    Sort by:
                  </span>
                  <select
                    className='focus:outline-none rounded-e-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '
                    onChange={handleSortCriteriaChange}
                  >
                    <option value='date'>Date Applied</option>
                    <option value='name'>Name</option>
                    <option value='email'>Email</option>
                    <option value='score'>Resume Score</option>
                  </select>
                </div>
                <div className='flex w-1/3'>
                  <span className='inline-flex font-bold items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-400 border-e-0 rounded-s-md'>
                    Order by:
                  </span>
                  <select
                    className='focus:outline-none rounded-e-md bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5 '
                    onChange={handleSortOrderChange}
                  >
                    <option value='desc'>Descending</option>
                    <option value='asc'>Ascending</option>
                  </select>
                </div>
                {jobIsActive ? (
                  <div className='flex w-1/3  justify-end'>
                    <button
                      type='button'
                      disabled={true}
                      className='inline-flex focus:outline-none rounded-lg bg-grey-100 border text-grey-200 font-bold text-sm border-grey-200 px-5 py-2.5 '
                    >
                      <p className='text-gray-300 '>Job is still Active</p>
                    </button>
                  </div>
                ) : (
                  <div className='flex w-1/3  justify-end'>
                    <button
                      onClick={handleCreateInterviewClick}
                      type='button'
                      className='inline-flex text-white bg-jobportal-pink hover:opacity-90 font-bold rounded-lg border border-jobportal-darkpink text-base px-5 py-2.5 '
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                      </svg>
                      <p className='pl-2'>Create Interview</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className='Section'>
            <div className='container mx-auto '>
              <div className={`applicantListItem flex items-center justify-between gap-5 w-full p-0 mt-10`}>
                <div className='flex items-start gap-10 w-11/12 pl-5 pr-5'>
                  <p className='text-gray-600 font-bold w-1/24'>Nr</p>
                  <p className='text-gray-600 font-bold w-3/12'> Full Name</p>
                  <p className='text-gray-600 w-2/12 font-bold'>Email</p>
                  <p className='text-gray-600 w-1/12 font-bold'>AI Score</p>
                  <p className='text-gray-600 w-3/12 font-bold'>Applied At</p>
                  <p className='text-gray-600 w-3/12 font-bold text-end'>Actions</p>
                </div>
                <div className='emptyspace w-1/12'>
                  <p> </p>
                </div>
              </div>

              <div className='flex flex-col gap-4 pt-1'>
                {paginatedApplicants.map((applicant) => (
                  <div className='flex flex-row gap-4 pt-1 w-full'>
                    <ApplicantListItem className='w-11/12' key={applicant.id} {...applicant} />
                    <button
                      onClick={() => handleShowProfile(applicant.UserId)}
                      className={`gap-5 rounded-lg w-1/12 p-5 border bg-gray-200 text-gray-800 border-gray-400 hover:bg-jobportal-pink hover:border-jobportal-darkpink hover:text-white`}
                    >
                      <div className='text flex flex-row items-center justify-between'>
                        <p>View Profile</p>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-9 hover:rotate-45'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25' />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              <div className='flex justify-center mt-4'>
                {currentPage == 1 ? (
                  <button
                    style={{ width: '2.5rem', height: '2.5rem' }}
                    disabled={true}
                    className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border text-grey-200 font-bold text-sm border-grey-200 `}
                  >
                    {
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeOpacity='0.2' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                      </svg>
                    }
                  </button>
                ) : (
                  <button
                    style={{ width: '2.5rem', height: '2.5rem' }}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink `}
                  >
                    {
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                      </svg>
                    }
                  </button>
                )}

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-3 py-1 mx-1 ${
                      currentPage === index + 1
                        ? 'focus:outline-none rounded-md bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink'
                        : 'focus:outline-none rounded-md bg-gray-50 border text-gray-900 text-sm border-gray-400'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                {currentPage == totalPages ? (
                  <button
                    style={{ width: '2.5rem', height: '2.5rem' }}
                    disabled={true}
                    className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border text-grey-200 font-bold text-sm border-grey-200 `}
                  >
                    {
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeOpacity='0.2' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    }
                  </button>
                ) : (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    style={{ width: '2.5rem', height: '2.5rem' }}
                    className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink `}
                  >
                    {
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    }
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <div className={`applicantListItem flex items-center justify-between gap-5 w-full p-0 mt-10`}>
            <div className='profileHeader flex items-center gap-10 w-full'>
              <button
                onClick={handleShowList}
                style={{ width: '7rem' }}
                className={`gap-5 rounded-lg w-full p-5 border bg-gray-200 text-gray-800 border-gray-400 hover:bg-jobportal-pink hover:border-jobportal-darkpink hover:text-white`}
              >
                <div className='text flex items-center flex-row  justify-between'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                  </svg>
                  <p>Back</p>
                </div>
              </button>
              {activeProfile ? (
                <div className='flex justify-between  w-full'>
                  <h5 className='text-gray-600 text-2xl '>
                    Viewing {activeProfile.User.firstName + ' ' + activeProfile.User.lastName}
                    's Profile
                  </h5>
                  <h5 className='gap-2 text-center rounded-full w-1/6 p-2 border bg-white text-gray-800 border-gray-400 '>
                    Applicant {activeProfile.applicantNo + 1 + ' / ' + applicants.length}
                  </h5>
                </div>
              ) : (
                <p>Loading profile...</p>
              )}
            </div>
          </div>
          <hr className='h-px my-2 bg-gray-300 border-0' />
          <div className='flex flex-start'>
            <ApplicantListUserProfile id={activeProfileId} />
          </div>
          <hr className='h-px my-2 bg-gray-300 border-0 mt-5' />

          <div className='applicantButtons flex justify-items-end'>
            <div className='prevApplicant'>
              {activeProfile.previous == null ? (
                <button
                  style={{ height: '2.5rem' }}
                  disabled={true}
                  className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border text-grey-200 font-bold text-sm border-grey-200 `}
                >
                  {
                    <div className='text flex flex-row items-center justify-between'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeOpacity='0.2' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                      </svg>
                      <p className='px-1.5 py-1 mx-1 text-gray-400'> Previous Applicant</p>
                    </div>
                  }
                </button>
              ) : (
                <button
                  onClick={() => handlePreviousApplicant(activeProfile.previous)}
                  style={{ height: '2.5rem' }}
                  className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink `}
                >
                  {
                    <div className='text flex flex-row items-center justify-between'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                      </svg>
                      <p className='px-1.5 py-1 mx-1'>Previous Applicant</p>
                    </div>
                  }
                </button>
              )}
            </div>

            <div className='nextApplicant'>
              {activeProfile.next == null ? (
                <button
                  style={{ height: '2.5rem' }}
                  disabled={true}
                  className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-grey-100 border text-grey-200 font-bold text-sm border-grey-200 `}
                >
                  {
                    <div className='text flex flex-row items-center justify-between'>
                      <p className='px-1.5 py-1 mx-1 text-gray-400'> Next Applicant</p>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' strokeOpacity='0.2' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </div>
                  }
                </button>
              ) : (
                <button
                  onClick={() => handleNextApplicant(activeProfile.next)}
                  style={{ height: '2.5rem' }}
                  className={`px-1.5 py-1 mx-1 focus:outline-none rounded-full bg-jobportal-pink hover:opacity-90 border text-white font-bold text-sm border-jobportal-pink `}
                >
                  {
                    <div className='text flex flex-row items-center justify-between'>
                      <p className='px-1.5 py-1 mx-1'> Next Applicant</p>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </div>
                  }
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
