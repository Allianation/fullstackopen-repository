import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [country, setCountry] = useState({});
  const [showCountry, setShowCountry] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${searchName}`)
      .then((response) => {
        const { data } = response;
        setCountries(data);
      });
  }, [searchName]);

  const handleChange = (event) => {
    setSearchName(event.target.value);
    setShowCountry(false);
  };

  const handleClick = (country) => {
    setCountry(country);
    setShowCountry(true);
  };

  return (
    <div>
      <Filter handleChange={handleChange} searchName={searchName} />

      <div>
        {countries.length > 10 && (
          <div>Too many matches, specify another filter</div>
        )}

        {countries.length >= 2 && countries.length <= 10 &&
          countries.map((country) => {
            return (
              <Countries
                country={country}
                handleClick={handleClick}
                key={country.name.common}
              />
            );
          })}

        {countries.length === 1 && !showCountry && <Country country={countries[0]} />}

        {showCountry && <Country country={country} />}
      </div>
    </div>
  );
};

export default App;
