import React from 'react';
import Image from 'next/image';
import gambarItem from '../images/frame 28.svg';
import Link from 'next/link';
export default function Item() {
  return (
    <div className='border border-black m-4 w-3/12'>
      <Link className=' ' href="/detail">
        <Image src={gambarItem} alt='items' height={500} />
        <div className='my-4 mx-2'>
          <h1 className='font-bold text-slate-900'>Judul item</h1>
          <p className='text-slate-500'>Harga item</p>
        </div>
      </Link>
    </div>
  );
}
