import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';

const NameStep = ({ prevStep, nextStep, activeStep, maxSteps, selectedOption, accountName, setAccountName, lastName, setLastName, description, setDescription }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setAccountName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const checkName = () => {
    setErrorMessage('');

    if (!accountName) {
      setErrorMessage('Please enter a name');
      return;
    }
    nextStep();
  };

  return (
    <div className='confirmAccount__step'>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
        <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Create your account:</h1>
        {errorMessage ? (
          <section className='resetPassword__form-message-container resetPassword__form-error' style={{ width: '90%' }}>
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
          <p style={{ fontSize: '16px' }}>Enter your {selectedOption === 'Company' ? 'company' : ''} name</p>
        )}
      </div>
      <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: '43px' }}>
          <label htmlFor='name' style={{ marginBottom: '5px' }}>
            {selectedOption === 'Company' ? 'Company Name' : 'First Name'}
          </label>
          <input
            tabIndex='-1'
            type='text'
            name='name'
            placeholder={selectedOption === 'Company' ? 'Company Name' : 'First Name'}
            style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
            value={accountName}
            onChange={handleNameChange}
          />
        </div>
        {selectedOption === 'User' ? (
          <>
            <div style={{ flexDirection: 'column', alignItems: 'flex-start', display: 'flex' }}>
              <label htmlFor='last-name' style={{ marginBottom: '5px' }}>
                Last Name (optional)
              </label>
              <input
                tabIndex='-1'
                type='text'
                name='last-name'
                placeholder='Last Name (optional)'
                style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </>
        ) : (
          <>
            <div style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', display: 'flex' }}>
              <label htmlFor='description' style={{ marginBottom: '5px' }}>
                Short Description (optional)
              </label>
              <input
                tabIndex='-1'
                type='text'
                name='description'
                placeholder='Short Description (optional)'
                style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          </>
        )}
      </div>
      <NavigationButtons prevStep={prevStep} nextStep={nextStep} activeStep={activeStep} maxSteps={maxSteps} checkName={checkName} />
    </div>
  );
};
export default NameStep;
