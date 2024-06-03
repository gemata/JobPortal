import React from 'react';
import grayLogo from '../../img/grayLogo.png';

export default function UserModalImage({ profileData, file, previewUrl, lastModifiedDate, handleImageChange }) {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <h3 className='font-semibold text-lg'>Edit User Image:</h3>
        <hr />

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '25px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end', justifyContent: 'space-evenly', gap: '25px' }}>
            <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <img
                src={previewUrl || (profileData.UserImage ? `http://localhost:5000/profilePics/${profileData.UserImage?.s3Key}` : grayLogo)}
                style={{
                  width: '125px',
                  height: '125px',
                  objectFit: 'cover',
                  border: '1px solid #ccc',
                }}
              />
              <div style={{ width: '125px', fontSize: '12px', marginTop: '10px' }}>{file ? `${file.name} - ${lastModifiedDate}` : 'No file uploaded'}</div>
            </div>
            <label
              htmlFor='file-upload'
              style={{
                width: '200px',
                height: '200px',
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
          </div>
        </div>
      </div>
    </>
  );
}
