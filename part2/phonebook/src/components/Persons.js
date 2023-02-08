import React from "react";
import Person from "./Person";

const Persons = ({ persons, searchName, handleClick }) => {
  return (
    <div>
      {persons.map((person) => {
        if (
          person.name
            .toLocaleLowerCase()
            .search(searchName.toLocaleLowerCase()) !== -1
        ) {
          return <Person key={person.name} {...person} handleClick={handleClick} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Persons;
