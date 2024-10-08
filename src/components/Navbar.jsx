import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='px-20 w-full mx-auto py-6 border-b-[1px] border-zinc-700 flex align-middle justify-between items-center'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"/>
        <div className="Links flex gap-14 ml-20">
            {["Home", "Work","Culture", "", "News"].map((elem, index) => (
                <a className='font-normal text-sm' href="#">
                   {index === 3 && (<span className='mr-2 inline-block h-5 w-0.5 bg-zinc-400'></span>)}
                    {elem}
                </a>
                )
            )}
        </div>
        <Button title='Get Started'/>
    </div>
  )
}

export default Navbar