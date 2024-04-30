import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmAccount = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('User');
  const maxSteps = 6;
  const location = useLocation();
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [lastModifiedDate, setLastModifiedDate] = useState('');
  const [imageError, setImageError] = useState('');

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      setFileName(file.name);
      setLastModifiedDate(new Date(file.lastModified).toLocaleDateString());

      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };

      setImageError('');

      reader.readAsDataURL(file);
    } else {
      setImageError('Please provide an image');
      setFileName('');
      setLastModifiedDate('');
      setImagePreviewUrl('grayLogo.png');
    }
  };

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    // Add your submission logic here
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
            <div className='confirmAccount__step'>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Confirm your account:</h1>
                <p style={{ fontSize: '16px' }}>Please enter your email and password</p>
                <p style={{ fontSize: '16px', marginTop: '40px' }}>
                  Forgot your credentials? <br />
                  You can always re-send a confirmation email <a href='http://localhost:5000/admin/login'>here</a>.
                </p>
              </div>
              <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: '43px' }}>
                  <label htmlFor='email' style={{ marginBottom: '5px' }}>
                    Email
                  </label>
                  <input tabIndex='-1' type='email' name='email' placeholder='Email' style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <label htmlFor='password' style={{ marginBottom: '5px' }}>
                    Password
                  </label>
                  <input
                    tabIndex='-1'
                    type='password'
                    name='password'
                    placeholder='Password'
                    style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                  />
                </div>
              </div>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={nextStep}
                disabled={activeStep === maxSteps}
                style={{ position: 'absolute', bottom: '36px', right: '36px' }}
              >
                Next
              </button>
            </div>
            <div className='confirmAccount__step'>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Choose account type:</h1>
                <p style={{ fontSize: '16px' }}>Select type of account</p>
              </div>
              <div style={{ display: 'flex', gap: '50px' }}>
                <button
                  tabIndex='-1'
                  type='button'
                  onClick={() => setSelectedOption('User')}
                  style={{
                    height: '310px',
                    padding: '5px',
                    borderRadius: '5px',
                    outline: selectedOption === 'User' ? '2px solid violet' : 'none',
                    background: selectedOption === 'User' ? '#ead3ed' : 'none',
                  }}
                >
                  <img src='mainLogo.png' style={{ width: '200px', height: '275px', objectFit: 'cover', objectPosition: 'center center' }} />
                  <p style={{ paddingBottom: '1px' }}>Employee</p>
                </button>
                <button
                  tabIndex='-1'
                  type='button'
                  onClick={() => setSelectedOption('Company')}
                  style={{
                    height: '310px',
                    padding: '5px',
                    borderRadius: '5px',
                    outline: selectedOption === 'Company' ? '2px solid violet' : 'none',
                    background: selectedOption === 'Company' ? '#ead3ed' : 'none',
                  }}
                >
                  <img src='mainLogo.png' style={{ width: '200px', height: '275px', objectFit: 'cover', objectPosition: 'center center' }} />
                  <p style={{ paddingBottom: '1px' }}>Employer</p>
                </button>
              </div>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={prevStep}
                disabled={activeStep === 1}
                style={{ position: 'absolute', bottom: '36px', left: '36px' }}
              >
                Previous
              </button>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={nextStep}
                disabled={activeStep === maxSteps}
                style={{ position: 'absolute', bottom: '36px', right: '36px' }}
              >
                Next
              </button>
            </div>
            <div className='confirmAccount__step'>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Create your account:</h1>
                <p style={{ fontSize: '16px' }}>Enter your {selectedOption === 'Company' ? 'company' : ''} name</p>
              </div>
              <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: '43px' }}>
                  <label htmlFor='first-name' style={{ marginBottom: '5px' }}>
                    {selectedOption === 'Company' ? 'Company Name' : 'First Name'}
                  </label>
                  <input
                    tabIndex='-1'
                    type='text'
                    name='first-name'
                    placeholder={selectedOption === 'Company' ? 'Company Name' : 'First Name'}
                    style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'flex-start', display: selectedOption === 'Company' ? 'none' : 'flex' }}>
                  <label htmlFor='last-name' style={{ marginBottom: '5px' }}>
                    Last Name (optional)
                  </label>
                  <input
                    tabIndex='-1'
                    type='text'
                    name='last-name'
                    placeholder='Last Name (optional)'
                    style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', display: selectedOption === 'Company' ? 'flex' : 'none' }}>
                  <label htmlFor='description' style={{ marginBottom: '5px' }}>
                    Short Description
                  </label>
                  <input
                    tabIndex='-1'
                    type='text'
                    name='description'
                    placeholder='Short Description'
                    style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                  />
                </div>
              </div>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={prevStep}
                disabled={activeStep === 1}
                style={{ position: 'absolute', bottom: '36px', left: '36px' }}
              >
                Previous
              </button>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={nextStep}
                disabled={activeStep === maxSteps}
                style={{ position: 'absolute', bottom: '36px', right: '36px' }}
              >
                Next
              </button>
            </div>
            <div className='confirmAccount__step' style={{ display: selectedOption === 'Company' ? 'none' : 'flex' }}>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Basic information:</h1>
                <p style={{ fontSize: '16px' }}>
                  Enter your birthday and gender. <br />
                  All this information is optional and <br />
                  you can always change them later
                </p>
              </div>
              <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', marginTop: '43px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <label htmlFor='month' style={{ marginBottom: '5px' }}>
                      Month
                    </label>
                    <input tabIndex='-1' type='text' name='Month' placeholder='Month' style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <label htmlFor='day' style={{ marginBottom: '5px' }}>
                      Day
                    </label>
                    <input tabIndex='-1' type='text' name='day' placeholder='Day' style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <label htmlFor='year' style={{ marginBottom: '5px' }}>
                      Year
                    </label>
                    <input tabIndex='-1' type='text' name='year' placeholder='Year' style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', width: '97%', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                    <label htmlFor='gender' style={{ marginBottom: '5px' }}>
                      Gender
                    </label>
                    <input
                      tabIndex='-1'
                      type='text'
                      name='gender'
                      placeholder='Gender'
                      style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                    <label htmlFor='phone-number' style={{ marginBottom: '5px' }}>
                      Phone number
                    </label>
                    <input
                      tabIndex='-1'
                      type='text'
                      name='phone-number'
                      placeholder='Phone number'
                      style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                    />
                  </div>
                </div>
              </div>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={prevStep}
                disabled={activeStep === 1}
                style={{ position: 'absolute', bottom: '36px', left: '36px' }}
              >
                Previous
              </button>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={nextStep}
                disabled={activeStep === maxSteps}
                style={{ position: 'absolute', bottom: '36px', right: '36px' }}
              >
                Next
              </button>
            </div>
            <div className='confirmAccount__step' style={{ display: selectedOption === 'Company' ? 'flex' : 'none' }}>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Basic information:</h1>
                <p style={{ fontSize: '16px' }}>
                  Enter some (optional) company info. <br />
                  You can always change them later
                </p>
              </div>
              <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', width: '90%', gap: '20px', marginTop: '43px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                    <label htmlFor='site-url' style={{ marginBottom: '5px' }}>
                      Website URL
                    </label>
                    <input
                      tabIndex='-1'
                      type='text'
                      name='site-url'
                      placeholder='Website URL'
                      style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                    <label htmlFor='address' style={{ marginBottom: '5px' }}>
                      Address
                    </label>
                    <input
                      tabIndex='-1'
                      type='text'
                      name='address'
                      placeholder='Address'
                      style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', width: '90%', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                    <label htmlFor='company-email' style={{ marginBottom: '5px' }}>
                      Company Email
                    </label>
                    <input
                      tabIndex='-1'
                      type='text'
                      name='company-email'
                      placeholder='Company Email'
                      style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                    <label htmlFor='phone-number' style={{ marginBottom: '5px' }}>
                      Phone number
                    </label>
                    <input
                      tabIndex='-1'
                      type='text'
                      name='phone-number'
                      placeholder='Phone number'
                      style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                    />
                  </div>
                </div>
              </div>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={prevStep}
                disabled={activeStep === 1}
                style={{ position: 'absolute', bottom: '36px', left: '36px' }}
              >
                Previous
              </button>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={nextStep}
                disabled={activeStep === maxSteps}
                style={{ position: 'absolute', bottom: '36px', right: '36px' }}
              >
                Next
              </button>
            </div>
            <div className='confirmAccount__step'>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Add a profile image:</h1>
                {imageError ? (
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
                        <div>{imageError}</div>
                      </section>
                    </div>
                  </section>
                ) : (
                  <p style={{ fontSize: '16px' }}>
                    Help other see your brand <br /> by including an image
                  </p>
                )}
              </div>
              <div style={{ width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '25px' }}>
                  <label
                    htmlFor='file-upload'
                    style={{
                      width: '275px',
                      height: '275px',
                      border: '1px dashed black',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '6px 12px',
                      cursor: 'pointer',
                      color: '#555',
                    }}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15'
                      />
                    </svg>
                    <span style={{ marginLeft: '5px' }}>Upload image</span>
                  </label>
                  <input tabIndex='-1' id='file-upload' type='file' style={{ display: 'none' }} onChange={handleImageChange} />
                  {imagePreviewUrl && (
                    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                      <img
                        src={imagePreviewUrl}
                        style={{
                          width: '125px',
                          height: '125px',
                          objectFit: 'cover',
                          border: '1px solid #ccc',
                        }}
                      />
                      <div style={{ width: '125px', fontSize: '12px', marginTop: '10px' }}>
                        {fileName == '' ? 'Non' : fileName} - {lastModifiedDate == '' ? 'Supported File' : lastModifiedDate}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={prevStep}
                disabled={activeStep === 1}
                style={{ position: 'absolute', bottom: '36px', left: '36px' }}
              >
                Previous
              </button>
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={nextStep}
                disabled={activeStep === maxSteps}
                style={{ position: 'absolute', bottom: '36px', right: '36px' }}
              >
                Next
              </button>
            </div>
            <div className='confirmAccount__step'>
              Step 4: Confirmation complete
              <button
                className='confirmAccount__button'
                tabIndex='-1'
                onClick={prevStep}
                disabled={activeStep === 1}
                style={{ position: 'absolute', bottom: '36px', left: '36px' }}
              >
                Previous
              </button>
              <button className='confirmAccount__button' tabIndex='-1' type='button' style={{ position: 'absolute', bottom: '36px', right: '36px' }}>
                Done
              </button>
            </div>
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
