import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeroHat from '../../img/hero-hat.png'
import npc1 from '../../img/bg-hero-npc-1.webp'
import npc2 from '../../img/bg-hero-npc-2.webp'
import npc3 from '../../img/bg-hero-npc-3.webp'
import nlc1 from '../../img/bg-hero-nlc-1.webp'
import nlc2 from '../../img/bg-hero-nlc-2.webp'
import nlc3 from '../../img/bg-hero-nlc-3.webp'
import bst1 from '../../img/bg-hero-bst-1.webp'
import bst2 from '../../img/bg-hero-bst-2.webp'
import bst3 from '../../img/bg-hero-bst-3.webp'
import rv1 from '../../img/bg-hero-reeva-1.webp'
import rv2 from '../../img/bg-hero-reeva-2.webp'
import rv3 from '../../img/bg-hero-reeva-3.webp'

function Hero() {
    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <>
        <section id='hero' className='flex flex-col min-h-[600px] max-h-[740px] h-screen w-full'>
            <div className='absolute flex overflow-x-hidden w-full h-[120vh]'>
                <div className='relative -z-[100] flex-1 overflow-x-hidden'>
                    <div className='absolute left-0 w-[16%] top-16' data-aos="fade-right" data-aos-duration="500">
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block overflow-hidden relative'>
                                <img src={npc1} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute left-16 w-[16%] top-11' data-aos="fade-right" data-aos-duration="200" data-aos-delay="500">
                        <figure className='w-full'>
                            <span className='box-border block'>
                                <img src={npc3} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute top-40 left-12 w-[16%]' data-aos="fade-right" data-aos-duration="200" data-aos-delay="300">
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block'>
                                <img src={npc2} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute -right-[60px] w-[16%] top-[58px]' data-aos="fade-left" data-aos-duration="500">
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block'>
                                <img src={nlc1} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute right-[70px] w-[13%] top-[70px]' data-aos="fade-left" data-aos-duration="200" data-aos-delay="500">
                        <figure className='w-full'>
                            <span className='box-border block'>
                                <img src={nlc2} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute top-44 -right-2 w-[16%]' data-aos="fade-left" data-aos-duration="200" data-aos-delay="300">
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block'>
                                <img src={nlc3} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute left-16 w-[16%] top-[600px]' data-aos="fade-right" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" >
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block'>
                                <img src={bst1} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute left-0 w-[10%] top-[680px]' data-aos="fade-right" data-aos-duration="200" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom">
                        <figure className='w-full'>
                            <span className='box-border block'>
                                <img src={bst2} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute left-16 top-[740px] w-[28%]' data-aos="fade-right" data-aos-duration="200" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block'>
                                <img src={bst3} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>


                    <div className='absolute -right-8 w-[25%] top-[520px]' data-aos="fade-right" data-aos-duration="500" data-aos-anchor-placement="center-bottom">
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block'>
                                <img src={rv1} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute right-24 w-[12%] top-[680px]' data-aos="fade-right" data-aos-duration="200" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom">
                        <figure className='w-full'>
                            <span className='box-border block'>
                                <img src={rv2} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                    <div className='absolute -right-4 top-[745px] w-[22%]' data-aos="fade-left" data-aos-duration="200" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                        <figure className='w-full -translate-x-1/3'>
                            <span className='box-border block'>
                                <img src={rv3} alt='hero-1'/>
                            </span>
                        </figure>
                    </div>

                </div>
            </div>
            <div className='flex relative min-h-screen top-24 items-center mx-auto'>
                <div className=' w-full' data-aos="fade-up">
                        <div className='flex w-[100vw] flex-col items-center text-[rgb(33,33,33)] font-primary'>
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
                            <a href={'/about'}>
                                <div className='flex mt-8 justify-center items-center ring-[rgb(33,33,33)] rounded-full ring-2 w-12 h-12 animate-bounce cursor-pointer'>
                                    <div className='flex justify-center '>
                                        <KeyboardArrowDownIcon/>
                                    </div>
                                </div>
                            </a>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero