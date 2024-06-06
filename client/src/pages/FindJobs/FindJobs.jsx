import React, { useEffect, useState } from 'react';
import FindJobsSearchbar from '../../components/CompanyComponents/Jobs/FindJobs/FindJobsSearchbar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import grayLogo from '../../img/grayLogo.png';
import { Link, useSearchParams } from 'react-router-dom';

const FindJobs = ({ userData }) => {
  const [nationality, setNationality] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [jobPositionFilter, setjobPositionFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [jobPosts, setJobPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [jobOpened, setJobOpened] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [currentCompany, setCurrentCompany] = useState(null);
  const [searchParams] = useSearchParams();
  const [applied, setApplied] = useState(null);
  const [saved, setSaved] = useState(null);
  const [liked, setLiked] = useState(null);
  const queryValue = searchParams.get('q');
  const [errorMessage, setErrorMessage] = useState('');
  const [animationClass, setAnimationClass] = useState('');
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (liked || saved) {
      setAnimationClass('animate-pulse-once');
    }
  }, [liked, saved]);
  useEffect(() => {
    if (queryValue) {
      setSearchQuery(queryValue);
      fetchJobPosts();
    }
  }, []);

  const fetchJobPosts = () => {
    closeJob();

    fetch(
      `http://localhost:5000/api/jobposts?page=${currentPage}&limit=12&nat=${nationality}&q=${searchQuery}&loc=${workLocation}&sFrom=${salaryFrom}&sTo=${salaryTo}&ed=${educationLevel}&cf=${companyFilter}&jp=${jobPositionFilter}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.jobPosts) {
          const sanitizedJobPosts = data.jobPosts.map((jobPost) => ({
            ...jobPost,
            jobSummary: DOMPurify.sanitize(jobPost.jobSummary),
          }));

          setJobPosts(sanitizedJobPosts);
          setTotalPages(Array.from({ length: data.totalPages }, (_, i) => i + 1));
        } else {
          console.error('No job posts found in response:', data);
          setJobPosts([]);
        }
      })
      .catch((error) => console.error('Error fetching job posts:', error));
  };

  useEffect(() => {
    fetchJobPosts();
  }, [currentPage, nationality, searchQuery, workLocation, salaryFrom, salaryTo, educationLevel, jobPositionFilter, companyFilter]);

  const handlePageChange = (page) => {
    let newPage;

    if (page === 'next') {
      newPage = currentPage + 1;
    } else if (page === 'prev') {
      newPage = currentPage - 1;
    } else {
      newPage = page;
    }

    setCurrentPage(newPage);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchJobPosts();
  };

  const handleApplyClick = async () => {
    if (!userData || !currentJob) {
      return;
    }

    const requestBody = {
      isSelected: null,
      resumeAIScore: null,
      JobPostID: currentJob.ID,
      UserId: userData.id,
    };

    const requestBodyAppliedJob = {
      status: 0,
      appliedAt: new Date().toISOString(),
      JobPostID: currentJob.ID,
      UserId: userData.id,
    };

    try {
      const [response1, response2] = await Promise.all([
        fetch(`http://localhost:5000/api/applicantlists/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }),
        fetch(`http://localhost:5000/api/appliedjobs/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBodyAppliedJob),
        }),
      ]);

      const responseData1 = await response1.json();
      const responseData2 = await response2.json();

      if (!response1.ok) {
        console.error('Error in applicant list:', responseData1.error);
        setErrorMessage(responseData1.error);
      }

      if (!response2.ok) {
        console.error('Error in applied jobs:', responseData2.error);
        setErrorMessage(responseData2.error);
      }

      if (response1.ok && response2.ok) {
        setApplied(true);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('There was an error applying for the job!', error);
    }
  };

  const handleSaveClick = async () => {
    if (!userData || !currentJob) {
      return;
    }

    const requestBody = {
      status: 0,
      JobPostID: currentJob.ID,
      UserId: userData.id,
    };

    try {
      const response = await fetch('http://localhost:5000/api/savedjobs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setAnimationClass(''), 1000); // Remove animation class after 1s
      }
    } catch (error) {
      console.error('There was an error saving the job!', error);
    }
  };

  const handleLikeClick = async () => {
    if (!userData || !currentJob) {
      return;
    }

    const requestBody = {
      status: 0,
      JobPostID: currentJob.ID,
      UserId: userData.id,
    };

    try {
      const response = await fetch('http://localhost:5000/api/likedjobs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setLiked(true);
        setTimeout(() => setAnimationClass(''), 1000); // Remove animation class after 1s
      }
    } catch (error) {
      console.error('There was an error liking the job!', error);
    }
  };

  const removeLikedJob = (id) => {
    const requestBody = {
      UserId: userData.id,
      JobPostID: id,
    };

    console.log(requestBody);

    fetch(`http://localhost:5000/api/likedjobs`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setLiked(false);
        setFetchData(!fetchData); // Trigger re-fetch
      })
      .then((data) => {
        console.log('Successfully deleted.');
      })
      .catch((error) => {
        console.error('There was an error deleting the liked job!', error);
      });
  };

  const removeSavedJob = (id) => {
    const requestBody = {
      UserId: userData.id,
      JobPostID: id,
    };

    fetch(`http://localhost:5000/api/savedjobs`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setSaved(false);
        setFetchData(!fetchData); // Trigger re-fetch
      })
      .then((data) => {
        console.log('Successfully deleted.');
      })
      .catch((error) => {
        console.error('There was an error deleting the saved job!', error);
      });
  };

  const openJob = (job) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (currentJob) {
      if (job.ID == currentJob.ID) {
        closeJob();
        return;
      }
    }

    fetch(`http://localhost:5000/api/companyprofiles/company/${job.Company?.ID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCurrentCompany(data);
        } else {
          console.error('No company profile found in response:', data);
        }
      });

    fetch(`http://localhost:5000/api/likedJobs/user/${userData?.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          if (data.length > 0) {
            data.forEach((item) => {
              if (job.ID == item.JobPostID) {
                setLiked(true);
              }
            });
          }
        }
      });

    fetch(`http://localhost:5000/api/savedJobs/user/${userData?.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          if (data.length > 0) {
            data.forEach((item) => {
              if (job.ID == item.JobPostID) {
                setSaved(true);
              }
            });
          }
        }
      });

    setCurrentJob(job);
    setJobOpened(true);
  };

  const closeJob = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setApplied(false);
    setSaved(false);
    setLiked(false);
    setCurrentJob([]);
    setJobOpened(false);
  };

  return (
    <>
      {jobOpened ? (
        <></>
      ) : (
        <div className='bg-gray-100'>
          <div className='max-w-[1200px] mx-auto my-0 px-[15px] py-0'>
            <div className='flex justify-between pt-[0px] pb-[0px]'>
              <div className='flex flex-col gap-3 w-full items-center justify-center py-10'>
                <span className='text-black font-semibold text-2xl'>Search for a Job</span>
                <p className='paragraph w-2/3 text-center'>
                  Discover exciting opportunities in the tech industry. From programming and AI to design and consulting, explore openings to shape the future of innovation. Take
                  the next step towards a rewarding career.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={jobOpened ? 'bg-gray-100' : ''}>
        <div className='flex max-w-[1500px] mx-auto '>
          <div className={`border transition-all bg-gray-50 ${jobOpened ? 'w-0 hidden md:block md:w-1/3' : 'w-full'}`}>
            <FindJobsSearchbar
              nationality={nationality}
              setNationality={setNationality}
              workLocation={workLocation}
              setWorkLocation={setWorkLocation}
              salaryFrom={salaryFrom}
              setSalaryFrom={setSalaryFrom}
              salaryTo={salaryTo}
              setSalaryTo={setSalaryTo}
              educationLevel={educationLevel}
              setEducationLevel={setEducationLevel}
              jobPositionFilter={jobPositionFilter}
              setjobPositionFilter={setjobPositionFilter}
              companyFilter={companyFilter}
              setCompanyFilter={setCompanyFilter}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleFormSubmit={handleFormSubmit}
              jobOpened={jobOpened}
            />

            <div
              className={
                jobPosts.length !== 0
                  ? jobOpened
                    ? 'grid grid-cols-1 shadow-inner gap-4 px-5 mx-auto pt-5 max-h-[1200px] overflow-y-scroll'
                    : 'grid max-w-[1200px] sm:grid-cols-2 md:grid-cols-4 gap-4 px-5 mx-auto mt-10'
                  : 'flex items-center justify-center max-w-[1200px] px-5 mx-auto mt-10 min-h-[450px]'
              }
            >
              {jobPosts.length !== 0 ? (
                jobPosts.map((jobPost) => (
                  <div
                    key={jobPost.id}
                    onClick={() => {
                      openJob(jobPost);
                    }}
                    className='cursor-pointer border rounded-lg p-4 bg-white shadow-md flex flex-col justify-between space-y-2 hover:bg-gray-50 active:bg-gray-100'
                    style={{ height: '170px' }}
                  >
                    <div className='flex justify-between items-center'>
                      <h3 className='select-none text-lg font-semibold'>{jobPost['Job Position']?.position} </h3>
                    </div>
                    <div className='flex items-center'>
                      <span
                        className={`bg-${jobPost.interviewMethod === 'online' ? 'green' : jobPost.interviewMethod === 'inPerson' ? 'blue' : 'orange'}-100 capitalize text-${
                          jobPost.interviewMethod === 'online' ? 'green' : jobPost.interviewMethod === 'inPerson' ? 'blue' : 'orange'
                        }-800 text-xs select-none font-medium mr-2 px-2.5 py-0.5 rounded`}
                      >
                        {jobPost.interviewMethod === 'online' ? (
                          <div className='flex'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
                              <path d='M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z' />
                            </svg>

                            <p className='pl-1'>Online</p>
                          </div>
                        ) : jobPost.interviewMethod === 'inPerson' ? (
                          <div className='flex'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                              <path
                                fillRule='evenodd'
                                d='M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z'
                                clipRule='evenodd'
                              />
                            </svg>

                            <p className='pl-1'>In Person</p>
                          </div>
                        ) : (
                          <div className='flex'>
                            <svg fill='currentColor' className='size-4' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 240'>
                              <path
                                d='M84.635,20.256c18.383,0,33.286,14.903,33.286,33.286s-14.903,33.286-33.286,33.286S51.349,71.925,51.349,53.542
	S66.251,20.256,84.635,20.256z M31.002,145.011c0-2.499,1.606-4.194,4.194-4.194s4.194,1.606,4.194,4.194v92.986h91.469v-92.986
	c0-2.499,1.606-4.194,4.194-4.194c2.499,0,4.194,1.606,4.194,4.194v92.986h29.092V136.623c0-22.934-18.74-41.585-41.585-41.585
	h-8.388l-24.451,38.015l-2.945-28.467l4.016-9.638H76.96l4.016,9.638l-3.123,28.645L53.401,95.038h-9.816
	C20.651,95.038,2,113.778,2,136.623v101.375h29.092v-92.986H31.002z M206,2c-26.467,0-48,21.533-48,48s21.533,48,48,48
	s48-21.533,48-48S232.467,2,206,2z M241.499,31.6H228.51c-1.069-4.947-2.57-9.518-4.472-13.495
	c-0.899-1.879-1.872-3.585-2.906-5.123C229.919,16.586,237.143,23.23,241.499,31.6z M246,50c0,3.888-0.568,7.644-1.607,11.2h-14.666
	c0.447-3.622,0.68-7.377,0.68-11.2c0-3.543-0.203-7.026-0.587-10.4h14.802C245.515,42.918,246,46.403,246,50z M206,88.666
	c-5.315,0-11.044-7.451-14.127-19.466h28.255C217.044,81.215,211.315,88.666,206,88.666z M190.332,61.2
	c-0.472-3.495-0.738-7.24-0.738-11.2c0-3.658,0.225-7.135,0.631-10.4h31.549c0.406,3.265,0.631,6.742,0.631,10.4
	c0,3.96-0.266,7.705-0.738,11.2H190.332z M166,50c0-3.597,0.485-7.082,1.38-10.4h14.802c-0.385,3.374-0.587,6.857-0.587,10.4
	c0,3.823,0.233,7.578,0.68,11.2h-14.666C166.568,57.644,166,53.888,166,50z M206,11.334c5.431,0,11.292,7.785,14.323,20.266h-28.647
	C194.708,19.119,200.569,11.334,206,11.334z M190.868,12.981c-1.034,1.539-2.007,3.244-2.906,5.123
	c-1.902,3.978-3.403,8.548-4.472,13.495h-12.989C174.857,23.23,182.081,16.586,190.868,12.981z M170.921,69.2h12.74
	c1.056,4.641,2.501,8.932,4.301,12.695c0.899,1.879,1.872,3.585,2.906,5.123C182.362,83.529,175.314,77.195,170.921,69.2z
	 M221.132,87.019c1.034-1.539,2.007-3.244,2.906-5.123c1.8-3.763,3.245-8.054,4.301-12.695h12.74
	C236.686,77.195,229.638,83.529,221.132,87.019z'
                              />
                            </svg>
                            <p className='pl-1'>Hybrid</p>
                          </div>
                        )}
                      </span>

                      <span className='select-none text-gray-500 text-sm'>
                        Salary: ${jobPost.salary_from} - ${jobPost.salary_to}
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <img
                        src={jobPost.Company?.CompanyLogo ? `http://localhost:5000/companyLogos/${jobPost.Company?.CompanyLogo.s3Key}` : grayLogo}
                        className='w-10 h-10  select-none object-contain object-center rounded-full border border-gray-300'
                      />

                      <div className='text-sm'>
                        <div className='font-medium select-none '>{jobPost.Company?.CompanyName}</div>
                        <div className='text-gray-500 select-none '>{jobPost.jobLocation}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className='text-center text-2xl font-semibold w-full my-10'>No jobs found!</h1>
              )}
            </div>

            {totalPages.length !== 0 ? (
              <div className={`${jobOpened ? 'border' : ''} flex items-center justify-center gap-4 py-10`}>
                {currentPage === 1 ? (
                  <button disabled className='border border-gray-200 p-3.5 rounded-full bg-gray-100 text-gray-400'>
                    <FaArrowLeft />
                  </button>
                ) : (
                  <button onClick={() => handlePageChange('prev')} className='border border-gray-300 p-3.5 rounded-full bg-gray-100 hover:bg-gray-300'>
                    <FaArrowLeft />
                  </button>
                )}
                <div id='slider' className='flex items-center gap-3'>
                  {totalPages.map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`border ${
                        page === currentPage ? 'border-fuchsia-700 bg-jobportal-pink text-white' : 'border-gray-300 bg-gray-100'
                      } p-3.5 rounded-lg hover:border-fuchsia-700 hover:bg-jobportal-pink hover:text-white`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                {currentPage === totalPages.length ? (
                  <button disabled className='border border-gray-200 p-3.5 rounded-full bg-gray-100 text-gray-400'>
                    <FaArrowRight />
                  </button>
                ) : (
                  <button onClick={() => handlePageChange('next')} className='border border-gray-300 p-3.5 rounded-full bg-gray-100 hover:bg-gray-300'>
                    <FaArrowRight />
                  </button>
                )}
              </div>
            ) : (
              <div className='h-3'></div>
            )}
          </div>
          <div className={`${jobOpened ? 'w-full md:w-2/3 pb-3' : 'w-0 hidden'} bg-gray-50 shadow-lg relative border transition-all flex relative`}>
            {currentJob ? (
              <>
                <div className='flex flex-col w-full gap-3'>
                  <div className='sticky top-0 bg-white flex flex-col w-full gap-3 shadow-lg px-10 py-6'>
                    <button
                      type='button'
                      className='flex items-center justify-center border rounded-full w-10 h-10 top-5 right-5 text-gray-500 border-gray-500 hover:bg-red-200 absolute'
                      onClick={() => {
                        closeJob();
                      }}
                    >
                      X
                    </button>
                    <h1 className='text-2xl font-semibold'>{currentJob['Job Position']?.position}</h1>
                    <hr className='w-full border border-1' />
                    <Link to={`/company/show/${currentJob?.CompanyID}`} className='w-fit p-2'>
                      <div className='flex items-center space-x-3'>
                        <img
                          src={currentJob.Company?.CompanyLogo ? `http://localhost:5000/companyLogos/${currentJob.Company?.CompanyLogo.s3Key}` : grayLogo}
                          className='w-10 h-10  select-none object-cover object-center rounded-full border border-gray-300'
                        />
                        <div className='text-sm'>
                          <div className='font-medium select-none underline'>{currentJob.Company?.CompanyName}</div>
                        </div>
                      </div>
                    </Link>
                    <div>{currentJob.jobLocation}</div>
                    <div>
                      ${currentJob.salary_from} - ${currentJob.salary_to} per hour
                    </div>
                    {errorMessage ? (
                      <section className='resetPassword__form-message-container resetPassword__form-error'>
                        <div className='resetPassword__form-message'>
                          <section>
                            <span>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='white'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <circle cx='12' cy='12' r='10'></circle>
                                <line x1='15' y1='9' x2='9' y2='15'></line>
                                <line x1='9' y1='9' x2='15' y2='15'></line>
                              </svg>
                            </span>
                            <div>{errorMessage}</div>
                          </section>
                        </div>
                      </section>
                    ) : (
                      <></>
                    )}
                    <div className='flex gap-3'>
                      {userData ? (
                        applied ? (
                          //if applied and logged in
                          <button className='bg-green-500 hover:bg-fuchsia-700 text-white rounded-lg font-semibold flex items-center'>
                            <div className='flex gap-2 pr-5 pl-5 pt-2 pb-2 items-center'>
                              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-8'>
                                <path
                                  fillRule='evenodd'
                                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <p className=''>Applied</p>
                            </div>
                          </button>
                        ) : (
                          <>
                            <button onClick={handleApplyClick} className='bg-jobportal-pink hover:bg-fuchsia-700 text-white rounded-lg font-semibold flex items-center'>
                              <div className='flex gap-2 pr-5 pl-5 pt-2 pb-2 items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-8'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                                  />
                                </svg>
                                <p className=''>Apply Now</p>
                              </div>
                            </button>
                            {saved ? (
                              <button onClick={() => removeSavedJob(currentJob.ID)} className={`bg-blue-500 text-white p-2 rounded ${animationClass}`}>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                                  />
                                </svg>
                              </button>
                            ) : (
                              <button onClick={handleSaveClick} className={`bg-gray-400 text-white p-2 rounded ${animationClass}`}>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                                  />
                                </svg>
                              </button>
                            )}

                            {liked ? (
                              <button onClick={() => removeLikedJob(currentJob.ID)} className={`bg-green-500 text-white p-2 rounded ${animationClass}`}>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='size-6'>
                                  <path d='M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z' />
                                </svg>
                              </button>
                            ) : (
                              <button onClick={handleLikeClick} className={`bg-gray-400 text-white p-2 rounded ${animationClass}`}>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                                  />
                                </svg>
                              </button>
                            )}
                          </>
                        )
                      ) : (
                        //if neither applied nor logged in
                        <button className='bg-jobportal-pink hover:bg-fuchsia-700 text-white rounded-lg font-semibold flex items-center'>
                          <div className='flex gap-2 pr-5 pl-5 pt-2 pb-2 items-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-8'>
                              <path
                                fillRule='evenodd'
                                d='M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <a href='http://localhost:5000/admin/login'>Sign in to Apply</a>
                          </div>
                        </button>
                      )}

                      {/* <button className='bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                          />
                        </svg>
                      </button> */}
                    </div>
                  </div>
                  <div className='px-10 py-5'>
                    <h3 className='text-xl font-semibold'>Location</h3>
                    <h3 className='mt-3 ml-3 text-lg'>{currentJob.jobLocation}</h3>
                  </div>
                  <hr />
                  <div className='px-10 py-5 flex gap-3 flex-col'>
                    <h3 className='text-xl font-semibold'>Company Info</h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Address: </span> {currentCompany?.address || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Company Email: </span> {currentCompany?.companyEmail || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Phone Number: </span> {currentCompany?.phoneNumber || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Website: </span> {currentCompany?.website || 'None specified'}
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Description: </span> {currentCompany?.description || 'None specified'}
                    </h3>
                  </div>
                  <hr />
                  <div className='px-10 py-5 flex gap-3 flex-col'>
                    <h3 className='text-xl font-semibold'>Job Details</h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Pay:</span> ${currentJob.salary_from} - ${currentJob.salary_to} per hour
                    </h3>
                    <h3 className='text-lg mt-3 ml-3'>
                      <span className='font-semibold mr-2'>Schedule:</span> <span className='capitalize'> {currentJob.interviewMethod} </span>
                    </h3>
                  </div>
                  <hr />
                  <div className='px-10 py-5 flex gap-3 flex-col'>
                    <h3 className='text-xl font-semibold'>Job Summary</h3>
                    <div
                      className='mt-3 text-gray-600 jobHtmlStyling'
                      dangerouslySetInnerHTML={{
                        __html: currentJob.jobSummary,
                      }}
                    ></div>
                  </div>
                  {/* <div className="px-10">
                    <button className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold">
                      Report Job
                    </button>
                  </div> */}
                </div>
              </>
            ) : (
              <h1 className='text-2xl font-semibold text-center'></h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindJobs;
