import React from "react";

const Countries = ({ country, handleClick }) => {
  return (
    <div>
      {country.name.common} <button onClick={() => handleClick(country)}>show</button>
    </div>
  );
};

export default Countries;
