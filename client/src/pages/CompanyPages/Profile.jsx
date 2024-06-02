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

  useEffect(() => {
    fetch(`http://localhost:5000/api/companies/${userData.ID}`)
      .then((response) => response.json())
      .then((data) => {
        setCompanyData(data);
      })
      .catch((error) => console.error('Error fetching company data:', error));
  }, [userData]);

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
                      <button onClick={handleOpenProfileModal} type='button' className='bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded px-4 py-2'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                          />
                        </svg>
                      </button>
                    </div>

                    <hr />

                    <p>
                      Company Address: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.address}</span>
                    </p>
                    <hr />

                    <p>
                      Company Email: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.companyEmail}</span>
                    </p>
                    <hr />

                    <p>
                      Company Website: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.website}</span>
                    </p>
                    <hr />

                    <p>
                      Company Number: <span className='float-right break-all text-gray-600'>{companyData.CompanyProfile?.phoneNumber}</span>
                    </p>
                    <hr />

                    <p>Company Description:</p>
                    <blockquote className='float-right text-gray-600 p-[20px] bg-gray-100 border-l-4 border-l-fuchsia-300'>{companyData.CompanyProfile?.description}</blockquote>
                    <hr />

                    <div className='flex items-center justify-between'>
                      Email notifications:{' '}
                      <button type='button' className={`rounded py-1 px-3 ${companyData.CompanyProfile?.emailNotification_ac ? 'bg-green-300' : 'bg-red-300'}`}>
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
        <CompanyModal companyData={companyData} refreshFile={refreshFile} />
      </Modal>
      <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal}>
        <CompanyProfileModal companyData={companyData} />
      </Modal>
    </>
  );
}
