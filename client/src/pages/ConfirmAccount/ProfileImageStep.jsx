import React from 'react';
import NavigationButtons from './NavigationButtons';

const ProfileImageStep = ({ prevStep, nextStep, activeStep, maxSteps, imageError, handleImageChange, previewUrl, lastModifiedDate, file }) => {
  return (
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
            Help other see your brand <br /> by including an (optional) image
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
          {previewUrl && (
            <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <img
                src={previewUrl}
                style={{
                  width: '125px',
                  height: '125px',
                  objectFit: 'cover',
                  border: '1px solid #ccc',
                }}
              />
              <div style={{ width: '125px', fontSize: '12px', marginTop: '10px' }}>{file ? `${file.name} - ${lastModifiedDate}` : 'No file uploaded'}</div>
            </div>
          )}
        </div>
      </div>
      <NavigationButtons prevStep={prevStep} nextStep={nextStep} activeStep={activeStep} maxSteps={maxSteps} />
    </div>
  );
};
export default ProfileImageStep;
