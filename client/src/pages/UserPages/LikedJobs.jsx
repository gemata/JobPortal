import React from 'react';
import NavBarContainer from '../../components/UserDashboard/NavBarContainer';
import SignInPrompt from '../../components/SignInPrompt';

const LikedJobs = ({ userData }) => {
  return (
    <>
      <NavBarContainer />
      {userData.length != 0 && userData.role !== 'Company' ? (
        <>
          <section className='max-w-[1200px] mx-auto py-10'>
            <div>LikedJobs</div>
          </section>
        </>
      ) : (
        <div className='bg-gray-100'>
          <SignInPrompt />
        </div>
      )}
    </>
  );
};

export default LikedJobs;