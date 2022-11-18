import React from 'react'
import {BsMoon, BsFillMoonFill} from 'react-icons/bs'
import { useThemeUpdate, useTheme } from '../context/ThemeContext'
const Navbar = () => {
    const toggleTheme = useThemeUpdate();
    const darkTheme = useTheme();
  return (
    <nav className='h-[70px] shadow-lg dark:bg-verydarkblue dark:text-white'>
        <div className='flex items-center w-full h-full justify-center p-2'>
        <h2 className='text-xl font-bold mr-auto'>Where in the world?</h2>
        <div className="flex items-center justify-center cursor-pointer" onClick={toggleTheme}>
           {darkTheme?<BsFillMoonFill size={14}/>: <BsMoon size={14}/>}
            <span className='mx-1'>Dark Mode</span>
        </div>
        </div>
    </nav>
  )
}

export default Navbar