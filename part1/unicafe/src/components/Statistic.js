const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      {isNaN(props.value) ? (
        <td>0</td>
      ) : (
        <td>
          {props.value} {props.symbol}
        </td>
      )}
    </tr>
  );
};

export { Statistic };
