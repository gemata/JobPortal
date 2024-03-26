import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from 'logo1.png';

const SidebarBranding: React.FC<{}> = () => {
  const StyledLink = styled(Link)`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
    padding: 48px 32px;

    &:hover h1 {
      color: #3040d6;
    }
  `;

  const StyledH1 = styled.h1`
    font-weight: bolder;
    font-size: 24px;
    color: #000;
    max-width: 170px;
  `;

  return (
    <>
      <StyledLink to={'/admin'} data-css='sidebar-logo' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <img width='50px' style={{ borderRadius: '50%' }} src={'https://lh3.googleusercontent.com/d/1sepgRdNHedA0P270SGyjWRyNVEr918hN=s220?authuser=0'} alt='Logo' />
        <StyledH1>{'Job Horizon'}</StyledH1>
      </StyledLink>
    </>
  );
};

export default SidebarBranding;
