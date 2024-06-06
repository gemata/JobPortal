import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../components/UserDashboard/NavBarContainer';
import SignInPrompt from '../../components/SignInPrompt';

const SavedJobs = ({ userData }) => {
  const [SavedJobs, setSavedJobs] = useState('');
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (userData) {
      fetch(`http://localhost:5000/api/savedjobs/user/${userData.id}`)
        .then((response) => response.json())
        .then((data) => {
          setSavedJobs(data);
        });
    }
  }, [userData, fetchData]);

  const removeSavedJob = (id) => {
    fetch(`http://localhost:5000/api/savedjobs/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setFetchData(!fetchData);
      })
      .then((data) => {
        console.log('Successfully deleted.');
      });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <NavBarContainer />
      {userData.length != 0 && userData.role !== 'Company' ? (
        <>
          <section className='max-w-[1200px] mx-auto py-10'>
            <div className='px-4 mt-7'>
              <div className='bg-white shadow-lg w-full p-5 rounded-lg'>
                <h1 className='font-semibold text-2xl mb-5'>Saved Jobs</h1>
                <hr />
                <div className='w-11/12'>
                  <div className={`applicantListItem flex items-center justify-between gap-5 w-full p-0 mt-10 mb-2`}>
                    <div className='flex items-start gap-10 w-full pl-3 pr-5'>
                      <p className='text-gray-600 font-bold w-1/24'>Nr</p>
                      <p className='text-gray-600 font-bold w-3/12'> Details</p>
                      <p className='text-gray-600 w-1/12 font-bold'>Start Date</p>
                      <p className='text-gray-600 w-1/12 font-bold'>End Date</p>
                      <p className='text-gray-600 w-2/12 font-bold'>Salary</p>
                      <p className='text-gray-600 w-2/12 font-bold'>Job Location</p>
                      <p className='text-gray-600 w-1/12 font-bold'>Status</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3'>
                    {SavedJobs.length > 0 ? (
                      SavedJobs.map((SavedJob, index) => (
                        <>
                          <div className='flex justify-between items-center w-full mr-6 relative'>
                            <Link
                              to={`/jobs/show/${SavedJob.JobPost.ID}`}
                              className='jobItem flex items-center justify-between gap-5 rounded-lg w-full pt-2 pb-2 border bg-white hover:bg-gray-100'
                            >
                              <div className='flex items-center  gap-10 w-full pl-5 pr-5'>
                                <p className='text-gray-600 font-bold w-1/24'>{SavedJob.JobPost.ID}</p>
                                <div className='text-left w-3/12'>
                                  <h5 className='text-jobportal-primary font-bold'>{SavedJob.JobPost.positionName}</h5>
                                  <p className='text-gray-600'>{SavedJob.JobPost.jobLocation}</p>
                                  <p className='text-gray-600'>Posted: {formatDate(SavedJob.JobPost.createdAt)}</p>
                                </div>

                                <p className='text-gray-600 w-1/12 '>{formatDate(SavedJob.JobPost.startAt)}</p>
                                <p className='text-gray-600 w-1/12 '>{formatDate(SavedJob.JobPost.endAt)}</p>
                                <p className='text-gray-600 w-2/12 '>{SavedJob.JobPost.salary_from + '$ - ' + SavedJob.JobPost.salary_to + '$'}</p>
                                <p className='text-gray-600 w-2/12 capitalize'>{SavedJob.JobPost.interviewMethod}</p>
                                <p className='text-gray-600 w-1/12 capitalize'>{SavedJob.status}</p>
                              </div>
                            </Link>
                            <button
                              onClick={() => {
                                removeSavedJob(SavedJob.id);
                              }}
                              className='absolute -right-24 rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 p-2 text-white'
                            >
                              Remove <br /> Save
                            </button>
                          </div>
                        </>
                      ))
                    ) : (
                      <p className='text-center text-gray-500'>No job postings available.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
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

export default SavedJobs;
