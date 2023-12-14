import React from 'react'
import reeva from '../../img/illustration-reeva.webp'
import nlc1 from '../../img/illustration-nlc.webp'
import nlc2 from '../../img/background-nlc-1.webp'
import nlc3 from '../../img/background-nlc-2.webp'
import npc from '../../img/illustration-npc.webp'
import bst from '../../img/illustration-bst.webp'

function Events() {
  return (
    <>
        <div className='flex flex-col px-4 gap-2 pb-16'>
            <div className='flex flex-col gap-2'>
                <img className='flex w-[70%] mt-8 ml-10' src={reeva} alt='reeva' data-aos="fade-right" data-aos-duration="500"/>
                <div className='w-max px-2 text-white font-bold border-t-[28px] border-r-[13px] border-t-sky-500 border-r-transparent'>
                    <h3 className='h-0 relative -top-6 text-sm'>Schematics REEVA</h3>
                </div>
                <h1 className='font-primary font-semibold text-2xl'>REVOLUTIONARY ENTERTAINMENT AND EXPO WITH VARIOUS ARTS</h1>
                <p>Expo dan konser musik dengan bintang tamu yang tidak kalah seru</p>
                <div className='mt-6'>
                    <a className='p-2 border-2 border-slate-800 rounded-md text-sm font-semibold' href={'/'}>Lihat Selengkapnya</a>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='relative mt-24'>
                    <figure className='absolute -top-10' data-aos="fade-left" data-aos-duration="100">
                        <span className='relative flex left-72'>
                            <img className='w-[40%]' src={nlc2} alt='nlc2'/>
                        </span>
                    </figure>
                    <figure className='absolute top-64 left-8' data-aos="fade-left" data-aos-duration="100">
                        <span className='relative flex left-72'>
                            <img className='w-[40%]' src={nlc3} alt='nlc3'/>
                        </span>
                    </figure>
                    <img src={nlc1} alt='nlc1' data-aos="fade-left" data-aos-duration="400"/>
                </div>
                <div className='w-max px-2 text-black font-bold border-t-[28px] border-r-[13px] border-t-yellow-400 border-r-transparent'>
                    <h3 className='h-0 relative -top-6 text-sm'>Schematics NLC</h3>
                </div>
                <h1 className='font-primary font-semibold text-2xl'>NATIONAL LOGIC COMPETITION</h1>
                <p>Kompetisi logika nasional yang melatih kemampuan berfikir melalui lomba dan kegiatan yang seru</p>
                <div className='mt-6'>
                    <a className='p-2 border-2 border-slate-800 rounded-md text-sm font-semibold' href={'/'}>Lihat Selengkapnya</a>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <img className='flex w-[70%] mt-28 my-8 ml-10' src={npc} alt='reeva' data-aos="fade-right" data-aos-duration="500"/>
                <div className='w-max px-2 text-white font-bold border-t-[28px] border-r-[13px] border-t-rose-600 border-r-transparent'>
                    <h3 className='h-0 relative -top-6 text-sm'>Schematics NPC</h3>
                </div>
                <h1 className='font-primary font-semibold text-2xl'>NATIONAL PROGRAMMING CONTEST</h1>
                <p>Kompetisi pemrograman nasional untuk menguji kemampuan pemrograman peserta di tingkat SMA/sederajat maupun tingkat mahasiswa</p>
                <div className='mt-6'>
                    <a className='p-2 border-2 border-slate-800 rounded-md text-sm font-semibold' href={'/'}>Lihat Selengkapnya</a>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <img className='flex w-[70%] mt-28 my-8 ml-10' src={bst} alt='reeva' data-aos="fade-left" data-aos-duration="500"/>
                <div className='w-max px-2 text-white font-bold border-t-[28px] border-r-[13px] border-green-500 border-r-transparent'>
                    <h3 className='h-0 relative -top-6 text-sm'>Schematics BST</h3>
                </div>
                <h1 className='font-primary font-semibold text-2xl'>BOOTCAMP AND SEMINAR OF TECHNOLOGY</h1>
                <p>Acara seminar teknologi yang menghadirkan pembicara-pembicara ternama</p>
                <div className='mt-6'>
                    <a className='p-2 border-2 border-slate-800 rounded-md text-sm font-semibold' href={'/'}>Lihat Selengkapnya</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Events