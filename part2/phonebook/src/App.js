import React, { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import Persons from "./components/Persons";
import { getAll, getByName, update, create, delete_ } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getAll().then((response) => {
      const { data } = response;
      setPersons(data);
    });
  }, []);

  const handleChange = (event) => {
    const eventName = event.target.name;

    if (eventName === "name") {
      setNewName(event.target.value);
    } else if (eventName === "number") {
      setNewNumber(event.target.value);
    } else if (eventName === "search") {
      setSearchName(event.target.value);
    }
  };

  const handleClick = (id, name) => {
    const message = `Delete ${name}`;

    if (window.confirm(message)) {
      delete_(id);
      const newPersons = persons.filter((p) => p.id !== id);
      setPersons(newPersons);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getByName(newName).then((response) => {
      const person = response.data[0];

      const newPerson = {
        name: newName,
        number: newNumber,
      };

      if (person) {
        const message = `${newName} is already added to phonebook, replace the old number with a new one?`;

        if (window.confirm(message)) {
          update(person.id, newPerson).then((response) => {
            getAll().then((response) => {
              const { data } = response;
              setPersons(data);
              setNewName("");
              setNewNumber("");
            });
          });
        }
      } else {
        create(newPerson).then((response) => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });
      }
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleChange={handleChange} searchName={searchName} />

      <h2>Add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        searchName={searchName}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
