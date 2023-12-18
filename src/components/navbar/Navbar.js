import React, { useEffect, useState } from 'react'
import schlogo from '../../img/schlogo.png'
import NotesIcon from '@mui/icons-material/Notes';
import Drawer from '@mui/material/Drawer';
import DrawerComponent from './DrawerComponent';
import ModalPopOver from './ModalPopOver';

function Navbar() {

    const [showDrawer, setShowDrawer] = useState(false)

    function handlerMenu() {
        setShowDrawer(!showDrawer);
    }

  return (
    <>
        <header>
            <div className='flex w-full justify-between bg-[rgb(33,33,33)] p-2 py-4 fixed z-50 md:px-[7%]'>
                <div className='flex flex-row items-center gap-2 p-2'>
                    <div className='w-7 lg:w-10'>
                            <img src={schlogo} alt='logo'/>
                    </div>
                    <h1 className='flex font-primary text-white text-xs lg:text-lg'>Schematics 2023 X UBS GOLD</h1>
                </div>


                <div className='flex p-2 text-white transform -scale-x-100 lg:hidden'>
                    <button className='' onClick={handlerMenu}>
                        <NotesIcon/>
                        { 
                            <Drawer open={showDrawer} children={<DrawerComponent/>} anchor='left'/>
                        }
                    </button>
                </div>

                <div className='gap-4 justify-center align-middle items-center hidden lg:flex'>
                    <ModalPopOver/>  
                    <a href='/' className='text-white m-4'>Tentang Kami</a>
                    <div className='p-2 px-4 rounded-lg font-semibold bg-white'>
                        <a href='/'>Masuk</a>
                    </div>
                    <div className='p-2 px-4 rounded-lg font-semibold text-white border-2 border-white'>
                        <a href='/'>Daftar</a>
                    </div>
                </div>

            </div>
        </header>
    </>
  )
}

export default Navbar