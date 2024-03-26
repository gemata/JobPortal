import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Box, BoxProps, Button, FormGroup, H2, H3, H5, Illustration, Input, Label, MadeWithLove, MessageBox, Text } from '@adminjs/design-system';
import { useTranslation } from 'adminjs';

export type LoginProps = {
  message?: string;
  action: string;
};

const OrContainer = styled.div`
  text-align: center;
  color: rgb(137, 138, 154);
  position: relative;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    left: 0;
    right: 0;
    height: 1px; /* Adjust the height as needed */
    background-color: #ccd5d9;
  }

  &:after {
    content: 'OR';
    position: relative;
    display: inline-block;
    color: rgb(137, 138, 154);
    border: 1px solid #ccd5d9;
    border-radius: 6px;
    background: white;
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const moveBackground = keyframes`
  0% {
    background-position: 0% center;
  }
  25% {
    background-position: 50% center;
  }
  50% {
    background-position: 100% center;
  }
    75% {
    background-position: 50% center;
  }
      100% {
    background-position: 0% center;
  }
`;

const StyledDiv = styled.div`
  color: white;
  width: 332px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 0px 15px -5px;
  background: linear-gradient(204.24deg, rgb(59, 91, 203) -0.04%, rgb(77, 112, 235) 84.48%);
  padding: 48px;
  flex-grow: 0;
  position: relative;

  & > * {
    z-index: 1;
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    background: url(https://cloud.adminjs.co/images/space-bg.webp);
    background-size: auto 580px;
    opacity: 0.65;
    animation: ${moveBackground} 90s linear 0s infinite normal none running;
  }

  @media (max-width: 870px) {
    display: none;
  }
`;

const Login: React.FC<{}> = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const { translateComponent, translateMessage } = useTranslation();

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!termsChecked) {
      console.log('Please accept the terms & conditions');
      return;
    }

    const registerForm = document.getElementById('registerForm') as HTMLFormElement;
    const emailInput = registerForm.querySelector('input[name="email"]') as HTMLInputElement;
    const passwordInput = registerForm.querySelector('input[name="password"]') as HTMLInputElement;
    const confirmPasswordInput = registerForm.querySelector('input[name="confirmPassword"]') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    if (!email || !password || !confirmPassword) {
      console.log('Please fill in all fields');
      return;
    }

    const requestBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }
      console.log('User registered successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  };

  const toggleTerms = () => {
    const newTermsChecked = !termsChecked;
    setTermsChecked(newTermsChecked);

    const registerBtn = document.getElementById('registerSubmitBtn') as HTMLButtonElement | null;
    if (registerBtn) {
      registerBtn.disabled = !newTermsChecked;
    }
  };

  const handleWindow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, window: string) => {
    e.preventDefault();

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    if (loginForm && registerForm && forgotPasswordForm) {
      loginForm.style.display = 'none';
      registerForm.style.display = 'none';
      forgotPasswordForm.style.display = 'none';

      switch (window) {
        case 'login':
          loginForm.style.display = 'block';
          break;
        case 'register':
          registerForm.style.display = 'block';
          break;
        case 'forgotPassword':
          forgotPasswordForm.style.display = 'block';
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background:
            'url(https://cdn.discordapp.com/attachments/653997513350709251/1222240427218960434/provaBG_Opaque.png?ex=66157f19&is=66030a19&hm=e47778f6c5dc4da5a53a25ccd909e296b148844d35118043aed5ff5682532ad9&)',
          backgroundPosition: '50% center',
          backgroundSize: 'cover',
          inset: '0px',
        }}
        className='login__Wrapper'
      >
        <Box bg='white' flex boxShadow='login' width={[1, 2 / 3, 'auto']} style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 20px 5px', height: '560px' }}>
          <StyledDiv
            style={{
              color: 'white',
              width: '284px',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.4) 5px 0px 15px -5px',
              background: 'linear-gradient(204.24deg, rgb(59, 91, 203) -0.04%, rgb(77, 112, 235) 84.48%)',
              padding: '48px',
              flexGrow: 0,
              position: 'relative',
            }}
          >
            <H2 fontWeight='bolder' style={{ marginBottom: '10px' }}>
              Welcome
            </H2>
            <p style={{ marginBottom: '30px', fontStyle: 'italic', opacity: '0.8' }}>Unlock Your Potential, Find Your Future!</p>
            <Text fontWeight='lighter' mt='default'>
              <ul style={{ padding: '20px 0px 20px 20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <li style={{ listStyleImage: 'url(https://cloud.adminjs.co/images/list-bullet.svg)', fontSize: '17px', textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 3px' }}>
                  Sign in to unlock exclusive job opportunities tailored for you.
                </li>
                <li style={{ listStyleImage: 'url(https://cloud.adminjs.co/images/list-bullet.svg)', fontSize: '17px', textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 3px' }}>
                  Connect with a diverse range of employers and expand your professional network.
                </li>
                <li style={{ listStyleImage: 'url(https://cloud.adminjs.co/images/list-bullet.svg)', fontSize: '17px', textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 3px' }}>
                  Access personalized tools and resources to streamline your job hunting process.
                </li>
              </ul>
            </Text>
          </StyledDiv>
          <Box id='loginForm' as='form' method='POST' p='x3' flexGrow={1} width={['100%', '100%', '480px']}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', marginTop: '15px' }}>
              <h3 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>Login</h3>
              <H5 style={{ margin: 0 }}>COMPANY LOGO</H5>
            </div>
            <FormGroup>
              <Label style={{ color: 'rgb(137, 138, 154)' }} required>
                {translateComponent('Login.properties.email')}
              </Label>
              <Input style={{ padding: '8px' }} name='email' placeholder={translateComponent('Login.properties.email')} />
            </FormGroup>
            <FormGroup>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Label style={{ color: 'rgb(137, 138, 154)' }} required>
                  {translateComponent('Login.properties.password')}
                </Label>{' '}
                <button
                  style={{
                    display: 'block',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    font: 'inherit',
                    fontSize: '12px',
                    cursor: 'pointer',
                    color: 'blue',
                    opacity: '0.6',
                    transition: 'opacity 0.3s, text-decoration 0.3s',
                  }}
                  id='toggleWindows'
                  type='button'
                  onClick={(e) => handleWindow(e, 'forgotPassword')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = 'underline';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = 'none';
                    e.currentTarget.style.opacity = '0.6';
                  }}
                >
                  Forgot password?
                </button>
              </div>
              <Input style={{ padding: '8px' }} type='password' name='password' placeholder={translateComponent('Login.properties.password')} autoComplete='new-password' />
            </FormGroup>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
              <Button style={{ width: '100%', padding: '10px 0px', marginTop: '20px' }} variant='contained'>
                {translateComponent('Login.loginButton')}
              </Button>
              <OrContainer />
              <Button
                style={{ width: '100%', padding: '10px 0px' }}
                id='toggleWindows'
                type='button'
                variant='button'
                onClick={(e) => handleWindow(e, 'register')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3040d6';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#3040d6';
                  e.currentTarget.style.color = '#3040d6';
                }}
              >
                Create Account
              </Button>
            </div>
          </Box>
          <Box id='registerForm' as='form' onSubmit={handleRegisterSubmit} method='POST' p='x3' flexGrow={1} width={['100%', '100%', '480px']} style={{ display: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', marginTop: '15px' }}>
              <h3 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', fontFamily: 'TTNormsBold, Roboto' }}>Register</h3>
              <H5 style={{ margin: 0 }}>COMPANY LOGO</H5>
            </div>

            <FormGroup>
              <Label style={{ color: 'rgb(137, 138, 154)' }} required>
                {translateComponent('Email')}
              </Label>
              <Input type='email' style={{ padding: '8px' }} name='email' placeholder={'Email'} required />
            </FormGroup>
            <div style={{ display: 'flex', gap: '24px' }}>
              <FormGroup style={{ flex: 1 }}>
                <Label style={{ color: 'rgb(137, 138, 154)' }} required>
                  {translateComponent('Password')}
                </Label>
                <Input style={{ padding: '8px' }} type='password' name='password' placeholder={'Password'} autoComplete='new-password' required />
              </FormGroup>
              <FormGroup style={{ flex: 1 }}>
                <Label style={{ color: 'rgb(137, 138, 154)' }} required>
                  {'Confirm Password'}
                </Label>
                <Input style={{ padding: '8px' }} type='password' name='confirmPassword' placeholder={'Confirm Password'} autoComplete='new-password' required />
              </FormGroup>
            </div>
            <FormGroup>
              <Label style={{ color: 'rgb(69, 70, 85)', fontSize: '14px' }}>
                <input type='checkbox' checked={termsChecked} onChange={toggleTerms} style={{ margin: 0, marginRight: '16px' }} />I agree to{' '}
                <a href='#' style={{ color: 'rgb(69, 70, 85)' }}>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href='#' style={{ color: 'rgb(69, 70, 85)' }}>
                  Privacy Policy
                </a>
              </Label>
            </FormGroup>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
              <Button id='registerSubmitBtn' type='submit' style={{ width: '100%', padding: '10px 0px' }} variant='contained' disabled>
                Create Account
              </Button>
              <OrContainer />
              <Button
                style={{ width: '100%', padding: '10px 0px', transition: 'all 0.2s ease-in' }}
                id='toggleWindows'
                type='button'
                variant='button'
                onClick={(e) => handleWindow(e, 'login')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3040d6';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#3040d6';
                  e.currentTarget.style.color = '#3040d6';
                }}
              >
                Login
              </Button>
            </div>
          </Box>
          <Box
            id='forgotPasswordForm'
            as='form'
            onSubmit={handleForgotPasswordSubmit}
            method='POST'
            p='x3'
            flexGrow={1}
            width={['100%', '100%', '480px']}
            style={{ display: 'none' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', marginTop: '15px' }}>
              <h3 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>Reset Password</h3>
              <H5 style={{ margin: 0 }}>COMPANY LOGO</H5>
            </div>

            <FormGroup>
              <Label style={{ color: 'rgb(137, 138, 154)' }} required>
                {translateComponent('Email')}
              </Label>
              <Input style={{ padding: '8px' }} name='email' placeholder={'Email'} />
            </FormGroup>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
              <Button type='submit' style={{ width: '100%', padding: '10px 0px', marginTop: '20px' }} variant='contained'>
                Request Password Reset
              </Button>
              <OrContainer />
              <Button
                style={{ width: '100%', padding: '10px 0px' }}
                id='toggleWindows'
                type='button'
                variant='button'
                onClick={(e) => handleWindow(e, 'login')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3040d6';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#3040d6';
                  e.currentTarget.style.color = '#3040d6';
                }}
              >
                Login
              </Button>
              <Button
                style={{ width: '100%', padding: '10px 0px' }}
                id='toggleWindows'
                type='button'
                variant='button'
                onClick={(e) => handleWindow(e, 'register')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3040d6';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#3040d6';
                  e.currentTarget.style.color = '#3040d6';
                }}
              >
                Create Account
              </Button>
            </div>
          </Box>
        </Box>
        <p style={{ color: '#6B7781', fontFamily: 'TTNormsRegular, Roboto', fontSize: '12px', padding: '20px', letterSpacing: '1px' }}>
          © Lab 2 2024. All rights reserved |{' '}
          <a href='#' style={{ color: '#3040d6', textDecoration: 'none' }}>
            Privacy Policy
          </a>{' '}
          | Made with 💙 by our team
        </p>
      </div>
    </>
  );
};

export default Login;
