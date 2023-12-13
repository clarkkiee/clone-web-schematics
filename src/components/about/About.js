import React from 'react'
import heroHat from '../../img/hero-hat.png' 
import Carousel from '../Util/Slider'

function About() {
  return (
    <>
        <div className='w-full mt-[64px] bg-[rgb(33,33,33)] max-h-min'>
          <div className='flex flex-col py-12 justify-center items-center gap-4'>
            <img className='h-[10px]' src={heroHat} alt='herohat'/>
            <h1 className='font-primary text-2xl text-white '>TENTANG SCHEMATICS</h1>
            <p className='text-center text-white text-md px-5'>Schematics adalah salah satu event terbesar ITS yang diselenggarakan oleh mahasiswa Teknik Informatika ITS. Schematics merupakan event yang berfokus pada kompetisi pemrograman dan logika, serta memperkenalkan perkembangan teknologi kepada masyarakat luas melalui subevent-subevent Schematics</p>
            <div className='mt-4 p-1 px-2 rounded-md bg-white'>
              <a className='font-semibold text-black text-sm' href='/'>Lihat Selengkapnya</a>
            </div>
          </div>
          {/* Gallery */}
          <Carousel/>

          
        </div>
    </>
  )
}

export default About