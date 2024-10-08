import React from 'react'
import Button from '../components/Button'

function Product({val,button}) {
    const { title, description, live} = val;

  return (
    <div className='w-full py-20 text-white'>
        <div className='w-full mx-auto flex items-center justify-between'>
            <h1 className='w-1/5 text-4xl pl-20 font-semibold capitalize'>{title}</h1>
            <div className='dets w-2/5'>
                <p className='mb-10'>{description}</p>
                {live && <Button ButtonTitle='View Case Study' />}
            </div>
        </div>
    </div>
  )
}

export default Product