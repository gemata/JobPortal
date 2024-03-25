import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Box, BoxProps, Button, FormGroup, H2, H5, Illustration, Input, Label, MadeWithLove, MessageBox, Text } from '@adminjs/design-system';
import { useTranslation } from 'adminjs';
import { cssClass, themeGet } from '@adminjs/design-system';

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
      <StyledLink to={'/admin'} data-css='sidebar-logo'>
        <StyledH1>{'Job Horizon'}</StyledH1>
      </StyledLink>
    </>
  );
};

export default SidebarBranding;
