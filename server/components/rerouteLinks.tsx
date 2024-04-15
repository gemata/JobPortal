import React, { useEffect, useState } from 'react';

export const RerouteLinks: React.FC<{ record: any }> = ({ record }) => {
  const { id, s3Key, mime, CompanyID } = record.params;

  return (
    <>
      {mime == 'image/png' || mime == 'image/png' || mime == 'image/webp' ? (
        <img src={`http://localhost:5000/${CompanyID ? 'companyLogos' : 'profilePics'}/${s3Key}`} style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
      ) : (
        <a href={`http://localhost:5000/resumes/${s3Key}`}>{s3Key}</a>
      )}
    </>
  );
};

export default RerouteLinks;
