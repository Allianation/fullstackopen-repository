import React, { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import Notification from "./components/Notification";
import { PersonForm } from "./components/PersonForm";
import Persons from "./components/Persons";
import { getAll, create, delete_ } from "./services/persons";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      delete_(id)
        .then((response) => {
          const newPersons = persons.filter((p) => p.id !== id);
          setPersons(newPersons);

          setSuccessMessage(`Deleted ${name}`);
          setTimeout(() => setSuccessMessage(null), 5000);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setTimeout(() => setErrorMessage(null), 5000);
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    create(newPerson)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");

        setSuccessMessage(`Added ${newName}`);
        setTimeout(() => setSuccessMessage(null), 5000);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        setTimeout(() => setErrorMessage(null), 5000);
      });
  };

  return (
    <div className="app">
      <h2>Phonebook</h2>

      {successMessage && (
        <Notification type="success" message={successMessage} />
      )}

      {errorMessage && <Notification type="error" message={errorMessage} />}

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
