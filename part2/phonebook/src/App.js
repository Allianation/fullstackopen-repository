import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const personsNames = persons.map((person) => person.name);

    if (personsNames.includes(newName)) {
      alert(`${newName} is already added to phonebook.`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with:
        <input
          type="text"
          onChange={handleChange}
          value={searchName}
          name="search"
        />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input
            type="text"
            onChange={handleChange}
            value={newName}
            name="name"
          />
        </div>
        <div>
          number:
          <input
            type="text"
            onChange={handleChange}
            value={newNumber}
            name="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          if (person.name.toLocaleLowerCase().search(searchName.toLocaleLowerCase()) !== -1) {
            return (
              <div key={person.name}>
                {person.name} {person.number}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default App;
