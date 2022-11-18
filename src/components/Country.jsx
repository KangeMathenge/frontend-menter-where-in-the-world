import React from 'react'
import { Link } from 'react-router-dom'
const Country = ({country,details}) => {
  return (
    <>
    <Link to={`/${country?.name?.common}`}>
    <div className='bg-white dark:bg-darkblue shadow-lg rounded'>
        <img src={country?.flags?.png} alt={country?.name?.common} className='w-full h-[300px] md:h-[200px]  object-cover object-center rounded'/>
        <div className='mt-4 p-4'>
            <h2 className='text-xl my-4 font-bold text-darkgray dark:text-white'>{country?.name?.common}</h2>
            <p className='text-sm text-darkgray dark:text-white'><span className='font-bold'>Population:</span> {country?.population.toLocaleString("en-US")}</p>
            <p className='text-sm text-darkgray dark:text-white'><span className='font-bold'>Region:</span> {country?.region}</p>
            <p className='text-sm text-darkgray dark:text-white'><span className='font-bold'>Capital:</span> {country?.capital}</p>
        </div>
    </div>
    </Link>
    </>
  )
}

export default Country