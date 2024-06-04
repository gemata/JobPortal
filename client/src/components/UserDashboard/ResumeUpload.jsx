import React, { useState } from 'react';
import grayLogo from '../../img/grayLogo.png';
import mainLogo from '../../img/mainLogo.png';
import Modal from './Modal';
import ResumeModal from './ResumeModal';

const ResumeUpload = ({ profileData, fetchData, setFetchData }) => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <>
      <div className='w-full bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='p-4 bg-white'>
          <div className='flex items-center space-x-4'>
            <img src={profileData.Resume ? mainLogo : grayLogo} className={`h-12 w-12 ${profileData.Resume ? '' : 'border-2 border-dashed border-gray-400'} rounded-full`} />
            <div className='flex flex-col flex-grow'>
              <span className='font-bold text-lg'>{profileData.Resume ? 'Update Your Resume' : 'Upload Your Resume'}</span>
              <span className='text-gray-700 text-sm'>
                {profileData.Resume ? 'Update your resume to show employers your newest accomplishments' : 'Upload your resume to ensure employers can easily find you'}
              </span>
            </div>
            <button
              type='button'
              onClick={handleOpenResumeModal}
              className='px-4 py-2 text-white bg-jobportal-pink rounded hover:bg-fuchsia-700 active:bg-fuchsia-800 transition duration-300 ease-in-out'
            >
              {profileData.Resume ? 'Update Resume' : 'Upload Resume'}
            </button>
          </div>
        </div>
        <Modal isOpen={isResumeModalOpen} onClose={handleCloseResumeModal}>
          <ResumeModal profileData={profileData} fetchData={fetchData} setFetchData={setFetchData} onClose={handleCloseResumeModal} />
        </Modal>
      </div>
    </>
  );
};

export default ResumeUpload;
