import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import grayLogo from '../../img/grayLogo.png';

export default function CompanyShow({ userData }) {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState('');
  const [jobPosts, setJobPosts] = useState('');

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/companies/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCompanyData(data);
        });

      fetch(`http://localhost:5000/api/jobposts/company/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setJobPosts(data);
        });
    }
  }, [id]);

  return (
    <>
      <section className='bg-gray-100 pb-8'>
        {companyData?.message ? (
          <div className='flex items-center jusify-center' style={{ minHeight: '70vh' }}>
            <h1 className='text 2xl font-semibold w-full text-center'>Company not found</h1>
          </div>
        ) : (
          <>
            <section className='bg-gray-100'>
              <div className='max-w-[1200px] m-auto'>
                <div className='flex px-4 pt-8 gap-[12px] flex-wrap'>
                  <div className='flex flex-col w-full md:w-[400px] gap-4'>
                    <div className='bg-white shadow-lg w-full p-5 rounded-lg flex items-center justify-between gap-4'>
                      <div className='flex items-center gap-4'>
                        <img
                          src={companyData.CompanyLogo ? `http://localhost:5000/companyLogos/${companyData.CompanyLogo.s3Key}` : grayLogo}
                          className='object-center object-cover rounded-full border h-16 w-16'
                        />
                        <div>
                          <h3 className='text-lg font-semibold'>{companyData.CompanyName}</h3>
                          <p>{companyData.Email}</p>
                        </div>
                      </div>
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
                  </div>
                  <div className='bg-white shadow-lg w-full md:max-w-[calc(100%-412px)] p-5 rounded-lg flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-semibold text-xl'>Company Information</h1>
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
                  </div>
                </div>
                <div className='px-4 mt-7'>
                  <div className='bg-white shadow-lg w-full p-5 rounded-lg'>
                    <h1 className='font-semibold text-2xl mb-5'>Company Job Postings</h1>
                    <hr />
                    <div className={`applicantListItem flex items-center justify-between gap-5 w-full p-0 mt-10 mb-2`}>
                      <div className='flex items-start gap-10 w-full pl-3 pr-5'>
                        <p className='text-gray-600 font-bold w-1/24'>Nr</p>
                        <p className='text-gray-600 font-bold w-3/12'> Details</p>
                        <p className='text-gray-600 w-1/12 font-bold'>Start Date</p>
                        <p className='text-gray-600 w-1/12 font-bold'>End Date</p>
                        <p className='text-gray-600 w-2/12 font-bold'>Salary</p>
                        <p className='text-gray-600 w-2/12 font-bold'>Job Location</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                      {jobPosts.length > 0 ? (
                        jobPosts.map((jobPost, index) => (
                          <Link
                            to={`/jobs/show/${jobPost.ID}`}
                            className='jobItem flex items-center justify-between gap-5 rounded-lg w-full pt-2 pb-2 border bg-white hover:bg-gray-100'
                          >
                            <div className='flex items-center  gap-10 w-full pl-5 pr-5'>
                              <p className='text-gray-600 font-bold w-1/24'>{jobPost.ID}</p>
                              <div className='text-left w-3/12'>
                                <h5 className='text-jobportal-primary font-bold'>{jobPost.positionName}</h5>
                                <p className='text-gray-600'>{jobPost.jobLocation}</p>
                                <p className='text-gray-600'>Posted: {formatDate(jobPost.createdAt)}</p>
                              </div>

                              <p className='text-gray-600 w-1/12 '>{formatDate(jobPost.startAt)}</p>
                              <p className='text-gray-600 w-1/12 '>{formatDate(jobPost.endAt)}</p>
                              <p className='text-gray-600 w-2/12 '>{jobPost.salary_from + '$ - ' + jobPost.salary_to + '$'}</p>
                              <p className='text-gray-600 w-2/12 capitalize'>{jobPost.interviewMethod}</p>
                            </div>
                          </Link>
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
        )}
      </section>
    </>
  );
}
