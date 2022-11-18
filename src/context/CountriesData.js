const url = 'https://restcountries.com/v3.1'

export const getCountries = async () => {
    
  const response = await fetch(`${url}/all`)
  const data = await response.json()
  return data
}
export const getCountry = async (name) => {
  const response = await fetch(`${url}/name/${name}`)
  const data = await response.json()
//   console.log(data)
  return data
}

