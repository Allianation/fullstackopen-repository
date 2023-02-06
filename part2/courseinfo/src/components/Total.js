const Total = ({ parts }) => {
  const initialValue = 0;

  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

export { Total };
