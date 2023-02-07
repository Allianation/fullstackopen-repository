import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchName, setSearchName] = useState("");

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
  };

  return (
    <div>
      find countries:
      <input
        type="text"
        onChange={handleChange}
        value={searchName}
        name="search"
      />
      <div>
        {countries.length > 10 && (
          <div>Too many matches, specify another filter</div>
        )}

        {countries.length >= 2 && countries.length <= 10 &&
          countries.map((country) => {
            return <div key={country.name.common}>{country.name.common}</div>;
          })}

        {countries.length === 1 && (
          <div>
            <h2>{countries[0].name.common}</h2>
            <div>
              <div>capital {countries[0].capital}</div>
              <div>population {countries[0].population}</div>
            </div>
            <div>
              <h3>languages</h3>
              <ul>
                {Object.values(countries[0].languages).map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
            <br />
            <div>
              <img
                src={countries[0].flags.png}
                alt="Country Flag PNG"
                width="6%"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
