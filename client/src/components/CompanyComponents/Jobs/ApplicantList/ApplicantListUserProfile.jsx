import React, { useState, useEffect } from 'react';
import EducationListItem from '../../../UserComponents/EducationListItem';
import WorkExperienceListItem from '../../../UserComponents/WorkExperienceListItem';

const ApplicantListUserProfile = ({ id }) => {
    const [userData, setUserData] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [userEducation, setUserEducation] = useState([]);
    const [userWork, setUserWork] = useState([]);

    useEffect(() => {
        
    }, []);


    return (
        <div className='container w-full'>
           <div className='profilebasics'>
                <div>
                    <img src="" alt="User Image" />
                </div>
                <div>
                    <p>First Name + Last Name</p>
                    <p>Email</p>
                    <p>Phone Number</p>
                    <p>Birthday</p>
                </div>
                <div>
                    <button type="button">
                        View Resume
                    </button>
                    <button type="button">
                        Drop Down Action Here
                    </button>
                </div>
           </div>

           <hr className='h-px my-2 bg-gray-300 border-0' />

            <div className='education'>
                {userEducation.map(education => (
                    <div className='flex flex-row gap-4 pt-1 w-full'>
                        <EducationListItem className='w-full' key={education.id} {...education} />
                    </div>
                ))}
            </div>

            <hr className='h-px my-2 bg-gray-300 border-0' />

            <div className='workexperience'>
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
