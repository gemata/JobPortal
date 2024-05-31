import React from 'react';
import NavBarContainer from '../../components/UserDashboard/NavBarContainer';
import SignInPrompt from '../../components/SignInPrompt';

const JobTracker = ({ userData }) => {
  return (
    <>
      <NavBarContainer />
      {userData.length != 0 && userData.role !== 'Company' ? (
        <>
          <div className='bg-gray-100'>
            <section className='max-w-[1200px] mx-auto py-10'>
              <div>Job Tracker</div>
            </section>
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

export default JobTracker;
