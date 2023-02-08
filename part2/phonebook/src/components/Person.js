const Person = ({ name, number, id, handleClick }) => {
  return (
    <div>
      {name} {number}{" "}
      <button onClick={() => handleClick(id, name)}>delete</button>
    </div>
  );
};

export default Person;
