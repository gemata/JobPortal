import React, { useState, useEffect } from 'react';

export default function UserProfileModal({ profileData, fetchData, setFetchData }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const formatDateForInput = (dateString) => {
    if (!dateString) {
      return null;
    }

    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (profileData && profileData.UserProfile) {
      setPhoneNumber(profileData.UserProfile.phoneNumber);
      setGender(profileData.UserProfile.sex);
      setDateOfBirth(formatDateForInput(profileData.UserProfile.dateOfBirth));
    }
  }, [profileData]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      id: profileData.UserProfile.id,
      sex: gender,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
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
        setErrorMessage(responseData.error);
      } else {
        setPhoneNumber('');
        setGender('');
        setDateOfBirth('');
        setErrorMessage('');
        setSuccessMessage('Profile info saved successfully.');
        setFetchData(!fetchData);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setErrorMessage('An error occurred while saving profile details.');
    }
  };

  return (
    <>
      {profileData ? (
        <>
          <form onSubmit={handleFormSubmit} className='flex flex-col justify-between h-full'>
            <div>
              <h1 className='font-semibold text-xl mb-4'>Edit Company Profile</h1>
              <hr />
            </div>
            <div className='w-full'>
              <hr />
              <h3 className='font-semibold text-lg my-4'>Edit Phone Number:</h3>
              <input type='text' value={phoneNumber} onChange={handlePhoneNumberChange} className='rounded border-gray-400 mb-4 w-full' />
              <hr />
            </div>
            <div>
              <hr />
              <h3 className='font-semibold text-lg my-4'>Edit Date of birth:</h3>
              <input type='date' value={dateOfBirth} onChange={handleDateOfBirthChange} className='w-full px-3 py-2 border rounded mb-4' required />
              <hr />
            </div>
            <div>
              <hr />
              <h3 className='font-semibold text-lg my-4'>Edit Gender:</h3>
              <select value={gender} onChange={handleGenderChange} tabIndex='-1' name='gender' className='mb-4' style={{ width: '100%', borderRadius: '4px', background: 'white' }}>
                <option value=''>Choose gender</option>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
                <option value='NB'>Non-binary</option>
                <option value='PNS'>Prefer not to say</option>
              </select>
              <hr />
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
            {successMessage ? (
              <section className='resetPassword__form-message-container resetPassword__form-success'>
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
                        <polyline points='20 6 9 17 4 12'></polyline>
                      </svg>
                    </span>
                    <div>{successMessage}</div>
                  </section>
                </div>
              </section>
            ) : (
              <></>
            )}
            <button type='submit' className='bg-jobportal-pink text-white rounded py-2'>
              Save Changes
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
