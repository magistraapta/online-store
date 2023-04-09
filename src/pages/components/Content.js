import React from 'react';
import Brand from './Brand';
import nike from '../images/nike.jpeg';
import newBalance from '../images/new-balance.jpeg';
import adidas from '../images/adidas.jpeg';

export default function Content() {
  return (
    <div>
      <div className=' flex justify-center my-4'>
        <div className='flex justify-around  w-9/12'>
          <Brand brand={nike} />
          <Brand brand={newBalance} />
          <Brand brand={adidas} />
        </div>
      </div>
    </div>
  );
}
