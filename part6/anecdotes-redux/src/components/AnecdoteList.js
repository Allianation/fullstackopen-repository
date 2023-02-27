import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => {
        if (
          anecdote.content
            .toLocaleLowerCase()
            .search(filter.toLocaleLowerCase()) !== -1
        ) {
          return (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default AnecdoteList;
