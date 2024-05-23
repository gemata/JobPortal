import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const data = {
  labels: ['$10', '', '', '$14', '', '', '', '', '', '$22'],
  datasets: [
    {
      label: 'Number of Votes',
      data: [6, 7, 8, 9, 7, 6, 5, 4, 3, 2],
      backgroundColor: [
        'lightgray',
        'lightgray',
        'lightgray',
        'rgb(80 7 36)',
        'lightgray',
        'rgb(192 132 252)',
        'rgb(192 132 252)',
        'rgb(192 132 252)',
        'rgb(192 132 252)',
        'rgb(192 132 252)',
      ],
      barPercentage: 0.8,
      categoryPercentage: 0.8,
      borderRadius: 4,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export default function PageTwo() {
  return (
    <>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-5 w-full justify-center'>
          <h2 className='text-2xl text-left font-semibold'>Salary</h2>
          <p className='text-left'>Review the salary we estimated for your job and adjust as needed. Check your local minimum wage.</p>
          <label className='self-start' htmlFor='salaryFrom'>
            Salary From
          </label>
          <div className='flex items-center'>
            <span className='border border-r-0 rounded-s-lg h-full h-full aspect-square flex justify-center items-center bg-gray-100 font-medium select-none'>$</span>
            <input type='number' name='salaryFrom' className='border w-full p-3 px-5 rounded-e-lg' placeholder='Salary From' />
          </div>
          <label className='self-start' htmlFor='salaryTo'>
            Salary To
          </label>
          <div className='flex items-center'>
            <span className='border border-r-0 rounded-s-lg h-full h-full aspect-square flex justify-center items-center bg-gray-100 font-medium select-none'>$</span>
            <input type='number' name='salaryTo' className='border w-full p-3 px-5 rounded-e-lg' placeholder='Salary To' />
          </div>
        </div>

        <div className='border p-5 ps-20 flex flex-col gap-5 justify-center items-start relative w-full'>
          <div className='resetPassword__form-message absolute top-2 left-0' style={{ width: '40px' }}>
            <section>
              <span style={{ backgroundColor: '#007d7f' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
              </span>
            </section>
          </div>
          <h3 className='text-2xl font-medium'>Your pay is competitive</h3>
          <p>Jobs having competitive salaries are 38% more likely to report a hire by day 7.</p>

          <div className='flex justify-between items-center w-full gap-5 py-5'>
            <div className='w-full m-auto'>
              <Bar data={data} options={options} />
            </div>
            <div className='flex flex-col justify-start items-start w-full gap-5'>
              <div>
                <div className='flex gap-2 items-center'>
                  <div className='rounded-full w-5 h-5 bg-pink-950'></div>
                  <h3 className='text-left text-lg'>Average Pay</h3>
                </div>
                <p className='text-left'>$14-$15 per hour</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <div className='rounded-full w-5 h-5 bg-purple-400'></div>
                  <h3 className='text-left text-lg'>Competitive Pay</h3>
                </div>
                <p className='text-left'>$16-$17+ per hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
