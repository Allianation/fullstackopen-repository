const Filter = ({ handleChange, searchName }) => {
  return (
    <div>
      filter show with:
      <input
        type="text"
        onChange={handleChange}
        value={searchName}
        name="search"
      />
    </div>
  );
};

export { Filter };
