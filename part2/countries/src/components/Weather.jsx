import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ latitude, longitude, capital }) => {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (latitude == null || longitude == null) {
      return
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`

    axios
      .get(url)
      .then(response => {
        setWeather(response.data)
        setError(null)
      })
      .catch(err => {
        console.error('Error fetching weather', err)
        setError('Could not fetch weather data')
      })
  }, [latitude, longitude])

  if (latitude == null || longitude == null) {
    return <div>No weather data available (missing coordinates)</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!weather) {
    return <div>Loading weather...</div>
  }

  const temperature = weather.current.temperature_2m
  const tempUnit = weather.current_units.temperature_2m
  const wind = weather.current.wind_speed_10m
  const windUnit = weather.current_units.wind_speed_10m

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>temperature {temperature} {tempUnit}</div>
      <div>wind {wind} {windUnit}</div>
    </div>
  )
}

export default Weather