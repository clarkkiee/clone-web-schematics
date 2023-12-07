import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeroHat from '../../img/hero-hat.png'

function Hero() {
  return (
    <>
        <div className = 'flex h-[100vh]'>
            <div className='flex mx-auto mt-48 items-center justify-center'>
                <div className='flex flex-col items-center justify-center text-[rgb(33,33,33)] font-primary'>
                    <div className='mb-8'>
                        <img className='h-[10px]' src={HeroHat} alt='hero-hat'></img>
                    </div>
                    <h1 className='text-2xl'>SCHEMATICS 2023</h1>
                    <h6 className='text-2xl'>X</h6>
                    <h1 className='text-2xl'>UBS GOLD</h1>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='border-[0.5px] w-[40px] h-0'></div>
                        <h1 className='font-sans text-md text-[rgb(104,112,131)] tracking-widest font-medium'>MUDA BERBUDAYA</h1>
                        <div className='border-[0.5px] w-[40px] h-0'></div>
                    </div>
                    <a href='#about'>
                        <div className='flex mt-8 justify-center items-center ring-[rgb(33,33,33)] rounded-full ring-2 w-12 h-12 animate-bounce cursor-pointer'>
                            <div className='flex justify-center '>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero