import React, { useState, useEffect } from 'react';

const NavigationButtons = ({ prevStep, nextStep, activeStep, maxSteps, handleFormSubmit, checkAccount, checkName }) => {
  const [showPrevious, setShowPrevious] = useState(false);

  useEffect(() => {
    if (activeStep >= 3) {
      const timer = setTimeout(() => {
        setShowPrevious(true);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setShowPrevious(false);
    }
  }, [activeStep]);

  return (
    <>
      <button
        className='confirmAccount__button'
        tabIndex='-1'
        onClick={prevStep}
        disabled={activeStep < 3}
        style={{ position: 'absolute', bottom: '36px', left: '36px', display: showPrevious ? 'block' : 'none' }}
      >
        Previous
      </button>
      <button
        className='confirmAccount__button'
        tabIndex='-1'
        onClick={checkAccount ? checkAccount : checkName ? checkName : nextStep}
        disabled={activeStep === maxSteps}
        style={{ position: 'absolute', bottom: '36px', right: '36px', display: activeStep === maxSteps ? 'none' : 'block' }}
      >
        Next
      </button>
      {handleFormSubmit && (
        <button
          className='confirmAccount__button'
          tabIndex='-1'
          onClick={handleFormSubmit}
          style={{ position: 'absolute', bottom: '36px', right: '36px', display: activeStep === maxSteps ? 'block' : 'none' }}
        >
          Done
        </button>
      )}
    </>
  );
};

export default NavigationButtons;
