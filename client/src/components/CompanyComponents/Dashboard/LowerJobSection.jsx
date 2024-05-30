import React from 'react';
import { Link } from 'react-router-dom';

export default function LowerJobSection({ userData }) {
  return (
    <>
      <section className='lowerJobSection'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex gap-10 pb-8'>
            <div className='messageBox border bg-white border-gray-400 rounded-lg p-5 w-1/2'>
              <h5 className='text-left font-semibold'>Messages (0)</h5>
              <hr className='h-px my-3 bg-gray-400 border-0' />

              <div className='flex justify-center items-center h-fit'>
                <p>No messages to review!</p>
              </div>
            </div>
            <div className='billingInfo border bg-white border-gray-400 rounded-lg p-5 w-1/2'>
              <h5 className='text-left font-semibold'>Manage billing details</h5>
              <hr className='h-px my-3 bg-gray-400 border-0' />
              <ul className='text-left'>
                <li className='py-2 font-semibold text-jobportal-pink'>
                  <Link to='' className='hover:underline'>
                    View billing history
                  </Link>
                </li>
                <li className='py-2 font-semibold text-jobportal-pink'>
                  <Link to='' className='hover:underline'>
                    Update payment method
                  </Link>
                </li>
                <li className='py-2 font-semibold text-jobportal-pink'>
                  <Link to='' className='hover:underline'>
                    View performance report
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
