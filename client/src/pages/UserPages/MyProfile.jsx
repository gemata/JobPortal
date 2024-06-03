import React, { useEffect, useState } from 'react';
import NavBarContainer from '../../components/UserDashboard/NavBarContainer';
import ProfileHeader from '../../components/UserDashboard/ProfileHeader';
import ResumeUpload from '../../components/UserDashboard/ResumeUpload';
import ResumeCard from '../../components/UserDashboard/ResumeCard';
import ProfileDetail from '../../components/UserDashboard/ProfileDetail';
import SignInPrompt from '../../components/SignInPrompt';
import ProfileDates from '../../components/UserDashboard/ProfileDates';

const MyProfile = ({ userData }) => {
  const [profileData, setProfileData] = useState('');
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (userData.id) {
      fetch(`http://localhost:5000/api/users/${userData.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProfileData(data);
        })
        .catch((error) => console.error('Error fetching profile data:', error));
    }
  }, [userData, fetchData]);

  return (
    <>
      <NavBarContainer />
      {userData.length != 0 && userData.role !== 'Company' ? (
        <>
          <div className='bg-gray-100'>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-8 p-4 py-8'>
              <div className='flex flex-col gap-5 w-1/3'>
                <ProfileHeader profileData={profileData} fetchData={fetchData} setFetchData={setFetchData} />
                <ProfileDates profileData={profileData} />
                <ResumeCard profileData={profileData} />
              </div>
              <div className='flex flex-col gap-5 w-2/3'>
                <ResumeUpload profileData={profileData} className='h-32' />
                <ProfileDetail userData={userData} profileData={profileData} fetchData={fetchData} setFetchData={setFetchData} className='flex-1' />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='bg-gray-100'>
          <SignInPrompt />
        </div>
      )}
    </>
  );
};

export default MyProfile;
