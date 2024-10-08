import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.67%] px-4 py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center'>
        <img className='h-6' src={val.URL} alt="" />
        <span className=' font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe