import React, { useEffect, useState } from 'react';
import { Box, Button, H2, H5, Illustration, IllustrationProps, Text } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import { useTranslation } from 'adminjs';
import { ApiClient } from 'adminjs';

const pageHeaderHeight = 300;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

export const DashboardHeader: React.FC = () => {
  interface Data {
    message: string;
  }

  const [data, setData] = useState<Data | null>(null);
  const api = new ApiClient();

  useEffect(() => {
    api
      .getDashboard()
      .then((response) => {
        const responseData = response.data as Data;
        setData(responseData); // { message: 'Hello World' }
      })
      .catch((error) => {});
  }, []);

  if (data) {
    console.log(data.message);
  }

  const { translateMessage } = useTranslation();
  return (
    <Box data-css='default-dashboard'>
      <div>{data && <p>{data.message}</p>}</div>
      <Box position='relative' overflow='hidden' bg='white' height={pageHeaderHeight} py={pageHeaderPaddingY} px={['default', 'lg', pageHeaderPaddingX]}>
        <Box position='absolute' top={30} left={0} opacity={0.9} animate display={['none', 'none', 'none', 'block']}></Box>
        <Text textAlign='center' color='grey100'>
          <H2 fontWeight='bold'>{translateMessage('welcomeOnBoard_title')}</H2>
          <Text opacity={0.8}>{translateMessage('welcomeOnBoard_subtitle')}</Text>
        </Text>
      </Box>
    </Box>
  );
};

type BoxType = {
  variant: string;
  title: string;
  subtitle: string;
  href: string;
};

const boxes = ({ translateMessage }): Array<BoxType> => [
  {
    variant: 'Details',
    title: translateMessage('addingResources_title'),
    subtitle: translateMessage('addingResources_subtitle'),
    href: 'https://docs.adminjs.co/basics/resource#providing-resources-explicitly',
  },
  {
    variant: 'Docs',
    title: translateMessage('customizeResources_title'),
    subtitle: translateMessage('customizeResources_subtitle'),
    href: 'https://docs.adminjs.co/basics/resource#customizing-resources',
  },
  {
    variant: 'Plug',
    title: translateMessage('customizeActions_title'),
    subtitle: translateMessage('customizeActions_subtitle'),
    href: 'https://docs.adminjs.co/basics/action',
  },
  {
    variant: 'Cup',
    title: translateMessage('writeOwnComponents_title'),
    subtitle: translateMessage('writeOwnComponents_subtitle'),
    href: 'https://docs.adminjs.co/ui-customization/writing-your-own-components',
  },
  {
    variant: 'Photos',
    title: translateMessage('customDashboard_title'),
    subtitle: translateMessage('customDashboard_subtitle'),
    href: 'https://docs.adminjs.co/ui-customization/dashboard-customization',
  },
  {
    variant: 'IdentityCard',
    title: translateMessage('roleBasedAccess_title'),
    subtitle: translateMessage('roleBasedAccess_subtitle'),
    href: 'https://docs.adminjs.co/tutorials/adding-role-based-access-control',
  },
];

const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.space.md};
  transition: all 0.1s ease-in;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary60};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  & .dsc-icon svg,
  .gh-icon svg {
    width: 64px;
    height: 64px;
  }
`;

Card.defaultProps = {
  variant: 'container',
  boxShadow: 'card',
};

export const Dashboard: React.FC = () => {
  const { translateMessage, translateButton } = useTranslation();

  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={['xl', 'xl', '-100px']}
        mb='xl'
        mx={[0, 0, 0, 'auto']}
        px={['default', 'lg', 'xxl', '0']}
        position='relative'
        flex
        flexDirection='row'
        flexWrap='wrap'
        width={[1, 1, 1, 1024]}
      >
        {boxes({ translateMessage }).map((box, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index} width={[1, 1 / 2, 1 / 2, 1 / 3]} p='lg'>
            <Card as='a' href={box.href} target='_blank'>
              <Text textAlign='center'>
                <Illustration variant={box.variant as IllustrationProps['variant']} width={100} height={70} />
                <H5 mt='md'>{box.title}</H5>
                <Text>{box.subtitle}</Text>
              </Text>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
