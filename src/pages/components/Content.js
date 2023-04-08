import React from 'react';
import Brand from './Brand'

export default function Content() {
  return (
    <div className='border flex justify-center my-4 h-screen'>
      <div className='flex border w-9/12' >
        <Brand brand="Adidas"/>
        <Brand brand="Nike"/>
        <Brand brand="New Balance"/>
      </div>
    </div>
  );
}
