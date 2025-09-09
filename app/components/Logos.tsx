import React from 'react'
import Image from 'next/image'

function Logos() {
  return (
    <div className='flex flex-row items-center text-black justify-center px-10 mt-20 space-x-10'>
        <Image src="/amazon.png" alt="hero" width={192} height={208} />
        <Image src="/dribbble.jpg" alt="hero" width={192} height={308} />
        <Image src="/hub-spot.png" alt="hero" width={192} height={308} />
        <Image src="/notion.png" alt="hero" width={192} height={308} />
        <Image src="/netflix-1.png" alt="hero" width={192} height={308} />
        <Image src="/zoom.png" alt="hero" width={192} height={308} />
    </div>
  )
}

export default Logos