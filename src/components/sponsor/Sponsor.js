import React from 'react'
import HeroHat from '../../img/hero-hat.png'

function Sponsor() {
  return (
    <>
        <div className='bg-slate-100 p-4 lg:p-20'>
            <img className='w-[15%] mt-8 mb-4 lg:w-[8%]' src={HeroHat} alt='herohat'/>
            <h1 className='font-primary w-[60%] text-xl lg:text-5xl lg:w-[40%] '>SPONSORS & MEDIA PARTNER</h1>
            <div className='flex flex-col justify-center items-center gap-8 mt-12 mb-16 lg:text-3xl lg:mt-32'>
                <h1 className='font-primary text-md'>SPONSORS</h1>
                <h1 className='font-primary text-md'>OFFICIAL PARTNERS</h1>
                <h1 className='font-primary text-md'>MEDIA PARTNERS</h1>
            </div>
        </div>
    </>
  )
}

export default Sponsor