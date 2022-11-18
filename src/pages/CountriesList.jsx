import React,{useState,useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { getCountries } from '../context/CountriesData'
import { Country } from '../components'
const CountriesList = () => {
    const [search, setSearch] = useState('')
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getCountries()
            setCountries(data)
            setFilteredCountries(data)
        }
        fetchCountries()
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const filteredCounty = countries.filter(country => country?.name?.common.toLowerCase().includes(e.target.value.toLowerCase()))
       filteredCounty.length > 0 ? setFilteredCountries(filteredCounty) :  setFilteredCountries(countries)
        setSearch('')     
    }
    const searchRegion = (e) => {
        const filteredCounty = countries.filter(country => country?.region.toLowerCase().includes(e.target.value.toLowerCase()))
       filteredCounty.length > 0 ? setFilteredCountries(filteredCounty) :  setFilteredCountries(countries)    
    }
   const regions = ['Africa','Americas','Asia','Europe','Oceania']
  return (
    <div className='p-3 w-full h-full dark:bg-verydarkblue'>
        <div className='flex items-start md:items-center md:justify-between justify-center flex-col md:flex-row'>
        <div className='w-full md:w-[40vw] relative flex items-center dark:bg-darkblue mb-4 md:mb-0'>
        <i className='absolute ml-3 top-[50%] translate-y-[-50%] text-darkgray'><AiOutlineSearch size={20}/></i>
        <input 
            className='py-4 pl-9 text-darkgray dark:text-white border-none shadow-lg rounded w-full mx-auto focus:outline-none dark:bg-darkblue' type="text" name="search" id="search" 
            placeholder='Search for a country...' 
            onKeyPress={(e)=>e.key==='Enter'?handleSearch(e):null}            
            />
        </div>
        <div>
            <select name="regions" id="regions" 
            placeholder='Filter by region'
            className='py-4 px-9 text-darkgray dark:text-white border-none shadow-lg rounded w-full md:w-[20vw] lg:w-[15vw] mx-auto focus:outline-none dark:bg-darkblue'
            onChange={(e)=>searchRegion(e)}
            >
                <option value='none' defaultValue selected disabled hidden>Filter by Region</option>
            {regions.map(region => <option key={region} value={region}>{region}</option>)}
                
            </select>
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 '>
            {filteredCountries.map(country => (
                <Country key={country.name.official} country={country}/>
            ))}
    </div>
    </div>
  )
}

export default CountriesList