import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

export default function PageOne({ jobField, setJobField, jobPosition, setJobPosition, educationLevel, setEducationLevel, jobSummary, setJobSummary }) {
  const [jobFields, setJobFields] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/api/jobfields/')
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.rows)) {
          setJobFields(data.rows);
        } else {
          console.error('API response is not in expected format:', data);
        }
      })
      .catch((error) => console.error('Error fetching job fields:', error));
  }, []);

  useEffect(() => {
    if (jobField) {
      fetch(`http://localhost:5000/api/jobpositions/jobfield/${jobField}`)
        .then((response) => response.json())
        .then((data) => {
          setJobPositions(data);
        })
        .catch((error) => console.error('Error fetching job positions:', error));
    }
  }, [jobField]);

  const handleJobFieldChange = (e) => {
    setJobField(e.target.value);
  };

  const handleJobPositionChange = (e) => {
    setJobPosition(e.target.value);
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  const handleJobSummaryChange = (value) => {
    setJobSummary(value);
  };

  return (
    <>
      <label className='float-left' htmlFor='jobField'>
        Job Field
      </label>
      <select name='jobField' value={jobField} onChange={handleJobFieldChange} className='w-full p-3 px-5 rounded'>
        <option value=''>Select Job Field</option>
        {jobFields.map((field) => (
          <option key={field.id} value={field.id}>
            {field.field}
          </option>
        ))}
      </select>

      <label className='float-left' htmlFor='jobPosition'>
        Job Position
      </label>
      <select name='jobPosition' value={jobPosition} onChange={handleJobPositionChange} className='w-full p-3 px-5 rounded'>
        <option value=''>Select Job Position</option>
        {jobPositions.map((position) => (
          <option key={position.id} value={position.id}>
            {position.position}
          </option>
        ))}
      </select>

      <label className='float-left' htmlFor='jobSummary'>
        Job Summary
      </label>
      <ReactQuill
        value={jobSummary}
        onChange={handleJobSummaryChange}
        className='w-full  rounded focus:outline-none pt-10 focus:ring-2 focus:ring-jobportal-pink'
        placeholder='Job Summary'
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean'],
          ],
        }}
      />

      <label className='float-left' htmlFor='education'>
        Education Level
      </label>
      <select name='education' value={educationLevel} onChange={handleEducationLevelChange} className='w-full p-3 px-5 rounded'>
        <option value=''>Select Education Level</option>
        <option value='none'>None needed</option>
        <option value='highschool'>High School</option>
        <option value='bachelors'>Bachelor's Degree</option>
        <option value='masters'>Master's Degree</option>
        <option value='phd'>PhD</option>
      </select>
    </>
  );
}
