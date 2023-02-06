import { Title } from "./Title";

const Anecdote = ({ anecdote, votes, text }) => {
  return (
    <>
      <Title text={text} />
      <div>{anecdote}</div>
      <div>has {votes} votes.</div>
    </>
  );
};

export { Anecdote };
