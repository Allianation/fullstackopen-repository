import React from "react";

const Country = ({ country }) => {
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
    </div>
  );
};

export default Country;
