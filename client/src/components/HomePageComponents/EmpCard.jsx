import React from 'react'

const EmpCard = () => {
  return (
    <>
    <div className='container max-w-[1200px] mx-auto my-0 px-[15px]'>
  <div className='flex space-x-4 mt-[100px] mb-[100px]'>
    <div className='bg-gray-100 p-6 rounded-lg flex-1'>
      <h2 className='text-2xl font-bold mb-2'>Become a Candidate</h2>
      <p className='text-gray-700 mb-4'>Join our platform to find your dream job. Create your profile and start applying to top job opportunities today.</p>
      <button className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600'>Register Now →</button>
    </div>
    <div className='bg-purple-600 p-6 rounded-lg text-white flex-1'>
      <h2 className='text-2xl font-bold mb-2'>Become an Employer</h2>
      <p className='mb-4'>Post job listings and find the best talent for your company. Our platform makes it easy to connect with qualified candidates.</p>
      <button className='bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-200'>Register Now →</button>
    </div>
  </div>
</div>

    </>
  )
}

export default EmpCard