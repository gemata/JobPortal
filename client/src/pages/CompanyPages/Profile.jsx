import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignInPrompt from '../../components/SignInPrompt';
import DashboardNavSection from '../../components/CompanyComponents/DashboardNavSection';
import grayLogo from '../../img/grayLogo.png';
import Modal from '../../components/UserDashboard/Modal';
import CompanyModal from '../../components/CompanyComponents/Profile/CompanyModal';
import CompanyProfileModal from '../../components/CompanyComponents/Profile/CompanyProfileModal';

export default function CompanyProfile({ userData }) {
  const [companyData, setCompanyData] = useState([]);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [refreshFile, setRefreshFile] = useState(false);
  const [fetchData, setFetchData] = useState(false);
  const [toggleDeleteButton, setToggleDeleteButton] = useState(false);
  const [deleteWarningMessage, setDeleteWarningMessage] = useState('Are you sure you want to delete your profile info?');

  useEffect(() => {
    fetch(`http://localhost:5000/api/companies/${userData.ID}`)
      .then((response) => response.json())
      .then((data) => {
        setCompanyData(data);
      })
      .catch((error) => console.error('Error fetching company data:', error));
  }, [userData, fetchData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCloseCompanyModal();
      handleCloseProfileModal();
    }, 2000);

    return () => clearTimeout(timer);
  }, [fetchData]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleOpenCompanyModal = () => {
    setIsCompanyModalOpen(true);
  };

  const handleCloseCompanyModal = () => {
    setIsCompanyModalOpen(false);

    let fileState = refreshFile;
    setRefreshFile(!fileState);
  };

  const handleOpenProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const openConfirm = () => {
    setToggleDeleteButton((prevState) => !prevState);

    setTimeout(() => {
      setToggleDeleteButton((prevState) => !prevState);
      setDeleteWarningMessage('Are you sure you want to delete your profile info?');
    }, 3000);
  };

  const deleteProfileData = async () => {
    if (companyData.CompanyProfile) {
      const requestBody = {
        id: companyData.CompanyProfile.id,
        address: '',
        companyEmail: '',
        website: '',
        phoneNumber: '',
        description: '',
      };

      try {
        const response = await fetch(`http://localhost:5000/api/companyProfiles/${companyData.CompanyProfile?.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.error('Error:', responseData.error);
        } else {
          setDeleteWarningMessage('Profile data deleted.');
          setFetchData(!fetchData);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  const toggleEmailNotification = async () => {
    if (companyData.CompanyProfile) {
      const requestBody = {
        ...companyData.CompanyProfile,
        emailNotification_ac: !companyData.CompanyProfile.emailNotification_ac,
      };

      try {
        const response = await fetch(`http://localhost:5000/api/companyProfiles/${companyData.CompanyProfile?.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.error('Error:', responseData.error);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  return (
    <>
      <div className='companyProfile dashboard bg-gray-100'>
        <DashboardNavSection />
        {userData.length != 0 && userData.role === 'Company' && companyData.length != 0 ? (
          <>
            <section className='bg-gray-100'>
              <div className='max-w-[1200px] m-auto'>
                <div className='flex px-4 py-8 gap-[12px] flex-wrap'>
                  <div className='flex flex-col w-full md:w-[400px] gap-4'>
                    <div className='bg-white shadow-lg w-full p-5 rounded-lg flex items-center justify-between gap-4'>
                      <div className='flex items-center gap-4'>
                        <img
                          src={companyData.CompanyLogo ? `http://localhost:5000/companyLogos/${companyData.CompanyLogo.s3Key}` : grayLogo}
                          className='object-center object-cover rounded-full border h-16 w-16'
                        />
                        <div>
                          <h3 className='text-lg font-semibold'>Hello {companyData.CompanyName}!</h3>
                          <p>{companyData.Email}</p>
                        </div>
                      </div>

                      <button
                        type='button'
                        onClick={handleOpenCompanyModal}
                        className='bg-gray-200 rounded-full w-12 h-12 inline-flex justify-center items-center hover:bg-gray-300 active:bg-gray-400'
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                          />
                        </svg>
                      </button>
                    </div>
                    <div className='bg-white shadow-lg w-full p-5 rounded-lg flex flex-col gap-4'>
                      <p>
                        Account created at: <span className='float-right break-all text-gray-600'>{formatDate(companyData.createdAt)}</span>
                      </p>
                      <hr />

                      <p>
                        Account last updated at: <span className='float-right break-all text-gray-600'>{formatDate(companyData.updatedAt)}</span>
                      </p>
                    </div>
                    <div className='bg-purple-200 shadow-lg w-full p-5 rounded-lg flex flex-col justify-between gap-8'>
                      {companyData.FreeJobPosted ? (
                        <>
                          <div className='flex flex-col gap-3'>
                            <h1 className='text-lg font-bold text-purple-900'>You have already posted your free job.</h1>
                            <p className='text-purple-900'>
                              To keep posting new job listings, you need to become a{' '}
                              <Link to='/pricing' className='underline text-jobportal-pink'>
                                premium member
                              </Link>
                              .
                            </p>
                          </div>
                          <div className='flex flex-col gap-3 w-full'>
                            <button type='button' className='bg-white w-full px-3 py-2 rounded hover:bg-gray-100 active:bg-gray-200'>
                              View Job Details
                            </button>
                            <Link to='/pricing' className='bg-jobportal-pink text-center text-white w-full px-3 py-2 rounded hover:bg-fuchsia-700 active:bg-fuchsia-800'>
                              View Subscriptions
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className='flex flex-col gap-3'>
                            <h1 className='text-lg font-bold text-purple-900'>You still have your free job posting.</h1>
                            <p className='text-purple-900'>
                              If you want to create you very own job listing, you can{' '}
                              <Link to='/company/jobs/create' className='underline text-jobportal-pink'>
                                create a job listing here
                              </Link>
                              .
                            </p>
                          </div>
                          <div className='flex flex-col gap-3 w-full md:w-auto'>
                            <Link
                              to='/company/jobs/create'
                              className='bg-jobportal-pink text-white w-full text-center md:w-auto px-3 py-2 rounded hover:bg-fuchsia-700 active:bg-fuchsia-800'
                            >
                              Create New Post
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className='bg-white shadow-lg w-full md:max-w-[calc(100%-412px)] p-5 rounded-lg flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-semibold text-xl'>Company Information</h1>
                      <div className='flex items-center gap-3'>
                        <button onClick={handleOpenProfileModal} type='button' className='bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded px-4 py-2'>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                            />
                          </svg>
                        </button>
                        <button
                          type='button'
                          onClick={openConfirm}
                          className={`${toggleDeleteButton ? 'hidden' : 'block'} bg-red-500 hover:bg-red-600 active:bg-red-700 rounded px-4 py-2`}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='white' className='size-5'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                            />
                          </svg>
                        </button>
                        <button
                          type='button'
                          onClick={deleteProfileData}
                          className={`${toggleDeleteButton ? 'block' : 'hidden'}  bg-red-500 hover:bg-red-600 active:bg-red-700 rounded px-4 py-2`}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='white' className='size-5'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                            />
                          </svg>
                        </button>
                        <p className={`${toggleDeleteButton ? 'block' : 'hidden'} md:w-[156px] text-sm text-gray-600 leading-4`}>{deleteWarningMessage}</p>
                      </div>
                    </div>

                    <hr />

                    <p>
                      Company Address: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.address || 'None specified'}</span>
                    </p>
                    <hr />

                    <p>
                      Company Email: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.companyEmail || 'None specified'}</span>
                    </p>
                    <hr />

                    <p>
                      Company Website: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.website || 'None specified'}</span>
                    </p>
                    <hr />

                    <p>
                      Company Number: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.phoneNumber || 'None specified'}</span>
                    </p>
                    <hr />

                    <p>Company Description:</p>
                    <blockquote className='float-right text-gray-600 p-[20px] bg-gray-100 border-l-4 border-l-fuchsia-300'>{companyData.CompanyProfile?.description}</blockquote>
                    <hr />

                    <div className='flex items-center justify-between'>
                      Email notifications:{' '}
                      <button
                        type='button'
                        onClick={toggleEmailNotification}
                        className={`rounded py-1 px-3 ${companyData.CompanyProfile?.emailNotification_ac ? 'bg-green-300' : 'bg-red-300'}`}
                      >
                        {companyData.CompanyProfile?.emailNotification_ac ? 'On' : 'Off'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <SignInPrompt />
        )}
      </div>
      <Modal isOpen={isCompanyModalOpen} onClose={handleCloseCompanyModal}>
        <CompanyModal companyData={companyData} refreshFile={refreshFile} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>
      <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal}>
        <CompanyProfileModal companyData={companyData} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>
    </>
  );
}
