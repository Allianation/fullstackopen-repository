import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const personsNames = persons.map((person) => person.name);

    if (personsNames.includes(newName)) {
      alert(`${newName} is already added to phonebook.`);
    } else {
      const newPerson = {
        name: newName,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return <div key={person.name}>{person.name}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
