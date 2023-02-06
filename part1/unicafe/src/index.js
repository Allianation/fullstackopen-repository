import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button";
import { Statistics } from "./components/Statistics";
import { Title } from "./components/Title";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  return (
    <>
      <Title text={"give feedback"} />
      <Button text={"good"} handleClick={handleClickGood} />
      <Button text={"neutral"} handleClick={handleClickNeutral} />
      <Button text={"bad"} handleClick={handleClickBad} />
      <Statistics text={"statistics"} good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
