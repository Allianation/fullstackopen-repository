const Total = ({ parts }) => {
  let result = 0;

  parts.forEach((part) => {
    result = result + part.exercises;
  });

  return <p><strong>total of {result} exercises</strong></p>;
};

export { Total };
