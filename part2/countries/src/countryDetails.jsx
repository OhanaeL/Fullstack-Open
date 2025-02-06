import { useState, useEffect } from "react";
import getWeather from "./weatherAPI";

const CountryDetails = ({ country }) => {
  if (!country) return null;
  

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(country.name.common)
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      })
  }, [])


  return (
    <div>
      <h2>{country.name.official} / {country.name.common}</h2>
      <span>Capital: {country.capital}</span> <br />
      <span>Area: {country.area}</span>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

      {weather ? 
      <>
      <h3>Weather</h3>
      <span>Temperature: {weather.current.temp_c} C</span> <br />
      <img src={weather.current.condition.icon}/> <br />
      <span>Wind: {weather.current.wind_kph} kph</span>
      </>
      : null
      }
    </div>
  );
};

export default CountryDetails;
