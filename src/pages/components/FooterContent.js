import React from 'react';

export default function FooterContent({ title }) {
  return (
    <div className=' -blue-500 w-3/12'>
      <h5 className='font-bold text-xl'>{title}</h5>
      <div className='w-6/12'>
        <hr />
      </div>
      <ul className='my-2'>
        <li>About us</li>
        <li>About us</li>
        <li>About us</li>
      </ul>
    </div>
  );
}
