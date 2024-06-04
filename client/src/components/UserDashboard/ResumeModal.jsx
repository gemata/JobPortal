import React, { useState, useEffect } from 'react';
import grayLogo from '../../img/grayLogo.png';
import pdf from '../../img/pdfFileIcon.png';
import docx from '../../img/docxFileIcon.png';
import doc from '../../img/docFileIcon.png';

export default function ResumeModal({ profileData, fetchData, setFetchData, onClose }) {
  const [file, setFile] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [lastModifiedDate, setLastModifiedDate] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (profileData.Resume) {
      switch (profileData.Resume.mime) {
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          setPreviewUrl(docx);
          break;
        case 'application/pdf':
          setPreviewUrl(pdf);
          break;
        case 'application/msword':
          setPreviewUrl(doc);
          break;
        default:
          setPreviewUrl(grayLogo);
          break;
      }
    }
  }, [profileData]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const modifiedDate = new Date(file.lastModified);

    if (file && (file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/pdf' || file.type == 'application/msword')) {
      switch (file.type) {
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          setPreviewUrl(docx);
          break;
        case 'application/pdf':
          setPreviewUrl(pdf);
          break;
        case 'application/msword':
          setPreviewUrl(doc);
          break;
        default:
          setPreviewUrl(grayLogo);
          break;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setLastModifiedDate(modifiedDate.toLocaleString());
      };
      reader.readAsDataURL(file);
      setFile(file);
      setErrorMessage('');
    } else {
      setSuccessMessage('');
      setErrorMessage('Please select a valid file.');
      setPreviewUrl(null);
    }
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('id', profileData.id);
      formData.append('file', file);

      const method = profileData.Resume ? 'PUT' : 'POST';
      const endpoint = profileData.Resume ? `http://localhost:5000/api/resumes/${profileData.Resume.id}` : 'http://localhost:5000/api/resumes/';

      const imageResponse = await fetch(endpoint, {
        method: method,
        body: formData,
      });

      if (!imageResponse.ok) {
        const errorData = await imageResponse.json();
        throw new Error(errorData.error);
      } else {
        setSuccessMessage(`Resume has been ${profileData.Resume ? 'saved' : 'updated'} successfully!`);
        setErrorMessage('');
        setFetchData(!fetchData);

        setTimeout(() => {
          onClose();
        }, 2000);
      }
    }
  };

  return (
    <>
      <div className='flex flex-col gap-4 h-full'>
        <h3 className='font-semibold text-2xl'>Add CV:</h3>
        <hr />

        <h3 className='text-lg'>Make sure to carefully review your CV before submission, since it will greatly increase the chances a company will seek you out.</h3>
        <hr />

        <h3 className='text-lg'>PDF Files are able to be previewed whithout downloading, while word documents need to be downloaded before viewing.</h3>
        <hr />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '25px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end', justifyContent: 'space-evenly', gap: '25px' }}>
            <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <img
                src={previewUrl || grayLogo}
                className={previewUrl ? 'p-3' : ''}
                style={{
                  width: '125px',
                  height: '125px',
                  objectFit: 'cover',
                  border: '1px solid #ccc',
                }}
              />
              <div className='break-words' style={{ width: '125px', fontSize: '12px', marginTop: '10px' }}>
                {file ? `${file.name} - ${lastModifiedDate}` : 'No file uploaded'}
              </div>
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
              <span style={{ marginLeft: '5px' }}>Upload resume</span>
            </label>
            <input tabIndex='-1' id='file-upload' type='file' style={{ display: 'none' }} onChange={handleFileChange} />
          </div>
        </div>
        <hr className='mt-3' />
        {successMessage ? (
          <section className='w-full mt-3 resetPassword__form-message-container resetPassword__form-success'>
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
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                </span>
                <div>{successMessage}</div>
              </section>
            </div>
          </section>
        ) : (
          <></>
        )}
        {errorMessage ? (
          <section className='mt-3 resetPassword__form-message-container resetPassword__form-error w-full'>
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
                <div>{errorMessage}</div>
              </section>
            </div>
          </section>
        ) : (
          <></>
        )}
        <button className='bg-jobportal-pink w-full text-center text-white rounded py-3' type='button' onClick={handleFileSubmit}>
          Submit Resume
        </button>
      </div>
    </>
  );
}
