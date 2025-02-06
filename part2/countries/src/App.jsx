import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterTextBox from './filterBox';
import countryServices from './countryServices';
import CountryDetails from './countryDetails';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    countryServices
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])


  const [filterData, setFilterData] = useState({
    filtering: false,
    filterText: "",
  });

  const filteredCountries = filterData.filtering
  ? countries.filter(country =>
      country.name.official.toLowerCase().includes(filterData.filterText.toLowerCase()) ||
      country.name.common.toLowerCase().includes(filterData.filterText.toLowerCase())
    )
  : countries;

  if (filteredCountries.length > 0)
  {
    console.log(filteredCountries[0]);
  }
  return (
    <div>
      <h1>Country Data</h1>
      <FilterTextBox filterData={filterData} setFilterData={setFilterData} setSelected={setSelectedCountry} />

      {
        filteredCountries.length > 10 ? 
          <div>
            <br></br>
            <span>Too many matches! Please be more specific.</span>
          </div>
        :
        filteredCountries.length === 1 ? 
        <>
          <CountryDetails country={filteredCountries[0]}></CountryDetails>
        </>
        : 
        <ul>
          {filteredCountries.map((country) => {
            return (
              <li key={country.ccn3}>
                <span>{country.name.official}</span>
                <button onClick={() => handleShowDetails(country)}>
                  Show
                </button>
              </li>
          )
          })}

          {selectedCountry ? 
            <CountryDetails country={selectedCountry}></CountryDetails>
            : null
          }
        </ul>
      }
    </div>
  );
};

export default App;
