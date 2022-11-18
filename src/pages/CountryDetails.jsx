import React,{useState,useEffect} from 'react'
import {getCountry} from '../context/CountriesData'
import { Link, useParams } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
const CountryDetails = () => {
  const {country} = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCountry = async () => {
      const data = await getCountry(country)
      setCountryDetails(data[0])
      if(data[0]) setLoading(false)
    }
    fetchCountry()
  }, [country])
 if(loading) return <h1>Loading...</h1>
  return (
    <div className='p-3 w-full h-full md:h-screen'>
      <Link to='/'><button className='text-black dark:text-white flex items-center py-2 px-6 shadow-md dark:bg-darkblue'><BsArrowLeft className='mr-2'/> Back</button></Link>
      {countryDetails ? 
      (<div className='bg-white mt-6 dark:bg-verydarkblue shadow-lg rounded grid grid-cols-1 md:grid-cols-2'>
        <div className='p-4'>
        <img src={countryDetails?.flags?.png} alt={countryDetails?.name?.official} className='w-[90vw] h-[300px] md:h-[400px] object-cover object-center rounded'/>
        </div>
        <div className=' p-4'>

            <h2 className='text-xl mb-4 font-bold text-darkgray dark:text-white'>{countryDetails?.name?.common}</h2>
            <div className='grid grid-col-1 md:grid-cols-2'>
            <div>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Native Name:</span> {countryDetails?.name?.nativeName[Object.keys(countryDetails?.name?.nativeName)[0]].common}</p>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Population:</span> {countryDetails?.population.toLocaleString("en-US")}</p>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Region:</span> {countryDetails?.region}</p>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Sub Region:</span> {countryDetails?.subregion}</p>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Capital:</span> {countryDetails?.capital}</p>
            </div>

            <div className='mt-1 md:mt-0'>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Top Level Domain:</span> {countryDetails?.tld}</p>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Currencies:</span> {countryDetails?.currencies[Object.keys(countryDetails?.currencies)]?.name}</p>
            <p className='text-sm text-darkgray dark:text-white my-2'><span className='font-bold '>Languages:</span> {Object.keys(countryDetails?.languages).map((language,i)=><span key={i}>{countryDetails?.languages[language]} </span>)}</p>
            </div>
            </div>
            <div className='flex flex-col md:flex-row content-center md:items-center'>
                <h2 className='text-xl my-4 font-bold text-darkgray dark:text-white'>Border Countries:</h2>
                <div className='flex flex-wrap'>
                  {countryDetails?.borders?
                  (countryDetails?.borders?.map((border,i) => (
                    <Link key={i} to={`/${border}`}><div className='bg-white dark:bg-darkblue px-6 dark:text-white shadow-xl rounded py-2 m-1 cursor-pointer'>{border}</div></Link>
                  ))):(<p className='text-sm text-darkgray dark:text-white md:ml-4'>No border countries</p>)
                }
                    
                </div>

            </div>
        </div>
    </div>
      ) : (
        <h1>Country not found</h1>
      )}


    </div>
  )
}

export default CountryDetails