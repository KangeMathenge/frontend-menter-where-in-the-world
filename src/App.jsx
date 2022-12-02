import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components'
import { CountriesList, Country } from './pages'
import { useTheme } from './context/ThemeContext'
const App = () => {
  const darkTheme = useTheme();
  return (
    <div className={`${darkTheme && 'dark'}  h-full min-h-full `}>
      <div className='w-full h-full bg-white dark:bg-verydarkblue'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<CountriesList/>}/>
      <Route path='/:country' element={<Country/>}/>
    </Routes>
      </div>
    </div>
  )
}

export default App