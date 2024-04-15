import React, { useEffect, useState } from 'react';
import { Box, Button, H2, H5, Illustration, IllustrationProps, Text, borderWidths } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import { useTranslation } from 'adminjs';
import { ApiClient } from 'adminjs';
import { Doughnut, Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, LineController, DoughnutController, PointElement, LineElement, Legend, BarElement, PieController, Tooltip } from 'chart.js';

Chart.register(ArcElement, CategoryScale, LinearScale, LineController, DoughnutController, PointElement, LineElement, Legend, BarElement, PieController, Tooltip);

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
        setData(responseData);
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

const accountTypesData = {
  labels: ['Users', 'Companies', 'Pending'],
  datasets: [
    {
      label: 'Account Types',
      data: [300, 50, 45],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 5,
    },
  ],
};

const jobPostingsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Job Postings',
      data: [12, 19, 3, 5, 2, 3], // Sample data, replace with your actual data
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const userRegistrationsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'User Registrations',
      data: [50, 30, 70, 40, 60, 80], // Sample data, replace with your actual data
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
  ],
};

const jobApplicationStatusData = {
  labels: ['Applied', 'Shortlisted', 'Rejected'],
  datasets: [
    {
      label: 'Job Application Status',
      data: [60, 25, 15], // Sample data percentages, replace with your actual data
      backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'], // Colors for each status
    },
  ],
};

const topCompaniesData = {
  labels: ['Company A', 'Company B', 'Company C', 'Company D'], // Sample company names
  datasets: [
    {
      label: 'Number of Job Postings',
      data: [25, 20, 18, 15], // Sample data for number of job postings
      backgroundColor: 'rgba(76,175,80, 0.2)', // Bar color
      borderColor: 'rgb(76,175,80)',
      borderWidth: 1,
    },
  ],
};

const jobFieldsData = {
  labels: ['IT', 'Finance', 'Marketing', 'Engineering'], // Sample job fields
  datasets: [
    {
      label: 'Job Fields',
      data: [30, 25, 20, 25], // Sample data representing percentages of job postings
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(76, 175, 80, 0.2)'], // Colors for each job field
      borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(76, 175, 80)'],
      borderWidth: 1,
    },
  ],
};

const userEngagementData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Sample time periods
  datasets: [
    {
      label: 'User Logins',
      data: [100, 120, 150, 130, 140, 160], // Sample data representing user logins
      borderColor: '#FF6384', // Line color for user logins
      fill: false,
    },
    {
      label: 'Profile Completions',
      data: [50, 60, 70, 80, 90, 100], // Sample data representing profile completions
      borderColor: '#36A2EB', // Line color for profile completions
      fill: false,
    },
    {
      label: 'Resume Uploads',
      data: [20, 25, 30, 35, 40, 45], // Sample data representing resume uploads
      borderColor: '#FFCE56', // Line color for resume uploads
      fill: false,
    },
  ],
};

const subscriptionRevenueData = {
  labels: ['Basic', 'Standard', 'Premium'], // Sample subscription plans
  datasets: [
    {
      label: 'Subscription Revenue',
      data: [[2000], [3500], [5000]], // Sample revenue generated from each subscription plan
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'], // Colors for each job field
      borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)'],
      borderWidth: 1,
    },
  ],
};

const interviewsScheduledData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Sample time periods
  datasets: [
    {
      label: 'Interviews Scheduled',
      data: [10, 15, 20, 18, 22, 25], // Sample data representing number of interviews scheduled
      borderColor: '#4CAF50', // Line color for number of interviews scheduled
      fill: false,
    },
  ],
};

const jobPostEngagementData = {
  labels: ['Job 1', 'Job 2', 'Job 3', 'Job 4'], // Sample job postings
  datasets: [
    {
      label: 'Likes',
      data: [20, 15, 10, 25], // Sample data representing number of likes
      backgroundColor: '#FF6384', // Bar color for likes
    },
    {
      label: 'Shares',
      data: [10, 12, 8, 15], // Sample data representing number of shares
      backgroundColor: '#36A2EB', // Bar color for shares
    },
    {
      label: 'Views',
      data: [30, 25, 20, 35], // Sample data representing number of views
      backgroundColor: '#FFCE56', // Bar color for views
    },
  ],
};

export const Dashboard: React.FC = () => {
  return (
    <Box>
      <DashboardHeader />
      <div style={{ width: '300px', margin: 'auto', padding: '30px' }}>
        <Text variant='title'>Account Types</Text>
        <Doughnut data={accountTypesData} />
      </div>
      <div style={{ width: '700px', margin: 'auto', padding: '30px' }}>
        <Box mb='xl'>
          <Text variant='title'>Job Postings Over Time</Text>
          <Line data={jobPostingsData} />
        </Box>
        <Box mb='xl'>
          <Text variant='title'>User Registration Trend</Text>
          <Line data={userRegistrationsData} />
        </Box>
        <div style={{ width: '300px', margin: 'auto' }}>
          <Text variant='title'>Job Application Status</Text>
          <Doughnut data={jobApplicationStatusData} />
        </div>
        <div>
          <Text variant='title'>Top Companies by Number of Job Postings</Text>
          <Bar
            data={topCompaniesData}
            options={{
              indexAxis: 'y', // Display bars horizontally
              scales: {
                x: {
                  beginAtZero: true, // Start the scale at zero
                },
              },
            }}
          />
        </div>
        <Box mb='xl'>
          <Text variant='title'>Most Popular Job Fields</Text>
          <Bar
            data={jobFieldsData}
            options={{
              scales: {
                x: {
                  stacked: true, // Stack bars horizontally
                },
                y: {
                  stacked: true, // Stack bars vertically
                },
              },
            }}
          />
        </Box>
        <Box mb='xl'>
          <Text variant='title'>User Engagement Metrics Over Time</Text>
          <Line data={userEngagementData} />
        </Box>
        <Box mb='xl'>
          <Text variant='title'>Subscription Revenue</Text>
          <Bar
            data={subscriptionRevenueData}
            options={{
              indexAxis: 'y', // Display bars horizontally
              scales: {
                x: {
                  stacked: true, // Stack bars horizontally
                },
                y: {
                  stacked: true, // Stack bars vertically
                },
              },
            }}
          />
        </Box>
        <Box mb='xl'>
          <Text variant='title'>Interviews Scheduled Over Time</Text>
          <Line data={interviewsScheduledData} />
        </Box>
        <Box mb='xl'>
          <Text variant='title'>Job Post Engagement Metrics</Text>
          <Line data={jobPostEngagementData} />
        </Box>
      </div>
    </Box>
  );
};

export default Dashboard;
