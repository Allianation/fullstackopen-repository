import { Message } from "./Message";
import { Statistic } from "./Statistic";
import { Title } from "./Title";

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  return (
    <>
      {all === 0 ? (
        <Message />
      ) : (
        <div>
          <Title text={props.text} />

          <table>
            <tbody>
              <Statistic text={"good"} value={props.good} />
              <Statistic text={"neutral"} value={props.neutral} />
              <Statistic text={"bad"} value={props.bad} />
              <Statistic text={"all"} value={all} />
              <Statistic
                text={"average"}
                value={(props.good - props.bad) / all}
              />
              <Statistic
                text={"positive"}
                value={(props.good / all) * 100}
                symbol={" %"}
              />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export { Statistics };
