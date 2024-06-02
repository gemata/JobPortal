import React, { useEffect, useState } from 'react';

export const LinkComponent: React.FC<{ record: any }> = ({ record }) => {
  const { id, ID, UserId, CompanyID, role } = record.params;
  const [src, setSrc] = useState('');
  const [logo, setLogo] = useState('');
  const [resume, setResume] = useState('');

  let queryId = id;

  if (ID) {
    queryId = ID;
  }

  if (UserId) {
    queryId = UserId;
  }

  if (CompanyID) {
    queryId = CompanyID;
  }

  useEffect(() => {
    if (id || UserId) {
      const fetchImageData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/userimages/${queryId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSrc(data?.s3Key);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
      fetchImageData();
      const fetchResumeData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/resumes/${queryId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setResume(data?.s3Key);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
      fetchResumeData();
    }

    if (ID || CompanyID) {
      const fetchCompanyImageData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/companyLogos/${queryId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setLogo(data?.s3Key);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
      fetchCompanyImageData();
    }
  }, [id]);

  return (
    <>
      <section className='sc-dmqHEX bqNMJm adminjs_Box'>
        <label className='sc-eDDNvR gTmyUv adminjs_Label'>Id</label>
        {id ? id : ID}
      </section>
      {src || logo ? (
        <section className='sc-dmqHEX bqNMJm adminjs_Box'>
          <label className='sc-eDDNvR gTmyUv adminjs_Label'>{ID || CompanyID ? 'Company' : 'User'} Image</label>
          <img
            src={`http://localhost:5000/` + (src ? `profilePics/${src}` : `companyLogos/${logo}`)}
            style={{ borderRadius: '10px', width: '200px', height: '200px' }}
            alt='User Image'
          />
        </section>
      ) : (
        <></>
      )}
      {resume && ID == undefined && CompanyID == undefined ? (
        <section className='sc-dmqHEX bqNMJm adminjs_Box'>
          <label className='sc-eDDNvR gTmyUv adminjs_Label'>User Resume</label>
          <a href={`http://localhost:5000/resumes/${resume}`}>{resume}</a>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default LinkComponent;
