import React from 'react';
import NavigationButtons from './NavigationButtons';

const FinalStep = ({ prevStep, nextStep, activeStep, maxSteps, handleFormSubmit }) => {
  return (
    <div className='confirmAccount__step'>
      Step 4: Confirmation complete
      <NavigationButtons prevStep={prevStep} nextStep={nextStep} activeStep={activeStep} maxSteps={maxSteps} handleFormSubmit={handleFormSubmit} />
    </div>
  );
};
export default FinalStep;
