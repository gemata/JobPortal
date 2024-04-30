import React, { useEffect, useState } from 'react';
import { Box, Button, H2, H5, Illustration, IllustrationProps, Text, borderWidths } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import { useTranslation } from 'adminjs';
import { ApiClient } from 'adminjs';
import { Doughnut, Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  LineController,
  DoughnutController,
  PointElement,
  LineElement,
  Legend,
  BarElement,
  PieController,
  Tooltip,
  Filler,
} from 'chart.js';

Chart.register(ArcElement, CategoryScale, LinearScale, LineController, DoughnutController, PointElement, LineElement, Legend, BarElement, PieController, Tooltip, Filler);

interface Data {
  message: string;
  accountTypesData: ChartData;
  postingsUserData: ChartData;
  jobApplicationStatusData: ChartData;
  userEngagementData: ChartData;
  interviewsScheduledData: ChartData;
  jobPostEngagementData: ChartData;
  topCompaniesData: ChartData;
  jobFieldsData: ChartData;
  subscriptionRevenueData: ChartData;
}

interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  hoverOffset: number;
}

const pageHeaderHeight = 250;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

export const DashboardHeader: React.FC = () => {
  const { translateMessage } = useTranslation();
  return (
    <Box data-css='default-dashboard' style={{ padding: '30px' }}>
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
  const [data, setData] = useState<Data | null>(null);
  const api = new ApiClient();

  useEffect(() => {
    api
      .getDashboard()
      .then((response) => {
        const responseData = response.data as Data;
        console.log(responseData);

        setData(responseData);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      {data ? (
        <Box>
          <DashboardHeader />
          <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', padding: '30px', gap: '30px', paddingTop: 0 }}>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flex: '1 1 0px' }}>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ width: '66%' }}>
                  <Text variant='title'>Account Types</Text>
                  <Doughnut data={data?.accountTypesData} />
                </div>
              </Box>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>Job Postings and User Registation Trend</Text>
                <Line data={data?.postingsUserData} />
              </Box>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ width: '50%' }}>{/* Insert some data here */}</div>
              </Box>
            </div>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '66.66%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>Top Companies by Number of Job Postings</Text>
                <Bar
                  data={data?.topCompaniesData}
                  options={{
                    indexAxis: 'y',
                    scales: {
                      x: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </Box>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>Most Popular Job Fields</Text>
                <Bar
                  data={data?.jobFieldsData}
                  options={{
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                />
              </Box>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '33.33%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>Job Application Status</Text>
                <Pie data={data?.jobApplicationStatusData} />
              </Box>
            </div>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>User Engagement Metrics Over Time</Text>
                <Line data={data?.userEngagementData} />
              </Box>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '50%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ width: '50%' }}>{/* Insert some data here */}</div>
              </Box>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>Subscription Revenue</Text>
                <Bar
                  data={data?.subscriptionRevenueData}
                  options={{
                    indexAxis: 'y',
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                />
              </Box>
            </div>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>Interviews Scheduled Over Time</Text>
                <Line data={data?.interviewsScheduledData} />
              </Box>
              <Box bg='white' style={{ padding: '50px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                <Text variant='title'>Job Post Engagement Metrics</Text>
                <Line data={data?.jobPostEngagementData} />
              </Box>
            </div>
          </div>
        </Box>
      ) : (
        <Box data-css='default-dashboard' style={{ padding: '30px' }}>
          <Box position='relative' overflow='hidden' bg='white' height={pageHeaderHeight} py={pageHeaderPaddingY} px={['default', 'lg', pageHeaderPaddingX]}>
            <Box position='absolute' top={30} left={0} opacity={0.9} animate display={['none', 'none', 'none', 'block']}></Box>
            <Text textAlign='center' color='grey100'>
              <H2 fontWeight='bold'>Loading...</H2>
              <Text opacity={0.8}>Please wait while all the info loads</Text>
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
