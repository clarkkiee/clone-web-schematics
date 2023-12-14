import React from 'react'
import HeroHat from '../../img/hero-hat.png'

function Sponsor() {
  return (
    <>
        <div className='bg-slate-100 p-4'>
            <img className='w-[15%] mt-8 mb-4' src={HeroHat} alt='herohat'/>
            <h1 className='font-primary w-[60%] text-xl'>SPONSORS & MEDIA PARTNER</h1>
            <div className='flex flex-col justify-center items-center gap-8 mt-12 mb-16'>
                <h1 className='font-primary text-md'>SPONSORS</h1>
                <p>GAONO SPONSOR. PROJECT ISENG</p>
                <h1 className='font-primary text-md'>OFFICIAL PARTENERS</h1>
                <p>GADUWE PARTNER. SEK JOMBLO.</p>
                <h1 className='font-primary text-md'>MEDIA PARTNERS</h1>
                <p>GITHUB KU DEWE. NDANG FOLLOW!!!</p>
            </div>
        </div>
    </>
  )
}

export default Sponsor