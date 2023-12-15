import React, { useEffect, useState } from 'react'
import schlogo from '../../img/schlogo.png'
import NotesIcon from '@mui/icons-material/Notes';
import Drawer from '@mui/material/Drawer';
import DrawerComponent from './DrawerComponent';

function Navbar() {

    const [showDrawer, setShowDrawer] = useState(false)

    function handlerMenu() {
        setShowDrawer(!showDrawer);
    }

  return (
    <>
        <header>
            <div className='flex w-full justify-between bg-[rgb(33,33,33)] p-2 py-2 fixed z-50'>
                <div className='flex flex-row items-center gap-2 p-2'>
                    <div className='w-7'>
                            <img src={schlogo} alt='logo'/>
                    </div>
                    <h1 className='flex font-primary text-white text-xs'>Schematics 2023 X UBS GOLD</h1>
                </div>
                <div className='flex p-2 text-white transform -scale-x-100 '>
                    <button className='' onClick={handlerMenu}>
                        <NotesIcon/>
                        { 
                            <Drawer open={showDrawer} children={<DrawerComponent/>} anchor='left'/>
                        }
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar