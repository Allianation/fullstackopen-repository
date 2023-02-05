const Total = ({ parts }) => {
  let result = 0;

  parts.forEach((part) => {
    result = result + part.exercises;
  });

  return <p>Number of exercises {result}</p>;
};

export { Total };
