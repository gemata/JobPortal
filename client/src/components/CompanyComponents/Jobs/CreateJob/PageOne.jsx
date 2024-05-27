import React from 'react';

export default function PageOne({ jobField, setJobField, jobPosition, setJobPosition, educationLevel, setEducationLevel }) {
  const handleJobFieldChange = (e) => {
    setJobField(e.target.value);
  };

  const handleJobPositionChange = (e) => {
    setJobPosition(e.target.value);
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  return (
    <>
      <label className='float-left' htmlFor='jobField'>
        Job Field
      </label>
      <select name='jobField' value={jobField} onChange={handleJobFieldChange} className='w-full p-3 px-5 rounded'>
        <option value=''>Select Job Field</option>
        <option value='tech'>Technology</option>
        <option value='finance'>Finance</option>
        <option value='healthcare'>Healthcare</option>
      </select>

      <label className='float-left' htmlFor='jobPosition'>
        Job Position
      </label>
      <select name='jobPosition' value={jobPosition} onChange={handleJobPositionChange} className='w-full p-3 px-5 rounded'>
        <option value=''>Select Job Position</option>
        <option value='poo'>Prova</option>
      </select>

      <label className='float-left' htmlFor='education'>
        Education Level
      </label>
      <select name='education' value={educationLevel} onChange={handleEducationLevelChange} className='w-full p-3 px-5 rounded'>
        <option value=''>Select Education Level</option>
        <option value=''>None needed</option>
        <option value='bachelors'>Bachelor's Degree</option>
        <option value='masters'>Master's Degree</option>
        <option value='phd'>PhD</option>
      </select>
    </>
  );
}
