import React, { useState } from 'react';

export default function PreviewResume({ resume }) {
  const [isPreviewOpen, setisPreviewOpen] = useState(false);

  const handleOpenPreview = () => {
    setisPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setisPreviewOpen(false);
  };

  return (
    <>
      {resume ? (
        <div className='relative w-full mx-auto bg-purple-200 p-6 rounded-lg shadow-md flex flex-col gap-4'>
          <h2 className='text-xl font-bold text-purple-900'>Preview Resume</h2>
          <p className='text-purple-700'>View your resume to ensure you wrote the correct information.</p>
          {resume.mime == 'application/pdf' ? (
            <>
              <button onClick={handleOpenPreview} className='py-2 mt-2 text-white bg-purple-600 rounded hover:bg-purple-700'>
                Preview Resume
              </button>
              <div
                onClick={handleClosePreview}
                className={`${isPreviewOpen ? 'fixed' : 'hidden'} inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
                style={{ zIndex: 301 }}
              >
                <div
                  className='bg-white p-2 pt-8 rounded shadow-lg w-full max-w-[875px] overflow-y-auto absolute top-10 bottom-10'
                  style={{
                    maxHeight: '90vh',
                  }}
                >
                  <button className='absolute mt-2 rounded bg-red-500 w-14 text-white h-6 top-0 right-2 text-gray-500 hover:bg-red-600' onClick={handleClosePreview}>
                    x
                  </button>
                  <iframe className='h-full w-full' src={`http://localhost:5000/resumes/${resume.s3Key}`} />
                </div>
              </div>
            </>
          ) : (
            <a href={`http://localhost:5000/resumes/${resume.s3Key}`} className='text-center py-2 mt-2 text-white bg-purple-600 rounded hover:bg-purple-700'>
              Download Resume
            </a>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
