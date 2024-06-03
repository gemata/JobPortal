import React, { useState, useEffect } from 'react';
import UserModalImage from './UserModalImage';

export default function EditUserModal({ profileData, fetchData, setFetchData, refreshFile }) {
  const [file, setFile] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [lastModifiedDate, setLastModifiedDate] = useState(null);

  const [newEmail, setNewEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState(true);
  const [confirmPasswordInputType, setConfirmPasswordInputType] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setFile('');
    setPreviewUrl(null);
    setLastModifiedDate(null);
  }, [refreshFile]);

  useEffect(() => {
    if (profileData) {
      setFirstName(profileData.firstName);
      setLastName(profileData.lastName);
      setNewEmail(profileData.email);
    }
  }, [profileData]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const modifiedDate = new Date(file.lastModified);

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setLastModifiedDate(modifiedDate.toLocaleString());
      };
      reader.readAsDataURL(file);
      setFile(file);
      setErrorMessage('');
    } else {
      setErrorMessage('Please select a valid image file.');
      setPreviewUrl(null);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const changePasswordInputType = () => {
    setPasswordInputType(!passwordInputType);
  };

  const changeConfirmPasswordInputType = () => {
    setConfirmPasswordInputType(!confirmPasswordInputType);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userRequestBody = {
      id: profileData.id,
      firstName: firstName,
      lastName: lastName,
      email: newEmail,
      ...(showPassword && newPassword === confirmPassword && { password: newPassword }),
    };

    if (!firstName || !lastName || !newEmail) {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage('');
      return;
    }

    if (showPassword && newPassword !== confirmPassword) {
      setErrorMessage('Password and Confirm Password do not match!');
      setSuccessMessage('');
      return;
    }

    try {
      await updateUserDetails(userRequestBody);
      await updateUserImage();
      setErrorMessage('');
      setSuccessMessage('User info updated successfully');
      setFile('');
      setPreviewUrl('');
      setLastModifiedDate('');
      setFirstName('');
      setLastName('');
      setNewEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setFetchData(!fetchData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateUserDetails = async (body) => {
    console.log(body);
    const response = await fetch(`http://localhost:5000/api/users/${profileData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error);
    }
  };

  const updateUserImage = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('id', profileData.id);
      formData.append('file', file);

      const method = profileData.UserImage ? 'PUT' : 'POST';
      const endpoint = profileData.UserImage ? `http://localhost:5000/api/userImages/${profileData.UserImage.id}` : 'http://localhost:5000/api/userImages/';

      const imageResponse = await fetch(endpoint, {
        method: method,
        body: formData,
      });

      if (!imageResponse.ok) {
        const errorData = await imageResponse.json();
        throw new Error(errorData.error);
      }
    }
  };

  return (
    <>
      {profileData ? (
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
          <h1 className='font-semibold text-xl'>Edit User Information</h1>
          <hr />

          <UserModalImage profileData={profileData} file={file} previewUrl={previewUrl} lastModifiedDate={lastModifiedDate} handleImageChange={handleImageChange} />
          <hr />
          <h3 className='font-semibold text-lg'>Change First Name:</h3>
          <input type='text' className='rounded border-gray-400' value={firstName} onChange={handleFirstNameChange} />
          <hr />
          <h3 className='font-semibold text-lg'>Change Last Name:</h3>
          <input type='text' className='rounded border-gray-400' value={lastName} onChange={handleLastNameChange} />
          <hr />
          <h3 className='font-semibold text-lg'>Change Email:</h3>
          <input type='text' className='rounded border-gray-400' value={newEmail} onChange={handleEmailChange} />
          <hr />
          <h3 className='font-semibold text-lg'>Change Password:</h3>
          <div className={`${showPassword ? 'block' : 'hidden'} relative`}>
            <input type={passwordInputType ? 'password' : 'text'} className='w-full rounded border-gray-400' value={newPassword} onChange={handlePasswordChange} />
            <div className='absolute right-2 top-2'>
              <button type='button' onClick={changePasswordInputType}>
                {passwordInputType ? (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                    />
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className={`${showPassword ? 'block' : 'hidden'} relative`}>
            <input
              type={confirmPasswordInputType ? 'password' : 'text'}
              className={`${showPassword ? 'block' : 'hidden'} w-full rounded border-gray-400`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <div className='absolute right-2 top-2'>
              <button type='button' onClick={changeConfirmPasswordInputType}>
                {confirmPasswordInputType ? (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                    />
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button type='button' onClick={togglePasswordVisibility} className='my-2'>
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
          <hr />
          {errorMessage && (
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
      ) : (
        <></>
      )}
    </>
  );
}
