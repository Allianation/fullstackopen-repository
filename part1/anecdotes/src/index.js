import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Anecdote } from "./components/Anecdote";
import { Button } from "./components/Button";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = (props) => {
  const { anecdotes } = props;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const indexOfMax = votes.indexOf(Math.max(...votes))

  const handleClickNext = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleClickVote = () => {
    const votes_copy = [...votes];
    votes_copy[selected] += 1;
    setVotes(votes_copy);
  };

  return (
    <>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} text={"Anecdote of the day"} />
      <Button handleClick={handleClickVote} text={"vote"} />
      <Button handleClick={handleClickNext} text={"next anecdote"} />
      <Anecdote anecdote={anecdotes[indexOfMax]} votes={votes[indexOfMax]} text={"Anecdote with most votes"} />
    </>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
