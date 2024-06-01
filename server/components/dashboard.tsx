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
        setData(responseData);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      {data ? (
        <Box>
          <DashboardHeader />
          <div className='container-dashboard'>
            <Box className='box-account-types'>
              <div className='doughnut-graph'>
                <Text variant='title'>Account Types</Text>
                <Doughnut data={data?.accountTypesData} />
              </div>
            </Box>
            <Box className='box-job-postings'>
              <Text variant='title'>Job Postings and User Registration Trend</Text>
              <Line data={data?.postingsUserData} />
            </Box>
            <Box className='box-top-companies'>
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
            <Box className='box-job-fields'>
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
            <Box className='box-application-status'>
              <div className='doughnut-graph'>
                <Text variant='title'>Job Application Status</Text>
                <Pie data={data?.jobApplicationStatusData} />
              </div>
            </Box>
            <Box className='box-user-engagement'>
              <Text variant='title'>User Engagement Metrics Over Time</Text>
              <Line data={data?.userEngagementData} />
            </Box>
            <Box className='box-subscription-revenue'>
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
            <Box className='box-interviews-scheduled'>
              <Text variant='title'>Interviews Scheduled Over Time</Text>
              <Line data={data?.interviewsScheduledData} />
            </Box>
            <Box className='box-job-engagement'>
              <Text variant='title'>Job Post Engagement Metrics</Text>
              <Line data={data?.jobPostEngagementData} />
            </Box>
          </div>
        </Box>
      ) : (
        <Box className='default-dashboard'>
          <Box className='loading-box'>
            <Box className='loading-box-absolute block'></Box>
            <Text className='loading-text'>
              <H2 fontWeight='bold'>Loading...</H2>
              <Text className='loading-text-opacity'>Please wait while all the info loads</Text>
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
