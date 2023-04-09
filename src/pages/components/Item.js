import React from 'react';
import Image from 'next/image';
import gambarItem from '../images/frame 28.svg';
import Link from 'next/link';
export default function Item() {
  return (
    <div className='border m-4 w-3/12 rounded-lg'>
      <Link href="/detail">
        <Image src={gambarItem} alt='items' height={500} className='rounded-t-lg' />
        <div className='m-4'>
          <h1 className='font-bold text-slate-900 text-xl'>Judul item</h1>
          <p className='text-slate-500'>Harga item</p>
        </div>
      </Link>
    </div>
  );
}
