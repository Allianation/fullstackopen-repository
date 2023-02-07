import React from "react";

const Filter = ({ handleChange, searchName }) => {
  return (
    <>
      find countries:
      <input
        type="text"
        onChange={handleChange}
        value={searchName}
        name="search"
      />
    </>
  );
};

export default Filter;
