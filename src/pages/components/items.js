import React from 'react'
import Item from './Item'
export default function Items() {
  const data = [
    {

    }
  ]
  return (
    <div className='  flex justify-center my-4'>
      <div className='flex justify-between  -blue-500 w-9/12'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  )
}
