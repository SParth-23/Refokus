import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data = [
        {URL: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/jobget-lgo-color.svg", number: 48},
        {URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg", number: 2},
        {URL: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bcc-logo-color.svg", number: 11},
        {URL: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/jobget-lgo-color.svg", number: 48},
        {URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg", number: 2},
        {URL: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bcc-logo-color.svg", number: 11}]
  return (
    <div className='pt-20 flex justify-evenly'>
    {data.map((item, index) => (
        <Stripe val={item} />
    ))}      
    </div>
)}

export default Stripes;