import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then((response) => {
        const { current } = response.data;
        setWeather(current);
      });
  }, [api_key, country.capital]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
      </div>
      <div>
        <h3>languages</h3>
        <ul>
          {Object.values(country.languages).map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <img src={country.flags.png} alt="Country Flag PNG" width="6%" />
      </div>
      <div>
        <h3>Weather in {country.capital}</h3>
        <div>
          <div>
            <div>
              <strong>temperature: </strong> {weather.temperature} Celcius
            </div>
            <img src={weather.weather_icons} alt="Weather Icon" width="5%" />
            <div>
              <strong>wind: </strong> {weather.wind_speed} mph direction {weather.wind_dir}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
