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
        <img
          width='50px'
          style={{ borderRadius: '50%' }}
          src={
            'https://cdn.discordapp.com/attachments/653997513350709251/1225428153460068423/slayylogo1.png?ex=662117e7&is=660ea2e7&hm=3d4c606dadb2d95eb0f27091d985ffadb4614c38e5f8204eba669d42f1f8d39c&'
          }
          alt='Logo'
        />
        <StyledH1>{'Job Horizon'}</StyledH1>
      </StyledLink>
    </>
  );
};

export default SidebarBranding;
