import React from 'react'

export default function Brand({brand}) {
  return (
    <div className='m-4 border w-4/12 h-2/6 p-4'>
        <div className=' flex justify-center items-center border h-full'>
            <h1 className='text-3xl font-bold'>{brand}</h1>
        </div>
    </div>
  )
}
