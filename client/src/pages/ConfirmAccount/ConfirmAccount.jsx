import React, { useState, useEffect } from 'react';
import { redirect, useLocation } from 'react-router-dom';
import ConfirmationStep from './ConfirmationStep';
import AccountTypeStep from './AccountTypeStep';
import NameStep from './NameStep';
import BasicInfoStep from './BasicInfoStep';
import ProfileImageStep from './ProfileImageStep';
import FinalStep from './FinalStep';

const ConfirmAccount = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('User');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [accountName, setAccountName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [siteUrl, setSiteUrl] = useState('');
  const [address, setAddress] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');

  const [file, setFile] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [lastModifiedDate, setLastModifiedDate] = useState(null);
  const [imageError, setImageError] = useState('');

  const maxSteps = 6;
  const location = useLocation();

  useEffect(() => {
    setAccountName('');
    setLastName('');
    setDescription('');
    setMonth('');
    setDay('');
    setYear('');
    setGender('');
    setPhoneNumber('');
    setSiteUrl('');
    setAddress('');
    setCompanyEmail('');
  }, [selectedOption]);

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
      setImageError('');
    } else {
      setImageError('Please select a valid image file.');
      setPreviewUrl(null);
    }
  };

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let requestBody = {
      email: email,
      password: password,
    };

    if (selectedOption === 'User') {
      requestBody = {
        ...requestBody,
        firstName: accountName,
        lastName: lastName,
        dateOfBirth: new Date(year, month - 1, day).toISOString(),
        sex: gender,
        phoneNumber: phoneNumber,
      };
    } else {
      requestBody = {
        ...requestBody,
        Email: email,
        CompanyName: accountName,
        description: description,
        phoneNumber: phoneNumber,
        website: siteUrl,
        address: address,
        companyEmail: companyEmail,
      };
    }

    const response = await fetch(`http://localhost:5000/api/${selectedOption === 'User' ? 'users' : 'companies'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Failed to create account:', errorResponse);
    } else {
      const responseMessage = await response.json();
      const account = responseMessage;

      requestBody = {
        ...requestBody,
        CompanyID: account.ID,
        UserId: account.id,
      };

      const profileResponse = await fetch(`http://localhost:5000/api/${selectedOption === 'User' ? 'userprofiles' : 'companyprofiles'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!profileResponse.ok) {
        const errorResponse = await profileResponse.json();
        console.error('Failed to add profile info:', errorResponse);
      } else {
        if (file) {
          const formData = new FormData();
          formData.append('id', selectedOption === 'User' ? account.id : account.ID);
          formData.append('file', file);

          console.log(formData);

          const imageResponse = await fetch(`http://localhost:5000/api/${selectedOption === 'User' ? 'userimages' : 'companylogos'}`, {
            method: 'POST',
            body: formData,
          });

          if (!imageResponse.ok) {
            const errorResponse = await imageResponse.json();
            console.error('Failed to add profile image:', errorResponse);
          }
        }
      }
    }
    window.location.href = 'http://localhost:5000/admin/login';
  };

  const nextStep = () => {
    setActiveStep((prevStep) => (prevStep < maxSteps ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setActiveStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const getTransformStyle = () => {
    const translateX = -(activeStep - 1) * 100;
    return {
      transform: `translateX(${translateX}%)`,
      transition: 'transform 0.3s ease-in-out',
      display: 'flex',
      height: '100%',
    };
  };

  return (
    <>
      <div className='confirmAccount__wrapper' style={{ overflow: 'hidden', width: '100%' }}>
        <div style={{ overflow: 'hidden', width: '1040px', height: '405px', borderRadius: '28px' }}>
          <div className='confirmAccount__container' style={getTransformStyle()}>
            <ConfirmationStep
              prevStep={prevStep}
              nextStep={nextStep}
              activeStep={activeStep}
              maxSteps={maxSteps}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              token={token}
            />
            <AccountTypeStep
              prevStep={prevStep}
              nextStep={nextStep}
              activeStep={activeStep}
              maxSteps={maxSteps}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <NameStep
              prevStep={prevStep}
              nextStep={nextStep}
              activeStep={activeStep}
              maxSteps={maxSteps}
              selectedOption={selectedOption}
              accountName={accountName}
              setAccountName={setAccountName}
              lastName={lastName}
              setLastName={setLastName}
              description={description}
              setDescription={setDescription}
            />
            <BasicInfoStep
              prevStep={prevStep}
              nextStep={nextStep}
              activeStep={activeStep}
              maxSteps={maxSteps}
              selectedOption={selectedOption}
              setMonth={setMonth}
              day={day}
              setDay={setDay}
              year={year}
              setYear={setYear}
              setGender={setGender}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              siteUrl={siteUrl}
              setSiteUrl={setSiteUrl}
              address={address}
              setAddress={setAddress}
              companyEmail={companyEmail}
              setCompanyEmail={setCompanyEmail}
            />
            <ProfileImageStep
              prevStep={prevStep}
              nextStep={nextStep}
              activeStep={activeStep}
              maxSteps={maxSteps}
              selectedOption={selectedOption}
              imageError={imageError}
              handleImageChange={handleImageChange}
              previewUrl={previewUrl}
              lastModifiedDate={lastModifiedDate}
              file={file}
            />
            <FinalStep prevStep={prevStep} nextStep={nextStep} activeStep={activeStep} maxSteps={maxSteps} handleFormSubmit={handleFormSubmit} />
          </div>
          <div style={{ textAlign: 'right', position: 'absolute', display: 'flex', justifyContent: 'flex-end', gap: '10px', padding: '10px 20px' }}>
            <a href='#'>Help</a>
            <a href='#'>Privacy</a>
            <a href='#'>Terms</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmAccount;
