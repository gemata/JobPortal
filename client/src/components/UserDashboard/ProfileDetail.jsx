import React, { useEffect, useState } from 'react';
import AddEducation from './EducationCRUDs/AddEducation';
import EditEducation from './EducationCRUDs/EditEducation';
import Modal from './Modal';
import DeleteEducation from './EducationCRUDs/DeleteEducation';
import AddWorkExperience from './WorkExpCRUDs/AddWorkExp';
import EditWorkExperience from './WorkExpCRUDs/EditWorkExp';
import DeleteWorkExperience from './WorkExpCRUDs/DeleteWorkExp';
import UserProfileModal from './UserProfileModal';

const ProfileDetail = ({ userData, profileData, fetchData, setFetchData }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [isEditEducationModalOpen, setIsEditEducationModalOpen] = useState(false);
  const [isEditWorkModalOpen, setIsEditWorkModalOpen] = useState(false);
  const [isDeleteEducationModalOpen, setIsDeleteEducationModalOpen] = useState(false);
  const [isDeleteWorkModalOpen, setIsDeleteWorkModalOpen] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState(null);
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [currentWorkExperience, setCurrentWorkExperience] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [deleteWarningMessage, setDeleteWarningMessage] = useState('Are you sure you want to delete your profile info?');
  const [toggleDeleteButton, setToggleDeleteButton] = useState(false);

  useEffect(() => {
    if (userData) {
      fetch(`http://localhost:5000/api/educations/user/${userData.id}`)
        .then((response) => response.json())
        .then((data) => {
          setEducationList(data);
        })
        .catch((error) => console.error('Error fetching education list:', error));

      fetch(`http://localhost:5000/api/workexperience/user/${userData.id}`)
        .then((response) => response.json())
        .then((data) => {
          setWorkExperienceList(data);
        })
        .catch((error) => console.error('Error fetching work experience list:', error));
    }
  }, [userData, fetchData]);

  const openConfirm = () => {
    setToggleDeleteButton((prevState) => !prevState);

    setTimeout(() => {
      setToggleDeleteButton((prevState) => !prevState);
      setDeleteWarningMessage('Are you sure you want to delete your profile info?');
    }, 3000);
  };

  const handleOpenEducationModal = () => {
    setIsEducationModalOpen(true);
  };

  const handleCloseEducationModal = () => {
    setIsEducationModalOpen(false);
  };

  const handleOpenWorkModal = () => {
    setIsWorkModalOpen(true);
  };

  const handleCloseWorkModal = () => {
    setIsWorkModalOpen(false);
  };

  const handleOpenEditEducationModal = (education) => {
    setCurrentEducation(education);
    setIsEditEducationModalOpen(true);
  };

  const handleCloseEditEducationModal = () => {
    setIsEditEducationModalOpen(false);
    setCurrentEducation(null);
  };

  const handleOpenEditWorkModal = (workExperience) => {
    setCurrentWorkExperience(workExperience);
    setIsEditWorkModalOpen(true);
  };

  const handleCloseEditWorkModal = () => {
    setIsEditWorkModalOpen(false);
    setCurrentWorkExperience(null);
  };

  const handleOpenDeleteEducationModal = (education) => {
    setCurrentEducation(education);
    setIsDeleteEducationModalOpen(true);
  };

  const handleCloseDeleteEducationModal = () => {
    setIsDeleteEducationModalOpen(false);
  };

  const handleOpenDeleteWorkModal = (workExperience) => {
    setCurrentWorkExperience(workExperience);
    setIsDeleteWorkModalOpen(true);
  };

  const handleCloseDeleteWorkModal = () => {
    setIsDeleteWorkModalOpen(false);
  };

  const addEducationDetail = (newEducation) => {
    setEducationList((prevList) => [...prevList, newEducation]);
    handleCloseEducationModal();
  };

  const updateEducationDetail = (updatedEducation) => {
    setEducationList((prevList) => prevList.map((edu) => (edu.id === updatedEducation.id ? updatedEducation : edu)));
    handleCloseEditEducationModal();
  };

  const addWorkExperienceDetail = (newWorkExperience) => {
    setWorkExperienceList((prevList) => [...prevList, newWorkExperience]);
    handleCloseWorkModal();
  };

  const updateWorkExperienceDetail = (updatedWorkExperience) => {
    setWorkExperienceList((prevList) => prevList.map((work) => (work.id === updatedWorkExperience.id ? updatedWorkExperience : work)));
    handleCloseEditWorkModal();
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return 'None specified';
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleOpenProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const deleteProfileData = async () => {
    if (profileData.UserProfile) {
      const requestBody = {
        id: profileData.UserProfile.id,
        sex: '',
        phoneNumber: '',
        dateOfBirth: '',
      };

      try {
        const response = await fetch(`http://localhost:5000/api/userProfiles/${profileData.UserProfile?.id}`, {
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
    if (profileData.UserProfile) {
      const requestBody = {
        ...profileData.UserProfile,
        emailNotification_ac: !profileData.UserProfile.emailNotification_ac,
      };

      try {
        const response = await fetch(`http://localhost:5000/api/userProfiles/${profileData.UserProfile?.id}`, {
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
        setFetchData(!fetchData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  return (
    <div className='bg-white shadow-lg w-full p-5 rounded-lg flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-xl'>Profile Information</h1>

        <div className='flex gap-3 items-center'>
          <button type='button' onClick={handleOpenProfileModal} className='bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded px-4 py-2'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
              />
            </svg>
          </button>
          <button type='button' onClick={openConfirm} className={`${toggleDeleteButton ? 'hidden' : 'block'} bg-red-500 hover:bg-red-600 active:bg-red-700 rounded px-4 py-2`}>
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
        Phone Number: <span className='float-right break-all text-gray-600'>{profileData.UserProfile?.phoneNumber || 'None specified'}</span>
      </p>
      <hr />

      <p>
        Date of birth: <span className='float-right break-all text-gray-600'>{formatDate(profileData.UserProfile?.dateOfBirth) || 'None specified'}</span>
      </p>
      <hr />

      <p>
        Gender:{' '}
        <span className='float-right break-all text-gray-600'>
          {profileData.UserProfile?.sex === 'M'
            ? 'Male'
            : profileData.UserProfile?.sex === 'F'
            ? 'Female'
            : profileData.UserProfile?.sex === 'NB'
            ? 'Non-Binary'
            : profileData.UserProfile?.sex === 'PNS'
            ? 'Prefer not to say'
            : 'None specified'}
        </span>
      </p>
      <hr />

      <div className='flex items-center justify-between'>
        Email notifications:{' '}
        <button type='button' onClick={toggleEmailNotification} className={`rounded py-1 px-3 ${profileData.UserProfile?.emailNotification_ac ? 'bg-green-300' : 'bg-red-300'}`}>
          {profileData.UserProfile?.emailNotification_ac ? 'On' : 'Off'}
        </button>
      </div>
      <hr />

      <div className='flex justify-between items-center'>
        <div className='font-semibold text-xl mb-2'>Work Experience</div>
        <button className='text-purple-500' onClick={handleOpenWorkModal}>
          ADD
        </button>
      </div>
      <hr />
      {workExperienceList.length > 0 && (
        <div className='flex flex-col gap-4'>
          {workExperienceList.map((workExperience, index) => (
            <div key={index} className='p-4 border rounded'>
              <div className='flex justify-between'>
                <div className='font-bold'>{workExperience.companyName}</div>
                <div className='flex gap-4'>
                  <button type='button' onClick={() => handleOpenEditWorkModal(workExperience)}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#8d3f88' className='size-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                      />
                    </svg>
                  </button>
                  <button type='button' onClick={() => handleOpenDeleteWorkModal(workExperience)}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                {workExperience.jobTitle} - {workExperience.jobType}
              </div>
              <div className='text-gray-600'>
                {formatDate(workExperience.startDate)} - {formatDate(workExperience.endDate) || 'Current'}
              </div>
              <div className='text-gray-600'>{workExperience.location}</div>
            </div>
          ))}
        </div>
      )}
      <Modal isOpen={isWorkModalOpen} onClose={handleCloseWorkModal}>
        <AddWorkExperience userData={userData} addWorkExperienceDetail={addWorkExperienceDetail} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>
      <Modal isOpen={isEditWorkModalOpen} onClose={handleCloseEditWorkModal}>
        <EditWorkExperience
          userData={userData}
          workExperienceDetail={currentWorkExperience}
          updateWorkExperienceDetail={updateWorkExperienceDetail}
          fetchData={fetchData}
          setFetchData={setFetchData}
        />
      </Modal>
      <Modal isOpen={isDeleteWorkModalOpen} onClose={handleCloseDeleteWorkModal}>
        <DeleteWorkExperience workExperienceDetail={currentWorkExperience} onClose={handleCloseDeleteWorkModal} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>

      <div className='flex justify-between items-center'>
        <div className='font-semibold text-xl mb-2'>Education</div>
        <button className='text-purple-500' onClick={handleOpenEducationModal}>
          ADD
        </button>
      </div>
      <hr />
      {educationList.length > 0 && (
        <div className='flex flex-col gap-4'>
          {educationList.map((education, index) => (
            <div key={index} className=' p-4 border rounded'>
              <div className='flex justify-between'>
                <div className='font-bold'>{education.schoolName}</div>
                <div className='flex gap-4'>
                  <button type='button' onClick={() => handleOpenEditEducationModal(education)}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#8d3f88' className='size-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                      />
                    </svg>
                  </button>
                  <button type='button' onClick={() => handleOpenDeleteEducationModal(education)}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                {education.degreeType} - {education.degreeName}
              </div>
              <div className='text-gray-600'>
                {formatDate(education.startDate)} - {formatDate(education.endDate) || 'Current'}
              </div>
              <div className='text-gray-600'>{education.location}</div>
            </div>
          ))}
        </div>
      )}
      <Modal isOpen={isEducationModalOpen} onClose={handleCloseEducationModal}>
        <AddEducation userData={userData} addEducationDetail={addEducationDetail} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>
      <Modal isOpen={isEditEducationModalOpen} onClose={handleCloseEditEducationModal}>
        <EditEducation userData={userData} educationDetail={currentEducation} updateEducationDetail={updateEducationDetail} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>
      <Modal isOpen={isDeleteEducationModalOpen} onClose={handleCloseDeleteEducationModal}>
        <DeleteEducation educationDetail={currentEducation} onClose={handleCloseDeleteEducationModal} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>
      <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal}>
        <UserProfileModal profileData={profileData} fetchData={fetchData} setFetchData={setFetchData} />
      </Modal>
    </div>
  );
};

export default ProfileDetail;
