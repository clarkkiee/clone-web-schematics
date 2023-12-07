import React from 'react'
import schlogo from '../../img/schlogo.png'
import NotesIcon from '@mui/icons-material/Notes';

function Navbar() {
  return (
    <>
        <header>
            <div className='flex w-full justify-between bg-[rgb(33,33,33)] p-2 py-2 fixed'>
                <div className='flex flex-row items-center gap-2 p-2'>
                    <div className='w-7'>
                            <img src={schlogo} alt='logo'/>
                    </div>
                    <h1 className='flex font-primary text-white text-xs'>Schematics 2023 X UBS GOLD</h1>
                </div>
                <div className='flex p-2 text-white transform -scale-x-100'>
                    <button>
                        <NotesIcon/>
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar