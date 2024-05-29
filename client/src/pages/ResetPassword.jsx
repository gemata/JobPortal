import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');

    if (confirmPassword !== password) {
      setErrorMessage('Passwords do not match!');
      return;
    }
    if (!confirmPassword || !password) {
      setErrorMessage('Please fill out all the fields!');
      return;
    }

    const decodedToken = decodeURIComponent(token);

    const requestBody = {
      token: decodedToken,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/users/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      setPassword('');
      setConfirmPassword('');

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Failed to update password');
      }
      setSuccessMessage('Password changed successfully!');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className='resetPassword__wrapper'>
        <section className='resetPassword__section'>
          <div className='resetPassword__decorative'>
            <h2 className='resetPassword__decorative-h2'>Welcome</h2>
            <p className='resetPassword__decorative-p'>Unlock Your Potential, Find Your Future!</p>
            <div className='resetPassword__list-container'>
              <ul>
                <li>Sign in to unlock exclusive job opportunities tailored for you.</li>
                <li>Connect with a diverse range of employers and expand your professional network.</li>
                <li>Access personalized tools and resources to streamline your job hunting process.</li>
              </ul>
            </div>
          </div>
          <form className='resetPassword__form' onSubmit={handleFormSubmit}>
            <div className='resetPassword__form-title' style={{ marginBottom: errorMessage || successMessage || token == null ? '0px' : '50px',alignItems:'center' }}>
              <h3>Reset Password</h3>
              <img src="http://localhost:5000/mainLogo.png" alt="Company Logo" style={{ margin: 0, width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            {token ? (
              <></>
            ) : (
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
                    <div>Please use the link provided on email</div>
                  </section>
                </div>
              </section>
            )}
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
            <div className='resetPassword__form-group'>
              <input type='hidden' value={token ?? undefined}></input>
              <label className='resetPassword__label'>New Password</label>
              <input className='resetPassword__input' type='password' placeholder='New Password' value={password} onChange={handlePasswordChange}></input>
            </div>
            <div className='resetPassword__form-group'>
              <label className='resetPassword__label'>Confirm Password</label>
              <input className='resetPassword__input' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
            </div>
            <div className='resetPassword__button-container'>
              <button className={`resetPassword__form-button resetPassword__form-button-submit ${!token ? 'disabled-button' : ''}`} disabled={!token}>
                Reset Password
              </button>
              <div className='resetPassword__orContainer'></div>
              <div className='resetPassword__button-group'>
                <a href='http://localhost:5000/admin/login' className='resetPassword__form-button resetPassword__form-button-link'>
                  Go to Login
                </a>
                <Link to='../' className='resetPassword__form-button resetPassword__form-button-link'>
                  Go to Main Page
                </Link>
              </div>
            </div>
          </form>
        </section>
        <p className='resetPassword__flavor-text'>
          © Job Horizon 2024. All rights reserved | <a href='#'>Privacy Policy</a> | Made with 💜 by our team
        </p>
      </div>
    </>
  );
};

export default ResetPassword;
