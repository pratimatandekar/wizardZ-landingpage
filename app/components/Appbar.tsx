import React from 'react'
import Logo from './Logo'

function Appbar() {
  return (
   <div className='flex bg-[#FFFFFF] flex-row mt-12 justify-between text-lg font-medium items-center mx-60'>
    <div>
     <Logo/>
    </div>
    <div className='flex flex-row gap-15 mx-10 text-lg font-medium items-center '>
    <h1>About us</h1>
    <h1>Services</h1>
    <h1>Use Case</h1>
    <h1>Pricing</h1>
    <h1>Blog</h1>
    </div>
    <div className='px-5 py-2 border-2 rounded-lg'>
      <h1>Request a demo</h1>
    </div>
   </div>
  )
}

export default Appbar