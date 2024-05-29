import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EducationListItem from '../../../UserComponents/EducationListItem';
import WorkExperienceListItem from '../../../UserComponents/WorkExperienceListItem';
import axios from 'axios'

const ApplicantListUserProfile = ({ id }) => {
    const [userData, setUserData] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [userEducation, setUserEducation] = useState([]);
    const [userWork, setUserWork] = useState([]);

    useEffect(() => {
        // Fetch user data
        axios.get(`http://localhost:5000/api/users/${id}`)
            .then(response => setUserData(response.data))
            .catch(error => console.error('Error fetching user data:', error));

        // Fetch user profile
        axios.get(`http://localhost:5000/api/userprofiles/${id}`)
            .then(response => setUserProfile(response.data))
            .catch(error => console.error('Error fetching user profile:', error));

        // Fetch user image
        axios.get(`http://localhost:5000/api/userimages/${id}`)
            .then(response => setUserImage(response.data))
            .catch(error => console.error('Error fetching user image:', error));

        // Fetch user education
        axios.get(`http://localhost:5000/api/educations/user/${id}`)
            .then(response => setUserEducation(response.data))
            .catch(error => console.error('Error fetching user education:', error));

        // Fetch user work experience
        axios.get(`http://localhost:5000/api/workexperiences/user/${id}`)
            .then(response => setUserWork(response.data))
            .catch(error => console.error('Error fetching user work experience:', error));
    }, [id]);

    return (
        <div className='container w-full'>
            <div className='profilebasics flex flex-row rounded-lg bg-white border-2 border-grey-400 justify-between gap-5 pt-1'>
                <div className='profileBasics flex flex-row justify-between gap-5 p-5'>
                    <div className='w-56 h-56 bg-white rounded-lg border-gray-300 border-2 shadow-lg '>
                        <img src="" alt="User Image" />
                    </div>
                    <div className='pr-5'>
                        <p className='font-bold text-base text-xl text-gray-600'>First Name + Last Name</p>
                        <p>Email</p>
                        <p>Phone Number</p>
                        <p>Birthday</p>
                    </div>
                </div>
                <div className='actionbuttons flex items-start gap-5 p-5'>
                   
                   {/* Replace with reume link of the user */}
                    <Link to=''>
                        <button type='button' className='inline-flex text-white bg-jobportal-pink hover:opacity-90 border-2 border-jobportal-darkpink font-bold rounded-lg text-base px-5 py-2.5 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            <p className='ml-1'>View Resume</p>
                        </button>
                    </Link>
                    <button type='button' className=''>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
                            />
                        </svg>
                    </button>
                </div>

            </div>
            
            

            <div className='education pt-2'>
                <div className='text-left text-l font-bold rounded-tl-lg rounded-tr-lg  w-1/6 pt-2 pr-2 pl-2 border-2 bg-white text-gray-600 border-gray-300'>
                    <p className='pl-2 pb-1 text-lg'>Education </p>
                </div>
                <hr className='h-px bg-gray-300 border-0' />
                {userEducation.map(education => (
                    <div className='flex flex-row gap-4 pt-1 w-full'>
                        <EducationListItem className='w-full' key={education.id} {...education} />
                    </div>
                ))}
            </div>

            

            <div className='workexperience pt-2'>
                <div className='text-left text-l font-bold rounded-tl-lg rounded-tr-lg  w-1/6 pt-2 pr-2 pl-2 border-2 bg-white text-gray-600 border-gray-300'>
                    <p className='pl-2 pb-1 text-lg'>Work Experience </p>
                </div>
                <hr className='h-px my-0 bg-gray-300 border-0' />
                {userWork.map(work => (
                    <div className='flex flex-row gap-4 pt-1 w-full'>
                        <WorkExperienceListItem className='w-full' key={work.id} {...work} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ApplicantListUserProfile;
