import React, { useState, useEffect } from 'react';

export default function CompanyProfileModal({ companyData, fetchData, setFetchData }) {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (companyData) {
      setAddress(companyData.CompanyProfile?.address);
      setEmail(companyData.CompanyProfile?.companyEmail);
      setWebsite(companyData.CompanyProfile?.website);
      setNumber(companyData.CompanyProfile?.phoneNumber);
      setDescription(companyData.CompanyProfile?.description);
    }
  }, [companyData]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      id: companyData.CompanyProfile.id,
      address: address,
      companyEmail: email,
      website: website,
      phoneNumber: number,
      description: description,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/companyProfiles/${companyData.CompanyProfile?.id}`, {
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
        setAddress('');
        setEmail('');
        setWebsite('');
        setNumber('');
        setDescription('');
        setErrorMessage('');
        setFetchData(!fetchData);
        setSuccessMessage('Profile info saved successfully.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setErrorMessage('An error occurred while saving education details.');
    }
  };

  return (
    <>
      {companyData ? (
        <>
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
            <h1 className='font-semibold text-xl'>Edit Company Profile</h1>
            <hr />

            <h3 className='font-semibold text-lg'>Change Address:</h3>
            <input type='text' className='rounded border-gray-400' value={address} onChange={handleAddressChange} />
            <hr />

            <h3 className='font-semibold text-lg'>Change Company Email:</h3>
            <input type='text' className='rounded border-gray-400' value={email} onChange={handleEmailChange} />
            <hr />

            <h3 className='font-semibold text-lg'>Change Website:</h3>
            <input type='text' className='rounded border-gray-400' value={website} onChange={handleWebsiteChange} />
            <hr />

            <h3 className='font-semibold text-lg'>Change Phone Number:</h3>
            <input type='text' className='rounded border-gray-400' value={number} onChange={handleNumberChange} />
            <hr />

            <h3 className='font-semibold text-lg'>Change Description:</h3>
            <textarea className='rounded border-gray-400 pb-4 min-h-28' value={description} onChange={handleDescriptionChange}></textarea>
            <hr />
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
