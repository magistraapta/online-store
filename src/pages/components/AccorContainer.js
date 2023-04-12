import React from 'react'
import Accordion from './Accordion'

export default function AccorContainer() {
  return (
    <div className='  flex justify-center my-4'>
      <div className=' w-9/12'>
        {data.map((d)=> (
          <Accordion key={d.id} question={d}/>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    id: 1,
    title: 'Apakah barang yang ada sudah terjamin kualitasnya?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestiae? Nobis optio placeat illum accusamus inventore provident accusantium ipsa voluptatem consequatur cumque atque dolores laboriosam adipisci unde molestiae odit vero repellendus neque excepturi officia itaque, delectus eligendi! Harum, veritatis soluta.',
  },
  {
    id: 2,
    title: 'Bagaimana proses pengiriman dilakukan?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestiae? Nobis optio placeat illum accusamus inventore provident accusantium ipsa voluptatem consequatur cumque atque dolores laboriosam adipisci unde molestiae odit vero repellendus neque excepturi officia itaque, delectus eligendi! Harum, veritatis soluta.',
  },
  {
    id: 3,
    title: 'Apakah pelanggan bisa melakukan return barang?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestiae? Nobis optio placeat illum accusamus inventore provident accusantium ipsa voluptatem consequatur cumque atque dolores laboriosam adipisci unde molestiae odit vero repellendus neque excepturi officia itaque, delectus eligendi! Harum, veritatis soluta.',
  },
];
