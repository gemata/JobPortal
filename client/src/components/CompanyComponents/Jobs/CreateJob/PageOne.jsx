import React from 'react';

export default function PageOne() {
  return (
    <>
      <label className='float-left' htmlFor='jobField'>
        Job Field
      </label>
      <select name='jobField' className='w-full p-3 px-5 rounded'>
        <option value=''>Select Job Field</option>
        <option value='tech'>Technology</option>
        <option value='finance'>Finance</option>
        <option value='healthcare'>Healthcare</option>
      </select>

      <label className='float-left' htmlFor='jobPosition'>
        Job Position
      </label>
      <select name='jobPosition' className='w-full p-3 px-5 rounded'>
        <option value=''>Select Job Position</option>
        {/* Add options dynamically or hard-code them as needed */}
      </select>

      <label className='float-left' htmlFor='nationality'>
        Nationality
      </label>
      <select name='nationality' className='w-full p-3 px-5 rounded'>
        <option value=''>Select Nationality</option>
        {/* Add options dynamically or hard-code them as needed */}
      </select>

      <label className='float-left' htmlFor='education'>
        Education Level
      </label>
      <select name='education' className='w-full p-3 px-5 rounded'>
        <option value=''>Select Education Level</option>
        <option value='bachelors'>None needed</option>
        <option value='bachelors'>Bachelor's Degree</option>
        <option value='masters'>Master's Degree</option>
        <option value='phd'>PhD</option>
      </select>

      <label className='float-left' htmlFor='jobLocation'>
        Job Location
      </label>
      <input type='text' name='jobLocation' className='border w-full p-3 px-5 rounded' placeholder='Job Location' />

      <label className='float-left' htmlFor='interviewMethod'>
        Interview Method
      </label>
      <select name='interviewMethod' className='w-full p-3 px-5 rounded'>
        <option value=''>Select Interview Method</option>
        <option value='online'>Online</option>
        <option value='inPerson'>In Person</option>
        <option value='hybrid'>Hybrid</option>
      </select>
    </>
  );
}
