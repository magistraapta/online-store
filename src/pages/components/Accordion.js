import React, { useState } from 'react';
export default function Accordion({ question }) {
  const [show, setShow] = useState(false);

  return (
    <div className=' flex justify-center'>
      <div className='  w-10/12 my-3  p-4 rounded-lg bg-blue-500 items-center'>
        <h5 className='text-white text-lg font-semibold'>{question.title}</h5>
        <button onClick={() => setShow(!show)} className='text-white '>
          {show ? 'Hide ' : 'Show '}
        </button>
        {show && <p className=' gird text-white'>{question.desc}</p>}
      </div>
    </div>
  );
}
