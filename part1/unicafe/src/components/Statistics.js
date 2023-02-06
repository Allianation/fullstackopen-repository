import { Statistic } from "./Statistic";
import { Title } from "./Title";

const Statistics = (props) => {
  return (
    <div>
      <Title text={props.text} />

      <table>
        <tbody>
          <Statistic text={"good"} value={props.good} />
          <Statistic text={"neutral"} value={props.neutral} />
          <Statistic text={"bad"} value={props.bad} />
        </tbody>
      </table>
    </div>
  );
};

export { Statistics };
