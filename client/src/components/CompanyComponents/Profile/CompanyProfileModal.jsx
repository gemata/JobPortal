import React, { useState, useEffect } from 'react';

export default function CompanyProfileModal({ companyData }) {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (companyData) {
      console.log(companyData.CompanyProfile);
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
        method: 'POST',
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
        setSuccessMessage('Profile info saved successfully.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setErrorMessage('An error occurred while saving education details.');
    }
    console.log(requestBody);
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
