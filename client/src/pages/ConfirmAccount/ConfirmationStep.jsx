import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';

const ConfirmationStep = ({ prevStep, nextStep, activeStep, maxSteps, email, setEmail, password, setPassword, token }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkAccount = async () => {
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Email or password is missing!');
      return;
    }
    const requestBody = {
      email: email,
      password: password,
      token: token,
    };

    const response = await fetch('http://localhost:5000/api/pendingAccounts/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      setErrorMessage(errorResponse.error);
    } else {
      nextStep();
    }
  };

  return (
    <div className='confirmAccount__step'>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <img alt='logo' src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
        <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Confirm your account:</h1>
        <p style={{ fontSize: '16px' }}>Please enter your email and password</p>
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
          <p style={{ fontSize: '16px', marginTop: '40px' }}>
            Forgot your credentials? <br />
            You can always re-send a confirmation email <a href='http://localhost:5000/admin/login'>here</a>.
          </p>
        )}
      </div>
      <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: '43px' }}>
          <label htmlFor='email' style={{ marginBottom: '5px' }}>
            Email
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            tabIndex='-1'
            type='email'
            name='email'
            placeholder='Email'
            style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label htmlFor='password' style={{ marginBottom: '5px' }}>
            Password
          </label>
          <input
            value={password}
            onChange={handlePasswordChange}
            tabIndex='-1'
            type='password'
            name='password'
            placeholder='Password'
            style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
          />
        </div>
      </div>
      <NavigationButtons prevStep={prevStep} nextStep={nextStep} activeStep={activeStep} maxSteps={maxSteps} checkAccount={checkAccount} />
    </div>
  );
};

export default ConfirmationStep;
