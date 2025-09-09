import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='flex flex-row items-center justify-center mx-60 mt-20 space-y-6'>
        <div className='flex flex-col space-y-6 mr-20 item-left'>
            <p className='text-4xl font-medium'>Nagivate the <br /> digital landspace <br /> for success</p>
           
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatibus eum laboriosam velit minus fugit <br /> voluptas nam dicta alias, corrupti minima amet <br /> soluta a exercitationem voluptate, fuga nihil. Reiciendis, ducimus adipisci!</p>
           <button className='bg-black cursor-pointer text-white py-4 px-1 rounded-md'>Book a consectetur</button>
        </div>
        <div>
            <Image src="/image.png" alt="hero" width={392} height={308} />
        </div>
    </div>
  )
}

export default Hero