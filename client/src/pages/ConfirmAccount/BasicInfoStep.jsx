import React from 'react';
import NavigationButtons from './NavigationButtons';

const BasicInfoStep = ({
  prevStep,
  nextStep,
  activeStep,
  maxSteps,
  selectedOption,
  setMonth,
  day,
  setDay,
  year,
  setYear,
  setGender,
  phoneNumber,
  setPhoneNumber,
  siteUrl,
  setSiteUrl,
  address,
  setAddress,
  companyEmail,
  setCompanyEmail,
}) => {
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSiteUrlChange = (e) => {
    setSiteUrl(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCompanyEmailChange = (e) => {
    setCompanyEmail(e.target.value);
  };

  return (
    <>
      <div className='confirmAccount__step'>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img src='mainLogo.png' style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
          <h1 style={{ fontSize: '44px', width: '66%', lineHeight: '1.18181818' }}>Basic information:</h1>
          <p style={{ fontSize: '16px' }}>
            Enter some (optional) info. <br />
            You can always change them later
          </p>
        </div>
        {selectedOption === 'User' ? (
          <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', marginTop: '43px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
                <label htmlFor='month' style={{ marginBottom: '5px' }}>
                  Month
                </label>
                <select
                  onChange={handleMonthChange}
                  tabIndex='-1'
                  name='Month'
                  style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px', background: 'white' }}
                >
                  <option value=''>Month</option>
                  <option value='01'>January</option>
                  <option value='02'>February</option>
                  <option value='03'>March</option>
                  <option value='04'>April</option>
                  <option value='05'>May</option>
                  <option value='06'>June</option>
                  <option value='07'>July</option>
                  <option value='08'>August</option>
                  <option value='09'>September</option>
                  <option value='10'>October</option>
                  <option value='11'>November</option>
                  <option value='12'>December</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
                <label htmlFor='day' style={{ marginBottom: '5px' }}>
                  Day
                </label>
                <input
                  value={day}
                  onChange={handleDayChange}
                  tabIndex='-1'
                  type='text'
                  name='day'
                  placeholder='Day'
                  style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
                <label htmlFor='year' style={{ marginBottom: '5px' }}>
                  Year
                </label>
                <input
                  value={year}
                  onChange={handleYearChange}
                  tabIndex='-1'
                  type='text'
                  name='year'
                  placeholder='Year'
                  style={{ width: '90%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', width: '97%', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <label htmlFor='gender' style={{ marginBottom: '5px' }}>
                  Gender
                </label>
                <select
                  onChange={handleGenderChange}
                  tabIndex='-1'
                  name='gender'
                  style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px', background: 'white' }}
                >
                  <option value=''>Gender</option>
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                  <option value='NB'>Non-binary</option>
                  <option value='PNS'>Prefer not to say</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <label htmlFor='phone-number' style={{ marginBottom: '5px' }}>
                  Phone number
                </label>
                <input
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  tabIndex='-1'
                  type='text'
                  name='phone-number'
                  placeholder='Phone number'
                  style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', width: '90%', gap: '20px', marginTop: '43px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                  <label htmlFor='site-url' style={{ marginBottom: '5px' }}>
                    Website URL
                  </label>
                  <input
                    value={siteUrl}
                    onChange={handleSiteUrlChange}
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
                    value={address}
                    onChange={handleAddressChange}
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
                    value={companyEmail}
                    onChange={handleCompanyEmailChange}
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
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    tabIndex='-1'
                    type='text'
                    name='phone-number'
                    placeholder='Phone number'
                    style={{ width: '100%', padding: '18px', outline: '1px solid purple', borderRadius: '4px' }}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <NavigationButtons prevStep={prevStep} nextStep={nextStep} activeStep={activeStep} maxSteps={maxSteps} />
      </div>
    </>
  );
};

export default BasicInfoStep;
