import React from 'react';
import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <div className=' bg-neutral-950 text-white'>
      <div className=' -yellow-500 flex justify-center'>
        <div className='w-9/12 my-4'>
          <h3 className='font-bold text-3xl'>hypeBoy</h3>
          <hr />
        </div>
      </div>
      <div className='   flex items-center justify-center'>
        <div className=' flex justify-between  -red-500 my-8 w-9/12'>
          <FooterContent title='Information' />
          <FooterContent title='Company' />
          <FooterContent title='Support' />
        </div>
      </div>
      <div className=' -green-500 flex justify-center'>
        <div className='  w-9/12 my-4'>
          <p>Magistraapta 2023</p>
        </div>
      </div>
    </div>
  );
}
