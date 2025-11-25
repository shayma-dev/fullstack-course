import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetail from './components/CountryDetail'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  // Only show results when user has typed something
  const countriesToShow = filter
    ? countries.filter(country =>
        country.name.common
          .toLowerCase()
          .includes(filter.toLowerCase())
      )
    : []

  const handleShowCountry = (name) => {
    // Set filter to this exact name so the list becomes that single country
    setFilter(name)
  }

  return (
    <div>
      <h1>Country information</h1>

      <div>
        find countries
        <input value={filter} onChange={handleFilterChange} />
      </div>

      <Content
        countries={countriesToShow}
        onShowCountry={handleShowCountry}
      />
    </div>
  )
}

// Decides what to render based on number of matches
const Content = ({ countries, onShowCountry }) => {
  if (countries.length === 0) {
    return <div>Type a country name to start</div>
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length > 1) {
    return (
      <div>
        {countries.map(country => (
          <div
            key={country.cca3}
            className="country-list-item"
          >
            {country.name.common}
            <button onClick={() => onShowCountry(country.name.common)}>
              show
            </button>
          </div>
        ))}
      </div>
    )
  }

  if (countries.length === 1) {
    return <CountryDetail country={countries[0]} />
  }

  return null
}

export default App