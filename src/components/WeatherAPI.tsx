import { useEffect, useState } from 'react';

type PropsType = {
  lat: any,
  lng: any,
}

const WeatherAPI = (props: PropsType) => {
  const key = "e51267c357017ca3a21eada5bfb90157"
  const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lng}&appid=${key}`
  const [temp, setTemp] = useState('')
  const [weather, setWeather] = useState('')
  
  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setTemp(data.list[0].main.temp)
      setWeather(data.list[0].weather[0].description)
    })
  }, [])

  return(
    <div>
      <h2>Weather API</h2>
      {temp}
      {weather}
      
    </div>
  )
}

export default WeatherAPI;