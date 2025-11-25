import Weather from './Weather'

const CountryDetail = ({ country }) => {
  const capital = country.capital && country.capital[0]

  const capitalLatlng = country.capitalInfo && country.capitalInfo.latlng
  const countryLatlng = country.latlng

  const latitude =
    capitalLatlng && capitalLatlng.length === 2
      ? capitalLatlng[0]
      : countryLatlng && countryLatlng.length === 2
      ? countryLatlng[0]
      : null

  const longitude =
    capitalLatlng && capitalLatlng.length === 2
      ? capitalLatlng[1]
      : countryLatlng && countryLatlng.length === 2
      ? countryLatlng[1]
      : null

  const languages = country.languages
    ? Object.values(country.languages)
    : []

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {capital}</div>
      <div>area {country.area}</div>

      <h3>languages:</h3>
      <ul>
        {languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />

      {capital && (
        <Weather
          capital={capital}
          latitude={latitude}
          longitude={longitude}
        />
      )}
    </div>
  )
}

export default CountryDetail