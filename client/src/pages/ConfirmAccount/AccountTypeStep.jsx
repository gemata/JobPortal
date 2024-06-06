import React from 'react';
import NavigationButtons from './NavigationButtons';
import illustration from '../../img/Illustration.svg';
import pricing from '../../img/pricing.svg';

const AccountTypeStep = ({ prevStep, nextStep, activeStep, maxSteps, selectedOption, setSelectedOption }) => {
  return (
    <div className='confirmAccount__step'>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
        <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Choose account type:</h1>
        <p style={{ fontSize: '16px' }}>Select type of account</p>
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
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
          <img src={illustration} className='border border-fuchsia-700' style={{ width: '200px', height: '275px', objectFit: 'cover', objectPosition: 'center center' }} />
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
          <img src={pricing} className='border border-fuchsia-700' style={{ width: '200px', height: '275px', objectFit: 'cover', objectPosition: 'center center' }} />
          <p style={{ paddingBottom: '1px' }}>Employer</p>
        </button>
      </div>
      <NavigationButtons prevStep={prevStep} nextStep={nextStep} activeStep={activeStep} maxSteps={maxSteps} />
    </div>
  );
};
export default AccountTypeStep;
