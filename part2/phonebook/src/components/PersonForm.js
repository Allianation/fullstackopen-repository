const PersonForm = ({ handleSubmit, handleChange, newName, newNumber }) => {
  return (
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
  );
};

export { PersonForm };
