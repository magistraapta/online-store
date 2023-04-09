import React from 'react';
import Image from 'next/image';


export default function Brand({ brand }) {
  return (
    <div className=' my-4 mx-2 -red-500  w-4/12 flex items-center '>
      <Image src={brand} alt='pict'  />

    </div>
  );
}
