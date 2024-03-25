import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Box, BoxProps, Button, FormGroup, H2, H5, Illustration, Input, Label, MadeWithLove, MessageBox, Text } from '@adminjs/design-system';
import { useTranslation } from 'adminjs';

export type LoginProps = {
  message?: string;
  action: string;
};

const Login: React.FC<{}> = () => {
  // const props = (window as any).__APP_STATE__ as LoginTemplateAttributes;
  // const { action, errorMessage: message } = props;
  const { translateComponent, translateMessage } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello');
    // You can add further logic here for form submission
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f8f9f9' }} className='login__Wrapper'>
        <Box bg='white' height='440px' flex boxShadow='login' width={[1, 2 / 3, 'auto']}>
          <Box bg='primary100' color='white' p='x3' width='380px' flexGrow={0} display={['none', 'none', 'block']} position='relative'>
            <H2 fontWeight='lighter'>Welcome</H2>
            <Text fontWeight='lighter' mt='default'>
              {/* {translateComponent('Login.welcomeMessage')} */}
              Insert welcome message here
            </Text>
            <div>
              <Box display='inline' mr='default'>
                <Illustration variant='Planet' width={82} height={91} />
              </Box>
              <Box display='inline'>
                <Illustration variant='Astronaut' width={82} height={91} />
              </Box>
              <Box display='inline' position='relative' top='-20px'>
                <Illustration variant='FlagInCog' width={82} height={91} />
              </Box>
            </div>
          </Box>
          <Box as='form' method='POST' p='x3' flexGrow={1} width={['100%', '100%', '480px']}>
            <H5 marginBottom='xxl'>COMPANY LOGO</H5>
            {/* {message && <MessageBox my='lg' message={message.split(' ').length > 1 ? message : translateMessage(message)} variant='danger' />} */}
            <FormGroup>
              <Label required>{translateComponent('Login.properties.email')}</Label>
              <Input name='email' placeholder={translateComponent('Login.properties.email')} />
            </FormGroup>
            <FormGroup>
              <Label required>{translateComponent('Login.properties.password')}</Label>
              <Input type='password' name='password' placeholder={translateComponent('Login.properties.password')} autoComplete='new-password' />
            </FormGroup>
            <Text mt='xl' textAlign='center'>
              <Button variant='contained'>{translateComponent('Login.loginButton')}</Button>
            </Text>
          </Box>
        </Box>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f8f9f9' }} className='login__Wrapper'>
        <Box bg='white' height='auto' flex boxShadow='login' width={[1, 2 / 3, 'auto']}>
          <Box bg='primary100' color='white' p='x3' width='380px' flexGrow={0} display={['none', 'none', 'block']} position='relative'>
            <H2 fontWeight='lighter'>Create Account</H2>
            <Text fontWeight='lighter' mt='default'>
              {/* {translateComponent('Register.welcomeMessage')} */}
              Insert welcome message here
            </Text>
            <div>
              <Box display='inline' mr='default'>
                <Illustration variant='Planet' width={82} height={91} />
              </Box>
              <Box display='inline'>
                <Illustration variant='Astronaut' width={82} height={91} />
              </Box>
              <Box display='inline' position='relative' top='-20px'>
                <Illustration variant='FlagInCog' width={82} height={91} />
              </Box>
            </div>
          </Box>
          <Box as='form' onSubmit={handleSubmit} method='POST' p='x3' flexGrow={1} width={['100%', '100%', '480px']}>
            <H5 marginBottom='xxl'>COMPANY LOGO</H5>
            {/* Add registration form fields */}
            <FormGroup>
              <Label required>{translateComponent('Register.properties.name')}</Label>
              <Input name='name' placeholder={translateComponent('Register.properties.name')} />
            </FormGroup>
            <FormGroup>
              <Label required>{translateComponent('Register.properties.email')}</Label>
              <Input name='email' placeholder={translateComponent('Register.properties.email')} />
            </FormGroup>
            <FormGroup>
              <Label required>{translateComponent('Register.properties.password')}</Label>
              <Input type='password' name='password' placeholder={translateComponent('Register.properties.password')} autoComplete='new-password' />
            </FormGroup>
            <FormGroup>
              <Label required>{translateComponent('Register.properties.confirmPassword')}</Label>
              <Input type='password' name='confirmPassword' placeholder={translateComponent('Register.properties.confirmPassword')} autoComplete='new-password' />
            </FormGroup>
            {/* Add additional registration fields as needed */}
            <Text mt='xl' textAlign='center'>
              <Button type='submit' variant='contained'>
                Register Button
              </Button>
            </Text>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Login;