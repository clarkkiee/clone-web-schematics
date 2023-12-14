import React from 'react'
import heroHat from '../../img/hero-hat.png' 
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import about1 from '../../img/about-1.webp'
import about2 from '../../img/about-2.webp'
import about3 from '../../img/about-3.webp'

function About() {

  return (
    <>
        <div className='w-full overflow-hidden mt-[64px] bg-[rgb(33,33,33)] max-h-min pb-14'>
          <div className='flex flex-col py-12 justify-center items-center gap-4'>
            <img className='h-[10px]' src={heroHat} alt='herohat'/>
            <h1 className='font-primary text-2xl text-white '>TENTANG SCHEMATICS</h1>
            <p className='text-center text-white text-md px-5'>Schematics adalah salah satu event terbesar ITS yang diselenggarakan oleh mahasiswa Teknik Informatika ITS. Schematics merupakan event yang berfokus pada kompetisi pemrograman dan logika, serta memperkenalkan perkembangan teknologi kepada masyarakat luas melalui subevent-subevent Schematics</p>
            <div className='mt-4 p-1 px-2 rounded-md bg-white'>
              <a className='font-semibold text-black text-sm' href='/'>Lihat Selengkapnya</a>
            </div>
          </div>
          {/* Gallery */}
          <div className='flex '>
            <Swiper
              spaceBetween={50}
              modules={[Autoplay]}
              slidesPerView={1}
              autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                  }}
              loop
              className='swiper-container absolute w-max-[100%]'>
              <SwiperSlide><img className='md:w-[100%] w-[80%] justify-center mx-auto' src={about1} alt='about-1'/></SwiperSlide>
              <SwiperSlide><img className='md:w-[100%] w-[80%] justify-center mx-auto' src={about2} alt='about-2'/></SwiperSlide>
              <SwiperSlide><img className='md:w-[100%] w-[80%] justify-center mx-auto' src={about3} alt='about-3'/></SwiperSlide>
            </Swiper>

          </div>
          
        </div>
    </>
  )
}

export default About