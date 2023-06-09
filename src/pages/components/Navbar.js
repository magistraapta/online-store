import React from 'react';

export default function Navbar() {
  return (
    <div className=' text-white flex justify-center py-6 bg-blue-600 z-50 top-0 sticky'>
      <div className=' flex justify-between  w-9/12 items-center'>
        <h1 className='text-4xl font-bold'>hypeBoy</h1>
        <div className='  w-4/12'>
          <ul className='flex justify-around'>
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
